// Asadin Edu Physics · Automated Scientific & Runtime Test Runner

import assert from 'assert';
import { PHYSICS_DOMAINS } from '../js/data/domains.js';
import { PHYSICS_ENTITIES } from '../js/data/entities.js';
import { PHYSICAL_CONSTANTS } from '../js/data/constants.js';
import { PHYSICS_EQUATIONS } from '../js/data/equations.js';
import { PHYSICS_EXPERIMENTS } from '../js/data/experiments.js';
import { CURRICULUM_DATA } from '../js/data/curriculum.js';
import { PHYSICS_GRAPH_DATA } from '../js/data/graph-data.js';

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
    failed++;
  }
}

console.log('\n======================================================');
console.log('🧪 RUNNING ASADIN EDU PHYSICS DATA STRUCTURE & BASELINE CALCULATOR CHECKS');
console.log('======================================================\n');

// 1. Audit Physics Domains (Foundations -> Cosmology)
test('Domains: 28 domain descriptors have required fields', () => {
  assert.strictEqual(PHYSICS_DOMAINS.length, 28, 'Should have exactly 28 physics domains');
  const requiredDomains = [
    'foundations', 'kinematics', 'dynamics', 'work-energy', 'momentum', 'rotation',
    'gravitation', 'fluids', 'oscillations', 'waves', 'sound', 'thermal', 'thermodynamics',
    'electricity', 'magnetism', 'electromagnetism', 'optics', 'special-relativity',
    'general-relativity', 'quantum', 'atomic', 'nuclear', 'particle-physics',
    'condensed-matter', 'plasma', 'astrophysics', 'cosmology', 'applied-physics'
  ];
  for (const r of requiredDomains) {
    const found = PHYSICS_DOMAINS.find(d => d.id === r);
    assert.ok(found, `Domain '${r}' must be defined`);
    assert.ok(found.name && found.indonesianName, `Domain '${r}' must have English and Indonesian names`);
    assert.ok(found.subdomains && found.subdomains.length >= 3, `Domain '${r}' must have at least 3 subdomains`);
  }
});

// 2. Audit Entities & Multi-Layer Depth
test('Entities: Entities have names, summary and four nonempty layer fields', () => {
  assert.ok(PHYSICS_ENTITIES.length >= 15, 'Should have a substantial catalog of physical entities');
  for (const ent of PHYSICS_ENTITIES) {
    assert.ok(ent.id, 'Entity must have an id');
    assert.ok(ent.name && ent.indonesianName, `Entity '${ent.id}' must have names`);
    assert.ok(ent.summary, `Entity '${ent.id}' must have a summary`);
    assert.ok(ent.layers, `Entity '${ent.id}' must have layers object`);
    assert.ok(ent.layers.simple, `Entity '${ent.id}' must have a simple layer`);
    assert.ok(ent.layers.standard, `Entity '${ent.id}' must have a standard layer`);
    assert.ok(ent.layers.deepDive, `Entity '${ent.id}' must have a deepDive layer`);
    assert.ok(ent.layers.advanced, `Entity '${ent.id}' must have an advanced layer`);
  }
});

// 3. Audit Physical Constants (CODATA & 2019 SI)
test('Constants: Selected constant values and exactness flags match references', () => {
  assert.ok(PHYSICAL_CONSTANTS.length >= 18);
  const c = PHYSICAL_CONSTANTS.find(c => c.symbol === 'c');
  assert.equal(c.value, '299,792,458');
  assert.equal(c.isExact, true);
  assert.equal(PHYSICAL_CONSTANTS.find(c => c.symbol === 'h').isExact, true);
  assert.equal(PHYSICAL_CONSTANTS.find(c => c.symbol === 'G').isExact, false);
  assert.equal(PHYSICAL_CONSTANTS.find(c => c.id === 'electron-mass').value, '9.1093837139 × 10⁻³¹');
  assert.equal(PHYSICAL_CONSTANTS.find(c => c.id === 'vacuum-permeability').isExact, false);
});

// 4. Audit Equation Explorer & Interactive Solvers
test('Equations: Default solvers return finite output; Newton and kinetic energy examples match', () => {
  for (const eq of PHYSICS_EQUATIONS) {
    assert.ok(eq.id && eq.latexDisplay, `Equation '${eq.id}' must have a formula`);
    assert.ok(eq.variables && eq.variables.length >= 2, `Equation '${eq.id}' must have variables`);
    if (eq.calculator) {
      assert.ok(typeof eq.calculator.compute === 'function', `Equation '${eq.id}' calculator must be a function`);
      const defaultInputs = {};
      eq.calculator.inputs.forEach(inp => defaultInputs[inp.key] = inp.default);
      const res = eq.calculator.compute(defaultInputs);
      assert.ok(res !== null && res !== undefined && !/NaN|Infinity/.test(String(res)), `Equation '${eq.id}' compute should return valid value`);
    }
  }

  // Check Newton's Second Law F = m * a
  const fMa = PHYSICS_EQUATIONS.find(e => e.id === 'newton-second-law');
  assert.strictEqual(fMa.calculator.compute({ m: 10, a: 2 }), 20, 'F = 10 * 2 = 20 N');

  // Check Kinetic Energy E_k = 0.5 * m * v^2
  const ke = PHYSICS_EQUATIONS.find(e => e.id === 'kinetic-energy-classic');
  assert.strictEqual(ke.calculator.compute({ m: 2, v: 3 }), 9, 'E_k = 0.5 * 2 * 9 = 9 J');
});

// 5. Audit Landmark Experiments
test('Experiments: Six experiment dossiers contain apparatus, variables and interpretation', () => {
  assert.ok(PHYSICS_EXPERIMENTS.length >= 6, 'Should have at least 6 landmark experiments');
  for (const exp of PHYSICS_EXPERIMENTS) {
    assert.ok(exp.scientist && exp.year, `Experiment '${exp.id}' must have scientist and year`);
    assert.ok(exp.objective, `Experiment '${exp.id}' must have objective`);
    assert.ok(exp.apparatus && exp.apparatus.length > 0, `Experiment '${exp.id}' must list apparatus`);
    assert.ok(exp.variables && exp.variables.independent && exp.variables.dependent, `Experiment '${exp.id}' must have variables`);
    assert.ok(exp.observations && exp.results && exp.interpretation, `Experiment '${exp.id}' must have results and interpretation`);
  }
});

// 6. Audit Curriculum & Multi-Level Learning Paths
test('Curriculum: SD, SMP, SMA, University and Educator levels are all populated', () => {
  const levels = CURRICULUM_DATA.levels;
  assert.strictEqual(levels.length, 5, 'Must have 5 distinct educational levels');
  const requiredLevels = ['sd', 'smp', 'sma', 'university', 'educator'];
  for (const rl of requiredLevels) {
    const lvl = levels.find(l => l.id === rl);
    assert.ok(lvl, `Level '${rl}' must exist`);
    assert.ok(lvl.modules.length >= 2, `Level '${rl}' must have at least 2 modules`);
    for (const mod of lvl.modules) {
      assert.ok(mod.lessons.length >= 1, `Module '${mod.id}' must have lessons`);
    }
  }
});

// 7. Audit Knowledge Graph Network Integrity
test('Knowledge Graph: Nodes and links have valid references without orphaned links', () => {
  const nodeIds = new Set(PHYSICS_GRAPH_DATA.nodes.map(n => n.id));
  assert.ok(PHYSICS_GRAPH_DATA.nodes.length >= 20, 'Graph should have at least 20 nodes');
  assert.ok(PHYSICS_GRAPH_DATA.links.length >= 25, 'Graph should have at least 25 interconnecting links');

  for (const link of PHYSICS_GRAPH_DATA.links) {
    assert.ok(nodeIds.has(link.source), `Link source '${link.source}' must exist in nodes`);
    assert.ok(nodeIds.has(link.target), `Link target '${link.target}' must exist in nodes`);
  }
});

console.log(`\n======================================================`);
console.log(`📊 RESULTS: ${passed} PASSED | ${failed} FAILED`);
console.log(`======================================================\n`);

if (failed > 0) {
  process.exitCode = 1;
} else {
  process.exitCode = 0;
}
