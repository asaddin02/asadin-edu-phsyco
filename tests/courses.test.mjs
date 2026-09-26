import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {COURSES,LEVELS,coursesForLevel,findCourse,LEGACY_LESSON_MAP} from '../js/data/courses/index.js';
import {PHYSICS_DOMAINS} from '../js/data/domains.js';
import {DEEP_DIVES} from '../js/data/courses/deep-dives.js';
import {topicLabel} from '../js/data/topic-labels.js';
import {loadStudy,saveStudy,resetStudy,exportStudy} from '../js/core/study.js';
const coverage=JSON.parse(fs.readFileSync(new URL('../docs/audit/coverage.json',import.meta.url)));
test('Every master knowledge bullet has an explicitly authored lesson mapping, not a domain title',()=>{
 const topics=coverage.filter(r=>r.kind==='topic'&&r.section>=10&&r.section<=31);assert.equal(topics.length,252);
 for(const row of topics){const topic=row.requirement.replace(/^[^:]+: /,'');const lessons=COURSES.filter(c=>c.topics.some(t=>t.toLowerCase()===topic.toLowerCase()));assert.ok(lessons.length,`${row.section}: ${topic}`);for(const c of lessons){assert.ok(c.explanation.length>300);assert.ok(c.example.length>100);assert.ok(c.question&&c.reason&&c.url);}}
});
test('All courses are reachable; old lesson routes resolve; all pathways use distinct real lessons',()=>{
 assert.equal(new Set(COURSES.map(c=>c.id)).size,COURSES.length);
 const reached=new Set();for(const level of LEVELS){const path=coursesForLevel(level.id);assert.ok(path.length>=2);assert.equal(new Set(path.map(c=>c.id)).size,path.length);path.forEach(c=>reached.add(c.id));}assert.equal(reached.size,COURSES.length);
 for(const [old,id] of Object.entries(LEGACY_LESSON_MAP))assert.equal(findCourse(old).id,id);
 for(const c of COURSES){assert.ok(PHYSICS_DOMAINS.some(d=>d.id===c.domainId),c.id);assert.equal(new URL(c.url).protocol,'https:');assert.equal(new Set([c.answer,...c.distractors]).size,3);assert.ok(c.advanced!==c.explanation);for(const t of c.topics)assert.notEqual(topicLabel(t),undefined);}
 for(const id of Object.keys(DEEP_DIVES))assert.ok(findCourse(id),id);
});
test('Age pathways include all requested education subject areas with level-specific presentation',()=>{
 const required={sd:['objects','motion','force','energy','light','sound','heat','magnet'],smp:['speed','acceleration','force','energy','pressure','electricity','waves','optics'],sma:['mechanics','momentum','energy','thermodynamics','electricity','magnetism','optics','modern physics'],university:['advanced mechanics','electromagnetism','thermodynamics','statistical mechanics','quantum mechanics','relativity','mathematical physics','condensed matter','nuclear','particle','astrophysics'],educator:['lesson material','experiments','demonstrations','questions','explanations','teaching references']};
 const equivalents={electricity:['electricity'],waves:['waves'],optics:['optics'],mechanics:['kinematics','dynamics','rotation'],thermodynamics:['thermodynamics'],magnetism:['magnetism'],'modern physics':['special-relativity','quantum','atomic']};
 for(const [level,topics] of Object.entries(required)){const path=coursesForLevel(level);for(const topic of topics)assert.ok(path.some(c=>c.topics.includes(topic)||equivalents[topic]?.includes(c.domainId)),`${level}: ${topic}`);}
});
test('Notes and quiz achievements survive export; invalid data and storage denial fail safely',()=>{
 let data={};globalThis.localStorage={getItem:k=>data[k]??null,setItem:(k,v)=>data[k]=v,removeItem:k=>delete data[k]};
 const s=loadStudy();s.level='university';s.read=['maxwell-course'];s.passed=['maxwell-course'];s.notes['maxwell-course']='<img onerror=alert(1)> My note';s.attempts['maxwell-course']=2;assert.equal(saveStudy(s),true);assert.deepEqual(loadStudy(),s);assert.equal(JSON.parse(exportStudy()).study.notes['maxwell-course'],s.notes['maxwell-course']);
 data.asadin_physics_study_v2=JSON.stringify({level:'bogus',read:['fake','sd-motion','sd-motion'],passed:'invalid',notes:{fake:'x','sd-motion':14},attempts:{'sd-motion':-1}});const clean=loadStudy();assert.equal(clean.level,'sd');assert.deepEqual(clean.read,['sd-motion']);assert.deepEqual(clean.passed,[]);assert.deepEqual(clean.notes,{});assert.deepEqual(clean.attempts,{});
 data.asadin_physics_study_v2='{broken';assert.deepEqual(loadStudy().read,[]);assert.equal(resetStudy(),true);
 data.asadin_physics_completed_lessons=JSON.stringify(['sd-1-1','fake','smp-3-1']);assert.deepEqual(loadStudy().read,['sd-motion','dc-circuits']);resetStudy();assert.deepEqual(loadStudy().read,[]);
 globalThis.localStorage={getItem:()=>{throw Error('denied');},setItem:()=>{throw Error('denied');},removeItem:()=>{throw Error('denied');}};assert.equal(saveStudy(s),false);assert.equal(resetStudy(),false);assert.deepEqual(loadStudy().read,[]);delete globalThis.localStorage;
});
