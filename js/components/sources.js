import { escapeHTML as esc } from '../core/html.js';
export function renderSources(record) {
  const sources = record.sources || [];
  return `<aside class="source-note"><strong>Sumber & ruang lingkup verifikasi</strong>
    <p>${record.reviewStatus === 'CORE REVIEWED' ? 'Definisi/model inti ditinjau; kedalaman materi masih ringkas.' : 'PARTIAL / UNVERIFIED: belum semua klaim dan detail sejarah diperiksa satu per satu.'}</p>
    ${sources.length ? `<ul>${sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a>${s.scope ? ` — ${esc(s.scope)}` : ''}</li>`).join('')}</ul>` : '<p>UNSOURCED: rujukan spesifik belum tersedia.</p>'}
  </aside>`;
}
