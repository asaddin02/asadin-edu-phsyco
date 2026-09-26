import test from 'node:test';
import assert from 'node:assert/strict';
import { PHYSICS_ENTITIES as entities } from '../js/data/entities.js';
import { PHYSICS_DOMAINS as domains } from '../js/data/domains.js';
import { PHYSICS_EQUATIONS as equations } from '../js/data/equations.js';
import { PHYSICAL_CONSTANTS as constants } from '../js/data/constants.js';
import { PHYSICS_EXPERIMENTS as experiments } from '../js/data/experiments.js';
import { PHYSICS_GRAPH_DATA as graph } from '../js/data/graph-data.js';
import { CATALOG, resolveReference } from '../js/core/catalog.js';
import { searchEngine } from '../js/core/search.js';
import { LESSONS, LESSON_RESOURCES, loadProgress, saveProgress } from '../js/core/learning.js';
import { solveEquation } from '../js/core/solver.js';
import { escapeHTML } from '../js/core/html.js';
import { carnotModel, magneticStep, circuitModel } from '../js/simulations/physics-models.js';
import { ProjectileSimulation } from '../js/simulations/projectile-sim.js';
import { PendulumSimulation } from '../js/simulations/pendulum-sim.js';
import { BohrAtomSimulation } from '../js/simulations/bohr-atom-sim.js';

const approx=(a,b,tol=1e-8)=>assert.ok(Math.abs(a-b)<=tol,`${a} != ${b} ± ${tol}`);

test('Every domain has a real entity; collection IDs are unique and references resolve',()=>{
  for(const list of [entities,domains,equations,constants,experiments,LESSONS]) assert.equal(new Set(list.map(x=>x.id)).size,list.length);
  for(const d of domains) assert.ok(entities.some(e=>e.domainId===d.id),d.id);
  for(const e of [...entities,...equations,...experiments]) assert.ok(domains.some(d=>d.id===e.domainId),e.id);
  for(const e of [...entities,...equations]) for(const id of e.relatedEntityIds||e.relatedConceptIds||[]) assert.ok(resolveReference(id),`${e.id} → ${id}`);
  for(const e of equations) for(const v of e.variables) assert.ok(resolveReference(v.quantityId),`${e.id}: ${v.quantityId}`);
  for(const node of graph.nodes) assert.ok(resolveReference(node.id),node.id);
  for(const lesson of LESSONS) { assert.ok(LESSON_RESOURCES[lesson.id]?.length); for(const id of LESSON_RESOURCES[lesson.id]) assert.ok(resolveReference(id)); }
});

test('Source metadata is explicit and well-formed; it does not imply full scientific review',()=>{
  for(const record of [...entities,...equations,...constants,...experiments]) {
    assert.ok(record.sources?.length,record.id);
    for(const source of record.sources) { assert.equal(new URL(source.url).protocol,'https:'); assert.ok(source.title && source.scope); }
  }
  assert.equal(entities.find(e=>e.id==='gravity').reviewStatus,'PARTIAL');
  assert.ok(entities.find(e=>e.id==='string-theory-multiverse').scientificStatus.includes('SPECULATIVE'));
});

test('Search finds the requested types and lesson destinations, not just domain mentions',()=>{
  for(const [q,id] of [['Mass','mass'],['Newton’s First Law','newton-first-law'],['Ohm','ohms-law'],['Gravitational Constant','gravitational-constant'],['Kilogram','kilogram'],['Electron','electron'],['Photoelectric Effect','photoelectric-effect'],['Millikan','millikan-oil-drop'],['LHC','lhc-instrument'],['Dorongan dan Tarikan','sd-1-1']]) assert.ok(searchEngine.search(q,{limit:100}).some(r=>r.id===id),q);
  assert.deepEqual(searchEngine.search('no-such-physics-zzzz'),[]);
  assert.deepEqual(searchEngine.search('   '),[]);
});

test('Cross-domain graph connects gravity, force, mass, acceleration, Newton, orbit and relativity',()=>{
  const visited=new Set(['gravity']),todo=['gravity'];
  while(todo.length) {const n=todo.pop();for(const l of graph.links) {const other=l.source===n?l.target:l.target===n?l.source:null;if(other&&!visited.has(other)){visited.add(other);todo.push(other);}}}
  for(const id of ['force','mass','acceleration','newton-second-law','orbit','general-relativity-theory']) assert.ok(visited.has(id),id);
});

test('All calculators accept defaults and reject blank/nonfinite/out-of-range values',()=>{
  for(const eq of equations.filter(e=>e.calculator)) {
    const values=Object.fromEntries(eq.calculator.inputs.map(i=>[i.key,i.default]));
    assert.doesNotMatch(String(solveEquation(eq,values)),/NaN|Infinity|gagal|valid|gunakan/i,eq.id);
    const input=eq.calculator.inputs[0];
    assert.match(solveEquation(eq,{...values,[input.key]:NaN}),/valid/);
    assert.match(solveEquation(eq,{...values,[input.key]:input.max+Math.abs(input.max)+1}),/gunakan/);
  }
  const ohm=equations.find(e=>e.id==='ohms-law');
  approx(Number(solveEquation(ohm,{V:12,R:240})),.05);
  assert.match(solveEquation(ohm,{V:12,R:0}),/gunakan/);
  assert.match(solveEquation(equations.find(e=>e.id==='lorentz-factor'),{beta:1}),/gunakan/);
  assert.match(solveEquation(equations.find(e=>e.id==='snells-law-refraction'),{n1:1.5,n2:1,theta1:60}),/TIR/);
});

test('Carnot path is continuous, obeys PV=nRT and PV^γ, and closes with correct work',()=>{
  for(const [Th,Tc] of [[600,300],[1000,150],[400,380]]) {
    const m=carnotModel(Th,Tc),R=8.31446261815324;
    for(let stage=0;stage<4;stage++) {
      const a=m.point(stage,0),b=m.point(stage,1),next=m.point((stage+1)%4,0);
      approx(b.V,next.V);approx(b.P,next.P,1e-7);
      const mid=m.point(stage,.4);approx(mid.P*mid.V,R*mid.T,1e-8);
      if(stage===1||stage===3) approx(a.P*a.V**(5/3),b.P*b.V**(5/3),1e-8);
    }
    let integral=0;
    for(let st=0;st<4;st++)for(let i=0;i<2000;i++){const a=m.point(st,i/2000),b=m.point(st,(i+1)/2000);integral+=(a.P+b.P)/2*(b.V-a.V);}
    approx(integral,m.work,.02);approx(m.work/m.Qh,m.efficiency);
  }
  assert.throws(()=>carnotModel(300,300),RangeError);
});

test('Uniform magnetic field conserves speed and returns to start after one period; B=0 is straight',()=>{
  for(const q of [-1,1]) {
    const s={x:0,y:0,vx:120,vy:0};const dt=(2*Math.PI/1.5)/10000;
    for(let i=0;i<10000;i++)magneticStep(s,{q,B:1.5,mass:1},dt);
    approx(Math.hypot(s.vx,s.vy),120,1e-8);approx(s.x,0,1e-8);approx(s.y,0,1e-8);
  }
  const s={x:0,y:0,vx:3,vy:4};magneticStep(s,{q:1,B:0,mass:1},2);assert.deepEqual(s,{x:6,y:8,vx:3,vy:4});
});

test('Series and parallel circuit satisfy Kirchhoff and power balance',()=>{
  for(const topology of ['series','parallel']) {
    const r=circuitModel(12,100,200,topology);
    if(topology==='series'){approx(r.v1+r.v2,12);approx(r.i1,r.i2);}
    else {approx(r.i1+r.i2,r.current);approx(r.v1,r.v2);}
    approx(r.power,r.i1**2*100+r.i2**2*200);
  }
  assert.throws(()=>circuitModel(12,0,100),RangeError);
});

test('Projectile without drag agrees with analytical range and time',()=>{
  const sim=new ProjectileSimulation();sim.params.drag=0;sim.reset();sim.start();
  for(let i=0;i<10000&&sim.state.running;i++)sim.update(.001);
  approx(sim.state.totalDistance,35**2/9.81,.02);
  approx(sim.state.flightTime,2*35*Math.sin(Math.PI/4)/9.81,.001);
});

test('Undamped pendulum energy bounded; Bohr HUD uses unrounded energy',()=>{
  const p=new PendulumSimulation();p.params.damping=0;p.reset();const energy=p.state.Etotal;
  for(let i=0;i<2000;i++)p.update(.005);
  assert.ok(Math.abs(p.state.Etotal-energy)/energy<.005);
  const b=new BohrAtomSimulation();b.hudElement={innerHTML:''};b.updateHUD();
  assert.ok(b.hudElement.innerHTML.includes((1239.84/(13.6*(1/4-1/9))).toFixed(1)));
});

test('Storage accepts only known lessons and gracefully handles malformed or unavailable storage',()=>{
  let saved='{}';globalThis.localStorage={getItem:()=>saved,setItem:(_,value)=>saved=value};
  assert.deepEqual(loadProgress(),[]);saveProgress(['sd-1-1','fake','sd-1-1']);assert.deepEqual(loadProgress(),['sd-1-1']);
  saved='bad json';assert.deepEqual(loadProgress(),[]);
  globalThis.localStorage={getItem:()=>{throw Error();},setItem:()=>{throw Error();}};
  assert.deepEqual(loadProgress(),[]);assert.equal(saveProgress(['sd-1-1']),false);delete globalThis.localStorage;
});

test('User input escaping protects both attributes and text',()=>{
  const value='"/><img src=x onerror=alert(1)>&\'';
  assert.equal(escapeHTML(value),'&quot;/&gt;&lt;img src=x onerror=alert(1)&gt;&amp;&#39;');
});
