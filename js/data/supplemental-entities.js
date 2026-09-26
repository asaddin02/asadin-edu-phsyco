// Targeted additions from the audit: real variable destinations and previously empty domains.
// Sources support the stated core definitions/models; these short entries are not full courses.
const entry = (id, name, indonesianName, entityType, domainId, symbol, unit, dimension, layers, relatedEntityIds, url) => ({
  id, name, indonesianName, entityType, domainId, symbol,
  summary: layers[1], layers: Object.fromEntries(['simple', 'standard', 'advanced', 'deepDive'].map((key, i) => [key, layers[i]])),
  keyVariables: symbol ? [{symbol, name: indonesianName, unit, dimension}] : [], relatedEntityIds,
  scientificStatus: 'ESTABLISHED SCIENCE', reviewStatus: 'CORE REVIEWED',
  sources: [{title: 'Rujukan definisi dan model dasar', url, scope: 'Definisi/model inti; bukan validasi kurikulum lengkap.'}]
});
const si = 'https://www.bipm.org/en/publications/si-brochure';
const fl = chapter => `https://www.feynmanlectures.caltech.edu/${chapter}.html`;
const os = page => `https://openstax.org/books/university-physics-volume-3/pages/${page}`;
export const SUPPLEMENTAL_ENTITIES = [
  entry('length','Length','Panjang','Quantity','foundations','l','m','[L]',[
    'Panjang membandingkan jarak dengan alat ukur, misalnya panjang meja dengan penggaris.',
    'Panjang adalah besaran pokok SI bersatuan meter (m). Jarak adalah skalar; perpindahan memiliki arah.',
    'Meter ditetapkan melalui c = 299 792 458 m/s dan definisi detik. Pengukuran harus menyertakan resolusi alat serta ketidakpastian.',
    'Panjang benda yang diukur serentak bergantung kerangka acuan dalam relativitas khusus; panjang wajar diukur dalam kerangka diam benda.'
  ],['velocity','dimensional-analysis','speed-of-light'],si),
  entry('time','Time','Waktu','Quantity','foundations','t','s','[T]',[
    'Jam membandingkan lamanya peristiwa dengan proses yang berulang teratur.',
    'Detik (s) adalah satuan SI waktu, ditetapkan lewat frekuensi transisi hiperhalus keadaan dasar sesium-133 sebesar 9 192 631 770 Hz.',
    'Selang waktu Δt menentukan laju perubahan: v = dx/dt dan a = dv/dt. Waktu awal boleh dipilih, tetapi selang yang diukur harus konsisten.',
    'Waktu wajar mengikuti lintasan jam. Jam pada lintasan atau potensial gravitasi berbeda dapat mengukur selang berbeda antara peristiwa pertemuan.'
  ],['frequency','velocity','spacetime'],si),
  entry('volume','Volume','Volume','Quantity','foundations','V','m³','[L]³',[
    'Volume adalah ukuran ruang yang ditempati benda. Satu liter sama dengan 0.001 meter kubik.',
    'Volume memiliki satuan SI m³. Balok dengan panjang a, b, c mempunyai V = abc; volume gas mengikuti wadahnya.',
    'Untuk bentuk umum, V = ∫ dV. Dalam termodinamika volume merupakan variabel keadaan dan kerja ekspansi kuasistatik adalah ∫P dV.',
    'Mengubah cm³ menjadi m³ memerlukan faktor (10⁻²)³ = 10⁻⁶, bukan 10⁻². Perhatikan satuan sebelum menggunakan PV = nRT.'
  ],['pressure','ideal-gas-equation','density'],si),
  entry('amount-of-substance','Amount of Substance','Jumlah Zat','Quantity','foundations','n','mol','[N]',[
    'Mol adalah cara menghitung kumpulan partikel yang sangat banyak.',
    'Jumlah zat n bersatuan mol. Satu mol mengandung tepat 6.02214076 × 10²³ entitas yang jenisnya harus disebutkan.',
    'Hubungan jumlah partikel N dengan mol ialah n = N/N_A. Massa sampel memenuhi m = nM dengan M massa molar.',
    'Satu mol atom oksigen berbeda dari satu mol molekul O₂. Mengidentifikasi entitas mencegah kesalahan faktor dua dalam gas dan reaksi.'
  ],['avogadro-constant','ideal-gas-equation','mass'],si),
  entry('angle','Plane Angle','Sudut Bidang','Quantity','foundations','θ','rad','[1]',[
    'Sudut menyatakan seberapa jauh arah diputar. Satu putaran penuh adalah 360 derajat.',
    'Sudut dalam radian didefinisikan θ = s/r untuk panjang busur s dan jari-jari r. Satu putaran adalah 2π rad.',
    'Radian tidak berdimensi karena merupakan rasio dua panjang. Turunan trigonometri standar menggunakan argumen radian.',
    'Konversi θ_rad = θ_deg π/180 harus dilakukan sebelum memakai Math.sin. Kalkulator pembiasan menampilkan derajat, tetapi menghitung dalam radian.'
  ],['snells-law-refraction','torque','dimensionless'],si),
  entry('dimensionless','Dimensionless Ratio','Rasio Tak Berdimensi','Quantity','foundations','1','1','[1]',[
    'Perbandingan dua ukuran sejenis tidak memerlukan satuan, misalnya panjang peta dibanding panjang sebenarnya.',
    'Rasio besaran berdimensi sama memiliki dimensi satu. Contohnya indeks bias n = c/v, faktor Lorentz γ, dan efisiensi η.',
    'Argumen fungsi eksponensial, logaritma, dan trigonometri harus tak berdimensi; pada e^(−λt), λ berdimensi s⁻¹.',
    'Tak berdimensi tidak berarti makna fisiknya sama: sudut radian, regangan, dan jumlah partikel perlu dibedakan dalam model.'
  ],['dimensional-analysis','angle','efficiency'],si),
  entry('particle-count','Particle Count','Jumlah Partikel','Quantity','nuclear','N','1','[1]',[
    'Jumlah inti menyatakan berapa banyak inti yang ada dalam sampel.',
    'N adalah hitungan tak berdimensi, berbeda dari jumlah zat n dalam mol. N = nN_A.',
    'Pada peluruhan independen, nilai harapan jumlah inti tersisa ialah N(t) = N₀e^(−λt). Satu sampel nyata berfluktuasi di sekitar nilai itu.',
    'Untuk sampel kecil, model probabilitas binomial diperlukan; hasil eksponensial bukan janji bahwa setiap sampel menyisakan jumlah identik.'
  ],['radioactive-decay-law','amount-of-substance'],os('10-3-radioactive-decay')),
  entry('density','Mass Density','Massa Jenis','Quantity','fluids','ρ','kg·m⁻³','[M][L]⁻³',[
    'Dua benda berukuran sama bisa berbeda massa karena massa jenisnya berbeda.',
    'Massa jenis rata-rata ρ = m/V menyatakan massa per volume. Air sering didekati 1000 kg/m³, tetapi nilainya bergantung suhu dan tekanan.',
    'Massa jenis lokal adalah dm/dV. Kekekalan massa fluida memenuhi ∂ρ/∂t + ∇·(ρv) = 0.',
    'Untuk aliran tunak tak termampatkan di pipa, kontinuitas memberi A₁v₁ = A₂v₂. Fluida termampatkan memerlukan faktor ρ pada kedua sisi.'
  ],['mass','volume','fluids','pressure'],fl('II_40')),
  entry('refractive-index','Refractive Index','Indeks Bias','Quantity','optics','n','1','[1]',[
    'Indeks bias membantu menjelaskan mengapa sedotan tampak bengkok ketika sebagian masuk air.',
    'Indeks bias fase n = c/v_fase tidak berdimensi. Pada batas dua medium isotropik, n₁sinθ₁ = n₂sinθ₂.',
    'Indeks dapat bergantung frekuensi (dispersi). Kecepatan grup paket gelombang tidak harus sama dengan kecepatan fase.',
    'Untuk absorpsi, indeks menjadi kompleks. Model sinar isotropik tidak mencakup pembiasan ganda atau efek optika gelombang pada apertur kecil.'
  ],['light','snells-law-refraction','speed-of-light'],fl('I_26')),
  entry('voltage','Voltage','Beda Potensial Listrik','Quantity','electricity','ΔV','V','[M][L]²[T]⁻³[I]⁻¹',[
    'Tegangan adalah perbedaan energi potensial listrik per muatan, seperti beda ketinggian pada aliran air.',
    'ΔV = ΔU/q dengan satuan volt = joule/coulomb. Dalam medan elektrostatik ΔV = −∫E·dl.',
    'Medan elektrostatik memenuhi E = −∇V. Dengan medan magnet berubah terhadap waktu, gaya gerak listrik loop tidak cukup dijelaskan potensial skalar.',
    'Baterai ideal menetapkan beda potensial terminal; baterai nyata memiliki hambatan internal. Tegangan bukan arus dan tidak habis mengalir.'
  ],['electric-field','electric-charge','ohms-law','electric-current'],fl('II_04')),
  entry('electric-current','Electric Current','Arus Listrik','Quantity','electricity','I','A','[I]',[
    'Arus mengukur banyaknya muatan bersih yang melewati suatu penampang tiap detik.',
    'I = dQ/dt bersatuan ampere (A = C/s). Arah arus konvensional mengikuti muatan positif, berlawanan arah hanyut elektron dalam logam.',
    'Arus total adalah integral rapat arus: I = ∫J·dA. Persamaan kontinuitas ∂ρ/∂t + ∇·J = 0 menyatakan kekekalan muatan.',
    'Pada simpul rangkaian tanpa penumpukan muatan, jumlah arus masuk sama dengan arus keluar. Lampu mengubah energi, bukan menghabiskan muatan.'
  ],['electric-charge','voltage','resistance','electromagnetism'],fl('II_13')),
  entry('resistance','Electrical Resistance','Hambatan Listrik','Quantity','electricity','R','Ω','[M][L]²[T]⁻³[I]⁻²',[
    'Hambatan menentukan seberapa besar arus yang mengalir untuk tegangan tertentu.',
    'Untuk resistor ohmik pada suhu tetap, V = IR dengan R konstan dalam ohm (Ω = V/A). Daya yang berubah menjadi kalor ialah P = I²R.',
    'Untuk penghantar seragam R = ρ_e l/A, dengan ρ_e resistivitas. Seri: R_total = R₁ + R₂; paralel: 1/R_total = 1/R₁ + 1/R₂.',
    'Dioda dan lampu pijar yang memanas tidak memiliki R konstan di seluruh kondisi operasi. Bedakan hambatan statis V/I dan diferensial dV/dI.'
  ],['ohms-law','electric-current','voltage','superconductivity'],fl('II_22')),
  entry('efficiency','Thermal Efficiency','Efisiensi Termal','Quantity','thermodynamics','η','1','[1]',[
    'Efisiensi membandingkan kerja berguna yang dihasilkan dengan energi yang dimasukkan.',
    'Untuk mesin kalor satu siklus, η = W_net/Q_H = 1 − Q_C/Q_H. Q_H dan Q_C adalah besar kalor yang masuk dan dibuang.',
    'Batas reversibel antara reservoir T_H > T_C > 0 ialah η_C = 1 − T_C/T_H. Semua suhu pada rasio ini menggunakan kelvin.',
    'Kulkas memakai koefisien performa COP = Q_C/W_in, bukan efisiensi mesin kalor. COP boleh lebih dari satu tanpa melanggar kekekalan energi.'
  ],['carnot-engine','thermodynamic-laws','carnot-efficiency'],fl('I_44')),
  entry('angular-momentum','Angular Momentum','Momentum Sudut','Quantity','rotation','L','kg·m²·s⁻¹','[M][L]²[T]⁻¹',[
    'Pemain seluncur dapat berputar lebih cepat ketika mendekatkan lengan ke badan karena momentum sudutnya hampir tetap.',
    'Momentum sudut partikel terhadap titik acuan adalah L = r × p. Torsi luar total memberi dL/dt = τ.',
    'Benda tegar pada sumbu tetap memiliki L_sumbu = Iω. Pernyataan vektor umum menggunakan tensor inersia dan tidak selalu membuat L sejajar ω.',
    'Dalam kuantum, momentum sudut orbital memiliki nilai L² = l(l+1)ℏ². Spin adalah momentum sudut intrinsik, bukan putaran bola kecil.'
  ],['torque','linear-momentum','quantum'],fl('I_20')),
  entry('thermodynamic-laws','Laws of Thermodynamics','Hukum Termodinamika','Law','thermodynamics','ΔU = Q − W','J','[M][L]²[T]⁻²',[
    'Energi berpindah sebagai kalor dan kerja; proses spontan memiliki arah tertentu.',
    'Hukum nol mendefinisikan kesetimbangan termal. Hukum I: ΔU = Q − W, dengan W kerja oleh sistem. Hukum II: entropi sistem terisolasi tidak berkurang.',
    'Pada proses reversibel dS = δQ_rev/T. Hukum III: entropi kristal sempurna dengan keadaan dasar tunggal menuju nol saat T menuju 0 K.',
    'U dan S adalah fungsi keadaan; kalor dan kerja bergantung lintasan. Untuk satu siklus ΔU = 0 sehingga W_net = Q_net; mesin Carnot memberi batas efisiensi reversibel.'
  ],['heat','temperature','entropy','carnot-engine','conservation-of-energy'],fl('I_44')),
  entry('photoelectric-effect','Photoelectric Effect','Efek Fotolistrik','Phenomenon','quantum','K_max = hf − Φ','J','[M][L]²[T]⁻²',[
    'Cahaya dapat melepaskan elektron dari permukaan logam jika energi fotonnya cukup.',
    'Dalam model satu foton, K_max = hf − Φ untuk hf ≥ Φ. Fungsi kerja Φ bergantung bahan; frekuensi ambang f₀ = Φ/h.',
    'Potensial henti mengukur K_max = eV_s. Intensitas lebih besar umumnya menambah jumlah elektron, sedangkan energi maksimum ditentukan frekuensi.',
    'Model ini tidak mencakup emisi multifoton oleh laser intens. Pelajari eksperimen dan batas model sebelum menyimpulkan bahwa intensitas tidak pernah memengaruhi proses emisi.'
  ],['photon','planck-einstein-relation','photoelectric-effect-exp'],os('6-2-photoelectric-effect')),
  entry('atomic-structure','Atomic Structure','Struktur Atom dan Tingkat Energi','Concept','atomic','E_n ≈ −13.6/n²','eV','[M][L]²[T]⁻²',[
    'Atom mempunyai inti kecil dan elektron yang keadaan posisinya dijelaskan sebagai awan probabilitas.',
    'Untuk hidrogen dalam pendekatan Bohr, E_n ≈ −13.6 eV/n². Transisi melepaskan atau menyerap foton dengan hf = |E_i − E_f|.',
    'Keadaan orbital dicirikan oleh bilangan kuantum n, l, m_l; elektron juga memiliki m_s. Orbital bukan lintasan planet klasik.',
    'Koreksi massa tereduksi, struktur halus, dan efek QED diperlukan untuk spektroskopi presisi. Model Bohr tidak menjelaskan atom berelektron banyak secara akurat.'
  ],['electron','photon','quantum','rutherford-gold-foil'],os('6-4-bohrs-model-of-the-hydrogen-atom')),
  entry('nuclear-structure','Nuclear Structure and Isotopes','Inti Atom dan Isotop','Concept','nuclear','A = Z + N','1','[1]',[
    'Inti atom berisi proton dan neutron. Isotop adalah atom unsur sama dengan jumlah neutron berbeda.',
    'Nomor atom Z menyatakan jumlah proton; bilangan massa A = Z + N. Energi ikat inti B = [Zm_p + Nm_n − M_inti]c².',
    'Gunakan massa inti atau massa atom secara konsisten agar massa elektron tidak terhitung salah. Energi ikat per nukleon membantu membandingkan kestabilan inti.',
    'Peluruhan alfa mengurangi A sebesar 4 dan Z sebesar 2; beta minus menaikkan Z satu dengan A tetap; gamma menurunkan energi eksitasi tanpa mengubah A atau Z.'
  ],['proton-mass','neutron-mass','radioactive-decay-law','nuclear-fission'],os('10-2-nuclear-binding-energy')),
  entry('nuclear-fission','Nuclear Fission and Fusion','Fisi dan Fusi Nuklir','Phenomenon','nuclear','Q = (m_awal − m_akhir)c²','J','[M][L]²[T]⁻²',[
    'Fisi membelah inti berat; fusi menggabungkan inti ringan. Keduanya dapat melepaskan energi untuk reaksi tertentu.',
    'Energi reaksi ditentukan selisih massa total pereaksi dan produk: Q = (m_awal − m_akhir)c². Kekekalan energi mencakup massa diam.',
    'Fisi terinduksi dapat menghasilkan neutron yang memicu reaksi berikutnya. Fusi harus mengatasi penghalang Coulomb, dibantu penerowongan kuantum.',
    'Tidak semua penggabungan atau pembelahan menghasilkan energi. Neraca energi dan penampang reaksi menentukan apakah proses memungkinkan dan seberapa cepat berlangsung.'
  ],['nuclear-structure','mass-energy-equivalence','tokamak'],os('10-5-fission')),
  entry('superconductivity','Superconductivity','Superkonduktivitas','Phenomenon','condensed-matter','T_c','K','[Θ]',[
    'Bahan tertentu kehilangan hambatan listrik DC ketika didinginkan melewati suhu transisinya.',
    'Superkonduktor menunjukkan hambatan DC nol dan efek Meissner, yaitu pengusiran medan magnet dari bagian dalam bulk pada kondisi yang sesuai.',
    'Teori BCS menjelaskan superkonduktor konvensional melalui pasangan Cooper dan keadaan kolektif kuantum. Suhu, medan, dan arus kritis membatasi operasinya.',
    'Superkonduktivitas suhu tinggi merupakan bidang riset aktif. Hambatan nol saja tidak menggambarkan semua sifat magnetik; superkonduktor tipe II memungkinkan vorteks fluks.'
  ],['quantum','magnetic-field','resistance','crystal-lattice'],os('9-8-superconductivity')),
  entry('crystal-lattice','Crystals and Electronic Bands','Kristal, Kisi, dan Pita Energi','Concept','condensed-matter','E(k)','J','[M][L]²[T]⁻²',[
    'Kristal mempunyai susunan atom yang berulang. Susunan ini memengaruhi cara panas dan listrik bergerak.',
    'Kisi bersama basis atom membentuk kristal. Elektron dalam potensial periodik memiliki pita energi yang diizinkan dan celah energi.',
    'Konduktor mempunyai keadaan terisi sebagian di dekat energi Fermi. Isolator dan semikonduktor memiliki celah pita; pembawa muatan dapat diubah lewat suhu dan doping.',
    'Getaran kisi terkuantisasi disebut fonon. Interaksi elektron-fonon memengaruhi resistivitas dan berperan pada superkonduktivitas konvensional.'
  ],['electron','resistance','superconductivity'],os('9-5-band-theory-of-solids')),
  entry('plasma-state','Plasma','Plasma dan Ionisasi','Concept','plasma','λ_D','m','[L]',[
    'Plasma mengandung partikel bermuatan bebas yang bereaksi bersama terhadap medan listrik dan magnet.',
    'Plasma dapat terionisasi sebagian atau penuh. Perilaku kolektif dan penyaringan Debye membedakannya dari gas netral biasa.',
    'Untuk elektron termal, λ_D = √(ε₀k_BT_e/(n_e e²)). Kuasinetralitas berlaku pada skala jauh lebih besar daripada panjang penyaringan.',
    'Gelombang plasma, tumbukan, dan instabilitas membatasi kurungan. Model magnetohidrodinamika memperlakukan plasma sebagai fluida bermuatan dalam rentang validitasnya.'
  ],['electric-charge','electric-field','magnetic-field','tokamak'],'https://www.pppl.gov/plasma-101'),
  entry('computational-physics','Computational Physics','Fisika Komputasi','Concept','applied-physics','Δt','s','[T]',[
    'Komputer dapat memperkirakan gerak dengan menghitung perubahan kecil berulang kali.',
    'Model numerik mengubah persamaan gerak menjadi langkah diskret. Hasil perlu dibandingkan solusi analitik atau data, bukan hanya terlihat masuk akal.',
    'Perkecil Δt lalu periksa konvergensi. Pantau invarian seperti energi dan momentum untuk mendeteksi drift integrator.',
    'Metode simplektik berguna untuk sistem Hamiltonian. Galat pembulatan, diskretisasi, dan ketidakpastian parameter perlu dibedakan saat melaporkan hasil simulasi.'
  ],['orbit','conservation-of-energy','dimensional-analysis'],fl('I_09')),
  entry('lorentz-force','Lorentz Force','Gaya Lorentz','Law','magnetism','F = q(E + v × B)','N','[M][L][T]⁻²',[
    'Medan listrik dapat mempercepat muatan; medan magnet membelokkan muatan yang bergerak.',
    'Gaya Lorentz F = q(E + v × B). Untuk v tegak lurus B seragam dan E = 0, radius gerak nonrelativistik r = mv/(|q|B).',
    'Daya gaya magnet q(v × B)·v = 0, sehingga medan magnet statis sendiri tidak mengubah energi kinetik partikel.',
    'Pada kelajuan relativistik gunakan momentum p = γmv, sehingga r = p_perp/(|q|B). Radiasi oleh muatan dipercepat diabaikan pada model klasik sederhana ini.'
  ],['force','electric-field','magnetic-field','electric-charge'],fl('II_01'))
,
  entry('charge-density','Charge Density','Rapat Muatan','Quantity','electricity','ρ','C·m⁻³','[I][T][L]⁻³',[
    'Muatan dapat tersebar di seluruh volume benda.',
    'Rapat muatan volume ρ = dQ/dV memiliki satuan C/m³. Berbeda dari massa jenis meskipun simbolnya sama.',
    'Muatan total Q = ∫ρ dV. Hukum Gauss menghubungkannya dengan divergensi medan listrik ∇·E = ρ/ε₀.',
    'Muatan permukaan memakai σ (C/m²), muatan garis memakai λ (C/m). Pilih distribusi sesuai geometri, bukan menyamakan ketiga satuan.'
  ],['electric-charge','volume','maxwell-gauss-electric'],fl('II_04')),
  entry('current-density','Current Density','Rapat Arus','Quantity','electricity','J','A·m⁻²','[I][L]⁻²',[
    'Rapat arus mengukur aliran listrik pada setiap bagian penampang.',
    'Rapat arus J adalah medan vektor bersatuan A/m². Arus I = ∫J·dA untuk normal permukaan yang dipilih.',
    'Pada medium ohmik isotropik J = σE, dengan σ konduktivitas. Kekekalan muatan: ∂ρ/∂t + ∇·J = 0.',
    'Arus perpindahan ε₀∂E/∂t dalam hukum Ampère–Maxwell dapat ada pada celah kapasitor tanpa aliran muatan menyeberangi celah.'
  ],['electric-current','charge-density','maxwell-ampere'],fl('II_18'))
];
