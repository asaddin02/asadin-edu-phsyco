// Pure numerical models, shared by visualizations and invariant tests.
export function carnotModel(Th, Tc, n = 1, Va = 0.01, ratio = 2, gamma = 5/3) {
  if (!(Th > Tc && Tc > 0 && n > 0 && Va > 0 && ratio > 1 && gamma > 1)) throw new RangeError('Carnot requires Th > Tc > 0 and valid gas parameters');
  const R = 8.31446261815324;
  const Vb = Va * ratio, factor = (Th/Tc)**(1/(gamma-1));
  const Vc = Vb * factor, Vd = Va * factor;
  const volumes = [Va,Vb,Vc,Vd,Va];
  const point = (stage, f) => {
    const V = volumes[stage] * (volumes[stage+1]/volumes[stage])**f;
    const T = stage === 0 ? Th : stage === 2 ? Tc : stage === 1 ? Th*(Vb/V)**(gamma-1) : Tc*(Vd/V)**(gamma-1);
    return {V,T,P:n*R*T/V};
  };
  const Qh = n*R*Th*Math.log(ratio), Qc = n*R*Tc*Math.log(ratio);
  return {point, Qh, Qc, work:Qh-Qc, efficiency:1-Tc/Th, maxV:Vc, maxP:n*R*Th/Va};
}
export function magneticStep(state, {q, B, mass}, dt) {
  // Canvas +y points down; positive B points into the screen.
  const omega = q*B/mass, angle = omega*dt, c = Math.cos(angle), s = Math.sin(angle);
  const {vx,vy} = state;
  if (Math.abs(omega) < 1e-12) { state.x += vx*dt; state.y += vy*dt; }
  else { state.x += (vx*s + vy*(1-c))/omega; state.y += (vy*s - vx*(1-c))/omega; }
  state.vx = vx*c + vy*s; state.vy = vy*c - vx*s;
}
export function circuitModel(voltage, r1, r2, topology = 'series') {
  if (![voltage,r1,r2].every(Number.isFinite) || voltage < 0 || r1 <= 0 || r2 <= 0 || !['series','parallel'].includes(topology)) throw new RangeError('Invalid circuit parameters');
  const resistance = topology === 'series' ? r1+r2 : 1/(1/r1+1/r2);
  const current = voltage/resistance;
  const i1 = topology === 'series' ? current : voltage/r1;
  const i2 = topology === 'series' ? current : voltage/r2;
  return {resistance,current,i1,i2,v1:i1*r1,v2:i2*r2,power:voltage*current};
}
