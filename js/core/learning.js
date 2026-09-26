import { CURRICULUM_DATA } from '../data/curriculum.js';
export const LESSONS = CURRICULUM_DATA.levels.flatMap(level => level.modules.flatMap(module => module.lessons.map(lesson => ({...lesson, levelId:level.id, levelTitle:level.title, moduleTitle:module.title}))));
const validIds = new Set(LESSONS.map(l => l.id));
const KEY = 'asadin_physics_completed_lessons';
export function loadProgress() {
  try { const data = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(data) ? data.filter(id => validIds.has(id)) : []; }
  catch { return []; }
}
export function saveProgress(ids) {
  try { localStorage.setItem(KEY, JSON.stringify([...new Set(ids)].filter(id => validIds.has(id)))); return true; }
  catch { return false; }
}
export const LESSON_RESOURCES = {
  'sd-1-1':['force','inertia'], 'sd-1-2':['gravity','mass'], 'sd-2-1':['heat','temperature'],
  'sd-2-2':['sound','frequency'], 'sd-3-1':['light','photon'], 'sd-3-2':['magnetic-field'],
  'smp-1-1':['velocity','length','time'], 'smp-1-2':['acceleration','newton-second-law','newton-third-law'],
  'smp-2-1':['pressure','density'], 'smp-2-2':['fluids','density'], 'smp-3-1':['ohms-law','electric-current','voltage'], 'smp-3-2':['resistance','electric-current'],
  'sma-1-1':['velocity','acceleration'], 'sma-1-2':['torque','angular-momentum'],
  'sma-2-1':['carnot-engine','thermodynamic-laws'], 'sma-2-2':['sound','doppler-effect'],
  'sma-3-1':['maxwell-faraday','magnetic-field'], 'sma-3-2':['lorentz-factor','mass-energy-equivalence'],
  'univ-1-1':['conservation-of-energy','work'], 'univ-2-1':['maxwell-gauss-electric','maxwell-gauss-magnetic','maxwell-faraday','maxwell-ampere'],
  'univ-2-2':['schrodinger-equation','heisenberg-uncertainty-principle'],
  'edu-1-1':['newton-first-law','newton-third-law'], 'edu-2-1':['torque','angular-momentum']
};
export const LESSON_SIMS = {'sd-1-2':'projectile','sd-2-2':'wave-doppler','sd-3-1':'optics','sd-3-2':'lorentz-force','smp-1-2':'projectile','smp-2-1':'bernoulli-fluid','smp-3-1':'circuits','smp-3-2':'circuits','sma-1-1':'projectile','sma-2-1':'thermodynamics','sma-2-2':'wave-doppler','sma-3-2':'relativity','univ-2-2':'bohr-atom'};
