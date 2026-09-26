# ASADIN EDU PHYSICS — Initial audit (2026-09-26)

Status: PARTIAL. Existing vanilla JS SPA retained. Inspection preceded changes.

Inventory: 28 domain descriptors, 60 entities, 14 equations, 18 constants, 6 experiments, 23 lesson cards in 5 levels, 12 canvas simulations, 45 graph nodes / 51 edges. No API. Source inspected across all application areas; original tests report 7 PASS but do not establish specification compliance.

| Requirement | Status | Evidence | Gap | Action |
|---|---|---|---|---|
| Safe search / routing | BROKEN | app.js interpolates q; real browser payload sets window.__xss | DOM injection, malformed URI crash | P0 escape untrusted text, route errors, regression tests |
| Server isolation | BROKEN | server.mjs serves project root including .git; decodeURIComponent unguarded | private files exposed; malformed URL can crash process | P0 public allowlist, method / error / symlink guards |
| Simulation lifecycle | BROKEN | browser observes 216 callbacks in 300 ms after leaving lab; renderer never returns cleanup | animation / window listener accumulation | P0 explicit page disposal |
| Domain depth | PARTIAL | entities.js: atomic/nuclear/condensed-matter/applied-physics each 0 entities | landing taxonomy != content | P1 add substantive entry points, document remaining topical gaps |
| Equations | PARTIAL | 14 records with solvers; many quantityId values unresolved; relatedConceptIds unused | variable dead ends, unchecked inputs, no sources; Maxwell absent | P1 catalog resolver, quantities, validation, Maxwell / Schrödinger |
| Constants | OUTDATED | predominantly CODATA 2018; mixed 2018/2022 claim; no URLs | older measured values, neutron lifetime mislabeled | P1 NIST 2022 values + per-record provenance |
| Experiments | UNSOURCED | six substantial dossiers, no URLs | overclaimed Michelson result, chronology, unverifiable apparatus details | P1 qualify/correct and add sources |
| Learn | PARTIAL | 23 takeaway/activity cards; one quiz per level | no lesson navigation, persistence, next step, lesson search | P1 lesson routes/resources/self-reported progression |
| Graph | BROKEN | all nodes route to /entity even domains/equations; four unresolved nodes | drag causes navigation, no touch/keyboard, no cleanup | P1 resolve types, pointer threshold, accessible alternative |
| Simulations | INCORRECT | thermodynamics-sim.js fixed Bezier points; Lorentz explicit Euler gains energy; Bohr HUD rounds intermediate energies | numeric results and visualization disagree; circuits missing | P1 computed Carnot curves, stable magnetic orbit, circuits |
| Responsive UI | BROKEN | baseline-browser.json: 320px equation document=690px; experiment=708px | fixed/min grid widths, absent mobile menu | P1 responsive grids and operable menu |
| Sources | UNSOURCED | entity/equation/experiment no source URL; About only generic names | cannot verify claim provenance | P1 explicit record sources/review scope, preserve unverified status |
| Test reliability | INCORRECT | tests/test-runner.mjs starts unawaited import then process.exit | false PASS; no browser/link/physics invariants | P0 synchronous constant audit; meaningful automated/browser regression |

Scientific findings include energy called invariant, electron-electron force called attractive, photon assigned U(1)_Y rather than U(1)_EM, implied photon rest frame, overclaimed Bell/delayed-choice implications, 0K motion simplification, Coulomb electron count wrong by 10^6, pressure supporting black holes, Ohm's-law LED example, neutron mean life confused with half-life. These require corrections and targeted sources. Four layers are short paragraphs, not full advanced lessons. Static authored educational records are not automatically mock data. The fixed Carnot path is a schematic presented as quantitative simulation.

The full section-by-section and topic-level matrix will accompany the re-audit; remaining curriculum/content depth must stay PARTIAL instead of inflating VERIFIED counts.
