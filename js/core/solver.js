// Validate before evaluating; blank input and out-of-domain values must not become fake results.
export function solveEquation(equation, inputs) {
  const calc = equation.calculator;
  if (!calc) return null;
  for (const item of calc.inputs) {
    const value = inputs[item.key];
    if (!Number.isFinite(value)) return 'Masukkan semua nilai numerik yang valid.';
    if (value < item.min || value > item.max) return `${item.label}: gunakan nilai ${item.min} hingga ${item.max}.`;
  }
  if (equation.id === 'carnot-efficiency' && inputs.TC_K >= inputs.TH_K) return 'Mesin kalor memerlukan 0 < T_C < T_H.';
  try {
    const result = calc.compute(inputs);
    if (typeof result === 'number' && !Number.isFinite(result)) return 'Hasil di luar rentang model.';
    if (/NaN|Infinity/.test(String(result))) return 'Hasil di luar rentang model.';
    return result;
  } catch { return 'Perhitungan gagal; periksa masukan.'; }
}
