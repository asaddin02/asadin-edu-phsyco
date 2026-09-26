// Asadin Edu Physics · Global Scientific Footer Component

export function renderFooter(container) {
  container.innerHTML = `
    <footer class="site-footer">
      <div class="content-wrap">
        <div class="footer-grid">
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <img src="./assets/brand/icon.svg" width="28" height="28" alt="Logo" />
              <span style="font-family: var(--font-display); font-weight: 800; font-size: 1.1rem; color: #fff;">ASADIN EDU — PHYSICS</span>
            </div>
            <p class="footer-brand-desc">
              Platform Ensiklopedia Fisika Terbuka & Laboratorium Virtual Interaktif. Memetakan realitas fisik alam semesta dari skala subatomik quark hingga struktur makro kosmos kosmologis.
            </p>
          </div>

          <div>
            <h4 class="footer-heading">Navigasi Utama</h4>
            <ul class="footer-list">
              <li><a href="#/explore">Jelajah Atlas Fisika</a></li>
              <li><a href="#/equations">Penjelajah Persamaan</a></li>
              <li><a href="#/constants">Konstanta Fisika (CODATA)</a></li>
              <li><a href="#/experiments">Eksperimen Sejarah</a></li>
              <li><a href="#/simulations">Laboratorium Interaktif</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">Jenjang Belajar</h4>
            <ul class="footer-list">
              <li><a href="#/learn?level=sd">Tingkat SD (Intuisi & Alam)</a></li>
              <li><a href="#/learn?level=smp">Tingkat SMP (Kuantitatif Dasar)</a></li>
              <li><a href="#/learn?level=sma">Tingkat SMA (Mekanika & Modern)</a></li>
              <li><a href="#/learn?level=university">Tingkat Kuliah (Analitik)</a></li>
              <li><a href="#/learn?level=educator">Panduan Guru / Pendidik</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">Standar Ilmiah</h4>
            <ul class="footer-list">
              <li><a href="#/about">BIPM SI Brochure (9th Edition)</a></li>
              <li><a href="#/about">CODATA Recommended Values 2018/2022</a></li>
              <li><a href="#/about">IUPAP Commission on Symbols & Units</a></li>
              <li><a href="#/about">OpenStax University Physics</a></li>
              <li><a href="#/about">Feynman Lectures on Physics</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© 2026 Asadin Edu & Antigravity IDE. Terbuka untuk kemajuan pendidikan sains di Indonesia dan dunia.</span>
          <span>Bebas Pelacak & Bebas Iklan · Berjalan Mandiri (Standalone)</span>
        </div>
      </div>
    </footer>
  `;
}
