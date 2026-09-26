// Asadin Edu Physics · About & Scientific Standards Page

export function renderAboutPage(container) {
  container.innerHTML = `
    <div class="content-wrap" style="padding-top: 36px; padding-bottom: 80px; max-width: 960px;">
      <!-- Header -->
      <div style="margin-bottom: 32px;">
        <div style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; background: rgba(0, 242, 254, 0.1); border-radius: var(--radius-full); color: var(--cyan-bright); font-size: 0.78rem; font-weight: 700; margin-bottom: 12px;">
          METODOLOGI & STANDAR ILMIAH
        </div>
        <h1 style="font-size: 2.2rem; margin-bottom: 8px;">Tentang Asadin Edu Physics</h1>
        <p>Ensiklopedia Fisika Interaktif dan Platform Pembelajaran Terbuka Berbasis Bukti Ilmiah dan Konsensus Ilmiah Internasional.</p>
      </div>

      <!-- Philosophy & Vision -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 28px;">
        <h2 style="font-size: 1.4rem; color: #fff; margin-bottom: 14px;">Filosofi: Realitas Fisik (Physical Reality)</h2>
        <p style="font-size: 1rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 16px;">
          Fisika bukanlah sekadar kumpulan rumus matematika untuk dihafal saat ujian, dan bukan pula taksonomi hierarkis biologis. Fisika adalah usaha rasional manusia untuk memahami bagaimana <strong>materi, energi, ruang, dan waktu</strong> saling berinteraksi dari skala terkecil yang dapat dibayangkan (quark dan panjang Planck 10⁻³⁵ m) hingga cakrawala terjauh alam semesta teramati (10²⁶ m).
        </p>
        <p style="font-size: 1rem; line-height: 1.8; color: var(--text-secondary);">
          Platform ini dibangun dengan komitmen bahwa pembelajaran sains harus menyajikan keindahan konseptual, kejelasan matematis, dan pengalaman visual interaktif tanpa gimmick atau simplifikasi berlebihan yang menyesatkan.
        </p>
      </div>

      <!-- Scientific Reference Sources -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 28px;">
        <h2 style="font-size: 1.4rem; color: #fff; margin-bottom: 16px;">Sumber Data & Standar Baku Internasional</h2>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="background: rgba(0, 0, 0, 0.35); padding: 16px 20px; border-radius: var(--radius-md); border-left: 3px solid var(--cyan-bright);">
            <h4 style="font-size: 1rem; color: #fff; margin-bottom: 4px;">1. Redefinisi Satuan Dasar SI 2019 (BIPM SI Brochure 9th Edition)</h4>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
              Sejak 20 Mei 2019, seluruh 7 satuan dasar SI didefinisikan secara eksak melalui penetapan konstanta alamiah fundamental: kelajuan cahaya <em>c</em>, konstanta Planck <em>h</em>, muatan elementer <em>e</em>, konstanta Boltzmann <em>k_B</em>, frekuensi hiperhalus cesium-133, konstanta Avogadro <em>N_A</em>, dan efikasi luminus <em>K_cd</em>.
            </p>
          </div>

          <div style="background: rgba(0, 0, 0, 0.35); padding: 16px 20px; border-radius: var(--radius-md); border-left: 3px solid var(--amber-solar);">
            <h4 style="font-size: 1rem; color: #fff; margin-bottom: 4px;">2. CODATA Recommended Values of the Fundamental Physical Constants (2018/2022)</h4>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
              Semua nilai numerik konstanta fisika dalam penjelajah ini diselaraskan dengan kumpulan data resmi terkini yang diterbitkan oleh Committee on Data for Science and Technology (CODATA) di bawah naungan International Science Council (ISC).
            </p>
          </div>

          <div style="background: rgba(0, 0, 0, 0.35); padding: 16px 20px; border-radius: var(--radius-md); border-left: 3px solid var(--emerald-neon);">
            <h4 style="font-size: 1rem; color: #fff; margin-bottom: 4px;">3. IUPAP & Standar Nomenklatur Simbol Fisika</h4>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
              Penamaan besaran, dimensi, dan lambang rumus mengikuti pedoman International Union of Pure and Applied Physics (IUPAP Commission C2: SUNAMCO) dan ISO 80000-3.
            </p>
          </div>
        </div>
      </div>

      <!-- Distinction Between Established Science and Speculation -->
      <div style="background: rgba(255, 65, 108, 0.06); border: 1px solid rgba(255, 65, 108, 0.3); border-radius: var(--radius-lg); padding: 28px; margin-bottom: 28px;">
        <h3 style="font-size: 1.15rem; color: #ff5858; margin-bottom: 10px;">
          ⚖️ Integritas Epistemologis: Membedakan Sains Teruji vs Riset Hipotetis
        </h3>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.7;">
          Asadin Edu Physics secara tegas membedakan antara:
        </p>
        <ul style="padding-left: 20px; margin-top: 10px; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem; color: var(--text-secondary);">
          <li><strong>Sains Mapan (Established Science):</strong> Hukum gravitasi, termodinamika, persamaan Maxwell, mekanika kuantum baku, relativitas, dan model Big Bang standar yang telah lolos pengujian empiris ketat puluhan tahun.</li>
          <li><strong>Riset Aktif (Active Research):</strong> Hubungan materi gelap, energi gelap, ketegangan konstanta Hubble (Hubble Tension), dan superkonduktor suhu tinggi yang didukung bukti kuat namun mekanismenya masih terus diteliti.</li>
          <li><strong>Hipotetis / Spekulatif (Hypothetical):</strong> Gravitasi kuantum string theory, multiversum, dan tachyon diberi label jelas sebagai model teoretis yang belum memiliki konfirmasi eksperimen.</li>
        </ul>
      </div>
    </div>
  `;
}
