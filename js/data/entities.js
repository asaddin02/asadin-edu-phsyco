// Asadin Edu Physics · Comprehensive Physics Entity System Catalog

export const PHYSICS_ENTITIES = [
  // ==========================================
  // 1. CONCEPTS & PHENOMENA
  // ==========================================
  {
    id: 'acceleration',
    name: 'Acceleration',
    indonesianName: 'Percepatan',
    entityType: 'Concept',
    domainId: 'kinematics',
    subdomain: 'Vector Kinematics',
    symbol: 'a (atau a⃗)',
    summary: 'Laju perubahan vektor kecepatan terhadap waktu, mencakup perubahan kelajuan, perubahan arah gerak, atau kombinasi keduanya.',
    layers: {
      simple: 'Percepatan adalah seberapa cepat sesuatu menambah atau mengurangi kecepatannya, atau berbelok arah. Saat mobil digas dan melaju kencang, Anda merasakan percepatan yang mendorong tubuh Anda ke belakang jok.',
      standard: 'Percepatan rata-rata didefinisikan sebagai rasio perubahan kecepatan terhadap selang waktu: a_avg = Δv / Δt. Karena kecepatan adalah besaran vektor, percepatan terjadi baik saat kelajuan berubah (percepatan tangensial) maupun saat arah gerak berbelok (percepatan sentripetal: a_c = v² / r). Satuan SI: m/s².',
      advanced: 'Percepatan sesaat adalah turunan pertama kecepatan terhadap waktu atau turunan kedua posisi terhadap waktu: a⃗(t) = dv⃗/dt = d²r⃗/dt². Dalam koordinat kurvilinear (Frenet-Serret), percepatan terurai menjadi komponen tangensial a_t = (dv/dt) T̂ dan komponen normal a_n = (v²/ρ) N̂ di mana ρ adalah jari-jari kelengkungan lintasan.',
      deepDive: 'Dalam Relativitas Khusus, 4-percepatan A^μ = dU^μ/dτ adalah vektor ortogonal terhadap 4-kecepatan (U_μ A^μ = 0). Dalam Relativitas Umum, partikel yang jatuh bebas di medan gravitasi sebenarnya tidak mengalami percepatan sejati (4-percepatannya nol), melainkan bergerak mengikuti garis geodetik pada ruang-waktu yang melengkung.'
    },
    keyVariables: [
      { symbol: 'a', name: 'Percepatan', unit: 'm·s⁻²', dimension: '[L][T]⁻²' },
      { symbol: 'v', name: 'Kecepatan', unit: 'm·s⁻¹', dimension: '[L][T]⁻¹' },
      { symbol: 't', name: 'Waktu', unit: 's', dimension: '[T]' }
    ],
    commonMisconceptions: [
      'Miskonsepsi: Kecepatan nol berarti percepatan nol. Faktual: Saat bola dilempar vertikal ke atas mencapai titik tertinggi, kecepatannya tepat nol sesaat, namun percepatannya tetap 9.8 m/s² ke bawah akibat gravitasi.',
      'Miskonsepsi: Percepatan negatif selalu berarti melambat (deselerasi). Faktual: Benda yang bergerak ke arah sumbu negatif dan semakin cepat juga memiliki percepatan bertanda negatif.'
    ],
    historicalContext: 'Diformulasikan secara kuantitatif pertama kali oleh Galileo Galilei melalui eksperimen bidang miring (1638) dan kemudian dijadikan landasan diferensial oleh Sir Isaac Newton (1687).',
    realWorldApplications: ['Sistem pengereman ABS otomotif', 'Sensor akselerometer pada smartphone untuk orientasi layar', 'Peluncuran roket luar angkasa dan toleransi g-force astronot'],
    relatedEntityIds: ['velocity', 'force', 'newton-second-law', 'gravity', 'inertia']
  },
  {
    id: 'inertia',
    name: 'Inertia',
    indonesianName: 'Kelembaman (Inersia)',
    entityType: 'Concept',
    domainId: 'dynamics',
    subdomain: 'Newton’s Three Laws',
    symbol: 'm (massa inersial)',
    summary: 'Kecenderungan alami suatu benda untuk mempertahankan keadaan geraknya (tetap diam atau tetap bergerak lurus beraturan) kecuali jika ada gaya luar neto yang memaksanya berubah.',
    layers: {
      simple: 'Inersia adalah "kemalasan" suatu benda untuk mengubah keadaannya. Benda yang sedang diam ingin tetap diam; benda yang sedang meluncur kencang ingin terus meluncur. Itulah sebabnya tubuh Anda terdorong ke depan saat bus direm mendadak.',
      standard: 'Inersia dinyatakan secara kualitatif dalam Hukum Pertama Newton. Ukuran kuantitatif inersia suatu benda terhadap percepatan translasi adalah massa inersialnya (m). Semakin besar massa suatu benda, semakin sulit untuk mempercepat atau menghentikannya.',
      advanced: 'Dalam kerangka acuan non-inersial (berakselerasi dengan a_frame), inersia memunculkan gaya semu / gaya inersial: F_fictitious = -m · a_frame, seperti gaya sentrifugal dan gaya Coriolis dalam sistem koordinat yang berputar.',
      deepDive: 'Prinsip Mach menyatakan bahwa inersia benda merupakan konsekuensi dari interaksi gravitasi dengan seluruh massa yang terdistribusi di alam semesta. Hal ini menginspirasi Einstein merumuskan Prinsip Kesetaraan (Equivalence Principle) yang menyamakan massa inersial dengan massa gravitasi secara identik.'
    },
    keyVariables: [
      { symbol: 'm', name: 'Massa Inersial', unit: 'kg', dimension: '[M]' }
    ],
    commonMisconceptions: [
      'Miskonsepsi: Diperlukan gaya konstan untuk mempertahankan benda tetap bergerak. Faktual: Dalam ketiadaan gaya gesek atau hambatan (seperti di ruang hampa), benda akan terus meluncur selamanya dengan kelajuan konstan tanpa perlu dorongan gaya sama sekali.'
    ],
    historicalContext: 'Pertama kali dipahami oleh Galileo Galilei dan René Descartes, lalu ditetapkan secara resmi sebagai Hukum I Newton dalam Philosophiæ Naturalis Principia Mathematica (1687).',
    realWorldApplications: ['Sabuk pengaman mobil', 'Roda gila (flywheel) penyimpan energi rotasi', 'Pemisahan sentrifus plasma darah'],
    relatedEntityIds: ['mass', 'newton-first-law', 'newton-second-law', 'acceleration']
  },
  {
    id: 'entropy',
    name: 'Entropy',
    indonesianName: 'Entropi',
    entityType: 'Concept',
    domainId: 'thermodynamics',
    subdomain: 'Entropy & Irreversibility',
    symbol: 'S',
    summary: 'Ukuran ketidakteraturan, dispersi energi termal, atau jumlah keadaan mikro kuantum yang dapat diakses oleh suatu sistem makroskopik.',
    layers: {
      simple: 'Entropi adalah ukuran seberapa tersebar atau berantakannya energi. Kamar yang rapi mudah menjadi berantakan dengan sendirinya, tetapi tidak pernah merapikan dirinya sendiri. Es batu mencair di ruangan hangat, tetapi air hangat tidak pernah spontan membeku sendiri.',
      standard: 'Dalam termodinamika klasik Clausius, perubahan entropi didefinisikan sebagai dS = dQ_rev / T. Hukum Kedua Termodinamika menyatakan bahwa dalam proses spontan pada sistem terisolasi, entropi total selalu bertambah atau tetap konstan: ΔS_total ≥ 0. Satuan SI: J/K.',
      advanced: 'Dalam mekanika statistik Ludwig Boltzmann, entropi dihitung melalui jumlah keadaan mikro Ω (multiplicity) yang konsisten dengan keadaan makro: S = k_B · ln(Ω). Entropi mengukur derajat ketidaktahuan pengamat makroskopik terhadap konfigurasi mikroskopis partikel spesifik.',
      deepDive: 'Entropi menghubungkan termodinamika dengan teori informasi Claude Shannon (H = -∑ p_i log₂ p_i) dan termodinamika lubang hitam Bekenstein-Hawking (S_BH = k_B c³ A / 4Gℏ), di mana entropi lubang hitam sebanding dengan luas permukaan horizonnya, bukan volumenya (Prinsip Holografik).'
    },
    keyVariables: [
      { symbol: 'S', name: 'Entropi', unit: 'J·K⁻¹', dimension: '[M][L]²[T]⁻²[Θ]⁻¹' },
      { symbol: 'Q', name: 'Kalor Reversibel', unit: 'J', dimension: '[M][L]²[T]⁻²' },
      { symbol: 'T', name: 'Suhu Mutlak', unit: 'K', dimension: '[Θ]' },
      { symbol: 'Ω', name: 'Keadaan Mikro', unit: 'Adimensional', dimension: '[1]' }
    ],
    commonMisconceptions: [
      'Miskonsepsi: Entropi sistem lokal tidak pernah bisa turun. Faktual: Entropi suatu sistem terbuka (seperti kulkas mendinginkan air menjadi es) bisa turun drastis, asalkan entropi lingkungan sekitarnya naik lebih besar sehingga total ΔS_semesta > 0.'
    ],
    historicalContext: 'Dinamai dan dirumuskan oleh Rudolf Clausius (1865) dari bahasa Yunani "trope" (transformasi), kemudian diberi fondasi mikroskopis statistik oleh Ludwig Boltzmann (1877).',
    realWorldApplications: ['Batas efisiensi mesin termal Carnot', 'Kriptografi dan kompresi data informasi', 'Kematian termal alam semesta (Big Freeze)'],
    relatedEntityIds: ['thermodynamic-laws', 'heat', 'temperature', 'boltzmann-constant']
  },
  {
    id: 'superconductivity',
    name: 'Superconductivity',
    indonesianName: 'Superkonduktivitas',
    entityType: 'Phenomenon',
    domainId: 'condensed-matter',
    subdomain: 'Superconductivity & Meissner Effect',
    symbol: 'T_c (Suhu Kritis)',
    summary: 'Fenomena keadaan kuantum makroskopis di mana bahan tertentu kehilangan hambatan listrik secara total (R = 0) dan menolak seluruh medan magnet luar (Efek Meissner) saat didinginkan di bawah suhu kritis.',
    layers: {
      simple: 'Superkonduktor adalah material super ajaib: saat didinginkan hingga sangat dingin (menggunakan nitrogen cair atau helium cair), listrik dapat mengalir di dalamnya selamanya tanpa hambatan dan tanpa panas sedikit pun. Ia juga dapat membuat magnet melayang stabil di udara!',
      standard: 'Ditemukan oleh Heike Kamerlingh Onnes pada raksa cair (1911) di bawah 4.2 Kelvin. Ciri utamanya ada dua: resistivitas listrik nol sempurna (hambatan R = 0 Ω) dan diamagnetisme sempurna di mana medan magnet ditolak keluar dari dalam bahan (Efek Meissner, B = 0).',
      advanced: 'Dijelaskan secara mikroskopis oleh Teori BCS (Bardeen, Cooper, Schrieffer 1957). Elektron dengan spin dan momentum berlawanan saling berpasangan melalui interaksi pertukaran fonon kisi kristal membentuk "Pasangan Cooper" (Cooper Pairs). Pasangan ini bertindak sebagai boson komposit yang mengalami kondensasi Bose-Einstein makroskopik.',
      deepDive: 'Superkonduktor suhu tinggi (HTS seperti YBCO / kupret) yang bekerja di atas titik didih nitrogen cair (77 K) masih menjadi misteri teori kuantum banyak-benda (strongly correlated electron systems). Fenomena efek Josephson memungkinkan pembuatan SQUID (Superconducting Quantum Interference Device) yang mampu mendeteksi fluktuasi medan magnet sekecil medan dari aktivitas neuron otak manusia.'
    },
    keyVariables: [
      { symbol: 'T_c', name: 'Suhu Kritis', unit: 'Kelvin (K)', dimension: '[Θ]' },
      { symbol: 'B_c', name: 'Medan Magnet Kritis', unit: 'Tesla (T)', dimension: '[M][T]⁻²[I]⁻¹' }
    ],
    commonMisconceptions: [
      'Miskonsepsi: Superkonduktor hanyalah konduktor biasa yang sangat bagus (resistansi sangat kecil). Faktual: Superkonduktor adalah fase termodinamika baru; konduktor sempurna biasa tidak akan menolak medan magnet jika didinginkan di dalam medan magnet (tidak memiliki Efek Meissner).'
    ],
    historicalContext: 'Ditemukan 1911 oleh Heike Kamerlingh Onnes di Leiden tak lama setelah berhasil mencairkan gas helium.',
    realWorldApplications: ['Magnet raksasa mesin MRI rumah sakit', 'Kereta melayang cepat Maglev (SCMaglev Jepang)', 'Qubit sirkuit superkonduktor komputer kuantum (IBM / Google Sycamore)'],
    relatedEntityIds: ['condensed-matter', 'resistance', 'magnetic-field', 'quantum']
  },
  {
    id: 'wave-particle-duality',
    name: 'Wave-Particle Duality',
    indonesianName: 'Dualisme Gelombang-Partikel',
    entityType: 'Principle',
    domainId: 'quantum',
    subdomain: 'Wave-Particle Duality',
    symbol: 'λ = h / p',
    summary: 'Prinsip fundamental fisika kuantum yang menyatakan bahwa seluruh entitas materi dan radiasi menunjukkan sifat partikel diskret sekaligus sifat gelombang kontinu tergantung pada pengaturan eksperimen pengukuran.',
    layers: {
      simple: 'Di dunia sehari-hari, gelombang (seperti riak air) dan partikel (seperti bola kelereng) sangat berbeda. Namun di dunia mikroskopis atom, cahaya dan elektron bisa berperilaku seperti bola kelereng (bisa menabrak) sekaligus seperti gelombang (bisa berinterferensi dan membelok).',
      standard: 'Cahaya yang semula dianggap gelombang transversal (Maxwell) terbukti memiliki sifat partikel foton terkuantisasi dengan energi E = hf dan momentum p = h/λ (Einstein, efek fotolistrik & hamburan Compton). Sebaliknya, Louis de Broglie (1924) mempostulatkan bahwa partikel bermassa seperti elektron juga memiliki panjang gelombang de Broglie: λ = h / (m·v), yang dibuktikan oleh Davisson-Germer (1927).',
      advanced: 'Dalam mekanika kuantum formal, keadaan partikel digambarkan oleh fungsi gelombang bernilai kompleks Ψ(r⃗, t) di ruang Hilbert. Fungsi ini merambat sesuai persamaan gelombang Schrödinger diferensial parsial, tetapi saat pengukuran dilakukan, probabilitas menemukan partikel terlokalisasi di titik tertentu diberikan oleh kerapatan probabilitas Born: P(r⃗) = |Ψ(r⃗, t)|².',
      deepDive: 'Prinsip Komplementaritas Niels Bohr menyatakan bahwa sifat gelombang dan sifat partikel adalah dua aspek yang saling melengkapi (komplementer) dari satu realitas kuantum yang sama, dan tidak dapat diamati secara simultan dalam satu eksperimen tunggal (eksperimen delayed-choice Wheeler).'
    },
    keyVariables: [
      { symbol: 'λ', name: 'Panjang Gelombang de Broglie', unit: 'm', dimension: '[L]' },
      { symbol: 'h', name: 'Konstanta Planck', unit: 'J·s', dimension: '[M][L]²[T]⁻¹' },
      { symbol: 'p', name: 'Momentum Partikel', unit: 'kg·m·s⁻¹', dimension: '[M][L][T]⁻¹' }
    ],
    commonMisconceptions: [
      'Miskonsepsi: Elektron sebenarnya adalah bola kecil yang bergerak bergelombang naik-turun seperti ombak. Faktual: Elektron itu sendiri adalah entitas kuantum tunggal yang fungsi probabilitas keberadaannya terdistribusi secara spasial seperti gelombang.'
    ],
    historicalContext: 'Digagas oleh Albert Einstein (1905), diperluas ke semua materi oleh Louis de Broglie (Nobel 1929), dan diverifikasi pada difraksi elektron oleh Clinton Davisson dan George Paget Thomson (1927).',
    realWorldApplications: ['Mikroskop Elektron Transmisi (TEM) dengan resolusi sub-nanometer', 'Difraksi sinar-X dan neutron untuk analisis kristalografi obat', 'Semikonduktor terowongan kuantum'],
    relatedEntityIds: ['photon', 'electron', 'schrodinger-equation', 'planck-constant', 'quantum']
  },

  // ==========================================
  // 2. LAWS & PRINCIPLES
  // ==========================================
  {
    id: 'newton-first-law',
    name: 'Newton’s First Law of Motion (Law of Inertia)',
    indonesianName: 'Hukum Pertama Newton (Hukum Kelembaman)',
    entityType: 'Law',
    domainId: 'dynamics',
    subdomain: 'Newton’s Three Laws',
    symbol: '∑F = 0 ⟹ a = 0, v = konstan',
    summary: 'Setiap benda akan terus berada dalam keadaan diam, atau bergerak lurus dengan kecepatan konstan, kecuali jika dipaksa mengubah keadaan tersebut oleh gaya neto eksternal yang bekerja padanya.',
    layers: {
      simple: 'Benda yang diam akan tetap diam. Benda yang bergerak akan terus bergerak lurus dengan kecepatan yang sama, kecuali ada tarikan atau dorongan yang mengganggunya.',
      standard: 'Jika resultan gaya yang bekerja pada benda bernilai nol (∑F⃗ = 0), maka percepatan benda bernilai nol (a⃗ = 0). Artinya, benda diam tetap diam, dan benda yang bergerak akan mempertahankan vektor kecepatannya tetap konstan (GLB).',
      advanced: 'Hukum I Newton pada dasarnya adalah postulat tentang eksistensi "Kerangka Acuan Inersial" (Inertial Reference Frame). Ini menetapkan kelas kerangka koordinat di mana ruang bersifat homogen dan isotropik, serta waktu bersifat seragam tanpa percepatan fiktif.',
      deepDive: 'Dalam kerangka Relativitas Umum, gerak inersial Hukum I Newton digeneralisasi menjadi gerak sepanjang lintasan geodetik di ruang-waktu lengkung 4D: d²x^μ/dτ² + Γ^μ_αβ (dx^α/dτ)(dx^β/dτ) = 0.'
    },
    keyVariables: [
      { symbol: '∑F', name: 'Resultan Gaya', unit: 'N', dimension: '[M][L][T]⁻²' },
      { symbol: 'v', name: 'Kecepatan', unit: 'm·s⁻¹', dimension: '[L][T]⁻¹' }
    ],
    commonMisconceptions: [
      'Benda bergerak membutuhkan gaya untuk tetap melaju (pandangan Aristoteles keliru).'
    ],
    historicalContext: 'Diterbitkan dalam Principia Mathematica tahun 1687.',
    realWorldApplications: ['Wahana antariksa Voyager yang meluncur terus ke luar tata surya tanpa bahan bakar penggerak', 'Desain pelindung benturan kabin'],
    relatedEntityIds: ['inertia', 'newton-second-law', 'force', 'velocity']
  },
  {
    id: 'conservation-of-energy',
    name: 'Principle of Conservation of Energy',
    indonesianName: 'Hukum Kekekalan Energi',
    entityType: 'Principle',
    domainId: 'work-energy',
    subdomain: 'Conservation of Energy',
    symbol: 'E_total = konstan (ΔE_semesta = 0)',
    summary: 'Energi tidak dapat diciptakan maupun dimusnahkan oleh proses apa pun; energi hanya dapat berubah bentuk dari satu manifestasi ke manifestasi lainnya.',
    layers: {
      simple: 'Total energi di alam semesta tidak pernah bertambah dan tidak pernah berkurang. Anda tidak bisa membuat energi dari ketiadaan; Anda hanya bisa mengubahnya (misalnya energi makanan menjadi energi gerak saat berlari).',
      standard: 'Dalam sistem terisolasi, jumlah energi kinetik, potensial, termal, kimia, dan bentuk energi lainnya bernilai konstan: E_awal = E_akhir. Dalam sistem mekanik murni tanpa gesekan, energi mekanik kekal: E_m = E_k + E_p = konstan.',
      advanced: 'Menurut Teorema Noether (Emmy Noether, 1915), kekekalan energi adalah konsekuensi langsung dari simetri translasi waktu (time-translation symmetry) pada aksi sistem fisik Lagrangian L: dH/dt = -∂L/∂t = 0 jika Lagrangian tidak bergantung eksplisit pada waktu.',
      deepDive: 'Dalam kosmologi Relativitas Umum skala global alam semesta yang berekspansi (metrik FLRW), waktu bersifat dinamis sehingga simetri translasi waktu global tidak berlaku; energi foton radiasi CMB mengalami redshift kosmologis seiring bertambahnya volume kosmos.'
    },
    keyVariables: [
      { symbol: 'E', name: 'Energi Total', unit: 'Joule (J)', dimension: '[M][L]²[T]⁻²' }
    ],
    commonMisconceptions: [
      'Miskonsepsi: Mesin gerak abadi (perpetual motion machine) tipe 1 bisa diciptakan jika teknologinya cukup canggih. Faktual: Mesin semacam itu secara mutlak melanggar hukum termodinamika pertama dan kedua.'
    ],
    historicalContext: 'Dirumuskan secara independen oleh Julius Robert von Mayer, James Prescott Joule, dan Hermann von Helmholtz pada dekade 1840-an.',
    realWorldApplications: ['Pembangkit listrik tenaga air (energi potensial air -> mekanik turbin -> listrik)', 'Rem regeneratif mobil listrik'],
    relatedEntityIds: ['energy', 'work', 'entropy', 'first-law-thermo']
  },
  {
    id: 'heisenberg-uncertainty-principle',
    name: 'Heisenberg Uncertainty Principle',
    indonesianName: 'Prinsip Ketidakpastian Heisenberg',
    entityType: 'Principle',
    domainId: 'quantum',
    subdomain: 'Uncertainty Principle',
    symbol: 'Δx · Δp ≥ ℏ / 2',
    summary: 'Prinsip mendasar mekanika kuantum yang menyatakan bahwa posisi dan momentum suatu partikel tidak dapat diketahui secara simultan dengan ketelitian tak terbatas.',
    layers: {
      simple: 'Semakin tepat Anda mengetahui di mana posisi sebuah partikel kuantum berada saat ini, semakin tidak pasti Anda mengetahui seberapa cepat dan ke mana arah partikel itu bergerak.',
      standard: 'Ketidakpastian standar deviasi posisi (Δx) dikalikan ketidakpastian momentum linear (Δp) selalu bernilai lebih besar atau sama dengan separuh dari konstanta Planck tereduksi: Δx · Δp ≥ ℏ / 2. Hubungan serupa juga berlaku untuk waktu dan energi: ΔE · Δt ≥ ℏ / 2.',
      advanced: 'Prinsip ini bukan cacat instrumen laboratorium, melainkan sifat matematis intrinsik dari pasangan variabel kanonik terkonjugasi yang operator kuantumnya tidak komutatif: [x̂, p̂] = x̂p̂ - p̂x̂ = iℏ. Berdasarkan ketidaksamaan Robertson-Schrödinger: σ_A σ_B ≥ ½ |⟨[Â, B̂]⟩|.',
      deepDive: 'Ketidakpastian energi-waktu (ΔE · Δt ≥ ℏ/2) memungkinkan terciptanya "partikel virtual" (virtual particle-antiparticle pairs) secara spontan dari ruang hampa kuantum (quantum vacuum fluctuations), yang menjadi penyebab Radiasi Hawking pada lubang hitam dan Efek Casimir antara dua pelat konduktor netral berjarak nanometer.'
    },
    keyVariables: [
      { symbol: 'Δx', name: 'Ketidakpastian Posisi', unit: 'm', dimension: '[L]' },
      { symbol: 'Δp', name: 'Ketidakpastian Momentum', unit: 'kg·m·s⁻¹', dimension: '[M][L][T]⁻¹' },
      { symbol: 'ℏ', name: 'Konstanta Dirac', unit: 'J·s', dimension: '[M][L]²[T]⁻¹' }
    ],
    commonMisconceptions: [
      'Miskonsepsi: Ketidakpastian muncul karena foton mikroskop menabrak elektron saat melihatnya (efek pengamat klasik semata). Faktual: Ketidakpastian adalah sifat gelombang materi sejati partikel itu sendiri bahkan sebelum ada pengamatan.'
    ],
    historicalContext: 'Dirumuskan oleh Werner Heisenberg pada tahun 1927 di Kopenhagen.',
    realWorldApplications: ['Mikroskop penerobosan kuantum (STM)', 'Batas kebisingan kuantum pada detektor gelombang gravitasi LIGO'],
    relatedEntityIds: ['quantum', 'schrodinger-equation', 'planck-constant', 'wave-particle-duality']
  },

  // ==========================================
  // 3. FUNDAMENTAL PARTICLES & FIELDS
  // ==========================================
  {
    id: 'electron',
    name: 'Electron',
    indonesianName: 'Elektron',
    entityType: 'Particle',
    domainId: 'particle-physics',
    subdomain: 'Quarks & Leptons',
    symbol: 'e⁻',
    summary: 'Partikel elementer lepton generasi pertama dengan muatan listrik negatif elementer (-e), spin ½, dan massa diam sekitar 9.109 × 10⁻³¹ kg.',
    layers: {
      simple: 'Elektron adalah partikel super mungil pembawa listrik negatif yang mengelilingi inti atom. Aliran miliaran elektron inilah yang mengalir di kabel rumah Anda sebagai arus listrik.',
      standard: 'Elektron adalah lepton bermuatan paling stabil dengan massa diam m_e ≈ 0.511 MeV/c² dan muatan listrik q = -1.602 × 10⁻¹⁹ C. Berada pada orbital atom terkuantisasi sesuai mekanika kuantum.',
      advanced: 'Elektron merupakan fermion Dirac bermassa m_e yang mematuhi statistik Fermi-Dirac dan Persamaan Gelombang Relativistik Dirac (iγ^μ ∂_μ - m)ψ = 0. Memiliki momen magnetik anomali g ≈ 2.00231930436 yang dihitung dengan presisi 12 angka di belakang koma oleh Elektrodinamika Kuantum (QED).',
      deepDive: 'Hingga batas eksperimen akselerator berenergi tertinggi saat ini (LHC), elektron berperilaku sebagai partikel titik sejati (radius spasial < 10⁻¹⁸ meter) tanpa struktur internal kuantum yang terdeteksi.'
    },
    keyVariables: [
      { symbol: 'm_e', name: 'Massa Diam', unit: 'kg', dimension: '[M]' },
      { symbol: 'q', name: 'Muatan Listrik', unit: 'C', dimension: '[I][T]' },
      { symbol: 's', name: 'Spin Kuantum', unit: '½ ℏ', dimension: '[1]' }
    ],
    commonMisconceptions: [
      'Elektron mengorbit inti seperti planet mengitari matahari (model orbit planar klasik). Faktual: Elektron berada dalam awan orbital probabilitas kuantum 3D.'
    ],
    historicalContext: 'Ditemukan oleh J.J. Thomson pada tahun 1897 melalui eksperimen sinar katoda di Laboratorium Cavendish.',
    realWorldApplications: ['Seluruh rangkaian mikroelektronika dan komputer', 'Mikroskop elektron', 'Tabung sinar katoda (CRT)'],
    relatedEntityIds: ['elementary-charge', 'coulombs-law', 'quantum', 'atomic-structure']
  },
  {
    id: 'photon',
    name: 'Photon',
    indonesianName: 'Foton',
    entityType: 'Particle',
    domainId: 'particle-physics',
    subdomain: 'Gauge Bosons & Forces',
    symbol: 'γ',
    summary: 'Kuantum medan elektromagnetik dan pembawa gaya (gauge boson) untuk interaksi elektromagnetik, bergerak pada kelajuan c, bermassa diam nol, dan memiliki spin 1.',
    layers: {
      simple: 'Foton adalah butiran atau paket partikel cahaya terkecil. Setiap berkas cahaya lampu, sinar matahari, atau sinyal Wi-Fi tersusun dari miliaran foton yang melesat secepat 300.000 km per detik.',
      standard: 'Foton memiliki massa diam nol (m₀ = 0), tidak bermuatan listrik (q = 0), dan selalu merambat dengan kelajuan c dalam ruang hampa. Membawa energi E = hf dan momentum p = h/λ.',
      advanced: 'Sebagai boson tolok U(1)_Y gauge symmetry dalam Model Standar, foton mematuhi statistik Bose-Einstein. Foton memiliki dua keadaan polarisasi helisitas ortogonal (spin projection ±1).'
    },
    keyVariables: [
      { symbol: 'E', name: 'Energi Foton', unit: 'J', dimension: '[M][L]²[T]⁻²' },
      { symbol: 'p', name: 'Momentum', unit: 'kg·m·s⁻¹', dimension: '[M][L][T]⁻¹' }
    ],
    commonMisconceptions: [
      'Cahaya tidak punya massa berarti cahaya tidak punya momentum dan tidak bisa mendorong apa pun. Faktual: Foton membawa momentum p = E/c dan menghasilkan tekanan radiasi nyata yang dapat menggerakkan layar surya antariksa (solar sail).'
    ],
    historicalContext: 'Dikonsepkan oleh Albert Einstein (1905) untuk menjelaskan efek fotolistrik, dinamai "photon" oleh Gilbert N. Lewis (1926).',
    realWorldApplications: ['Sinar laser', 'Komunikasi serat optik internet global', 'Sensor kamera digital dan teleskop optik luar angkasa'],
    relatedEntityIds: ['light', 'speed-of-light', 'photoelectric-effect', 'electromagnetism']
  },
  {
    id: 'higgs-boson',
    name: 'Higgs Boson',
    indonesianName: 'Boson Higgs',
    entityType: 'Particle',
    domainId: 'particle-physics',
    subdomain: 'Higgs Mechanism',
    symbol: 'H⁰',
    summary: 'Partikel boson skalar elementer (spin 0) tanpa muatan listrik yang merupakan eksitasi kuantum dari Medan Higgs pemberi massa bagi partikel elementer melalui pemecahan simetri spontan.',
    layers: {
      simple: 'Partikel yang sering dijuluki "Partikel Tuhan" oleh media. Boson Higgs membuktikan keberadaan medan tak terlihat di seluruh alam semesta yang bertindak seperti sirup kental: saat partikel bergerak melaluinya, mereka mendapat massa inersia.',
      standard: 'Memiliki massa diam sekitar 125.1 GeV/c² (sekitar 133 kali massa proton). Merupakan kepingan teka-teki terakhir yang melengkapi Model Standar Fisika Partikel.',
      advanced: 'Dihasilkan oleh pemecahan simetri elektrolemah spontan (electroweak symmetry breaking) SU(2)_L × U(1)_Y → U(1)_EM melalui potensial Higgs "topi Meksiko" V(Φ) = μ² Φ†Φ + λ(Φ†Φ)². Nilai ekspektasi vakum (VEV) medan Higgs adalah v ≈ 246 GeV.',
      deepDive: 'Massa boson W dan Z diperoleh langsung dari mekanisme Higgs, sementara massa fermion (quark dan lepton) diperoleh melalui kopling Yukawa dengan medan Higgs g_f = √2 m_f / v.'
    },
    keyVariables: [
      { symbol: 'm_H', name: 'Massa Higgs', unit: '125.11 ± 0.11 GeV/c²', dimension: '[M]' },
      { symbol: 's', name: 'Spin Kuantum', unit: '0 (Skalar)', dimension: '[1]' }
    ],
    commonMisconceptions: [
      'Miskonsepsi: Medan Higgs memberikan 100% massa tubuh manusia. Faktual: Medan Higgs hanya memberi massa pada elektron dan quark konstituen (~1% dari massa tubuh kita); 99% massa tubuh kita berasal dari energi ikat gaya kuat (gluon) di dalam proton dan neutron melalui rumus E = mc²!'
    ],
    historicalContext: 'Diprediksi teoretis oleh Peter Higgs, François Englert, dkk. (1964) dan ditemukan secara eksperimental pada 4 Juli 2012 di akselerator partikel raksasa LHC (Large Hadron Collider) CERN di Jenewa.',
    realWorldApplications: ['Pemahaman fondasi asal mula massa inersia alam semesta', 'Teknologi magnet superkonduktor dan akselerator partikel canggih'],
    relatedEntityIds: ['particle-physics', 'mass', 'standard-model']
  },

  // ==========================================
  // 4. PHYSICAL THEORIES & SYSTEMS
  // ==========================================
  {
    id: 'general-relativity-theory',
    name: 'General Theory of Relativity',
    indonesianName: 'Teori Relativitas Umum',
    entityType: 'Theory',
    domainId: 'general-relativity',
    subdomain: 'Curved Spacetime Metric',
    symbol: 'G_μν = (8πG / c⁴) T_μν',
    summary: 'Teori gravitasi modern Albert Einstein (1915) yang memandang gravitasi bukan sebagai gaya tarik tak terlihat melintasi ruang, melainkan kelengkungan geometri kontinuum ruang-waktu 4-dimensi akibat distribusi massa dan energi.',
    layers: {
      simple: 'Bayangkan selembar kain karet tebal yang diregangkan. Jika Anda meletakkan bola boling berat di tengah kain, kain akan melengkung ke bawah. Bola kelereng kecil yang digelindingkan akan berbelok melingkari lekukan itu. Seperti itulah massa melengkungkan ruang di sekitarnya!',
      standard: 'Berdasarkan Prinsip Kesetaraan: pengamat di dalam lift tertutup yang jatuh bebas tidak dapat membedakan keadaannya dengan melayang di ruang hampa tanpa gravitasi. Persamaan Medan Einstein menghubungkan tensor kelengkungan Einstein G_μν dengan tensor tegangan-energi materi T_μν.',
      advanced: 'Persamaan diferensial tensor non-linear: R_μν - ½ R g_μν + Λ g_μν = (8πG/c⁴) T_μν. Geometri ruang-waktu dinyatakan oleh tensor metrik g_μν dengan metrik kuadrat jarak ds² = g_μν dx^μ dx^ν. Partikel uji bergerak sepanjang lintasan geodetik yang meminimumkan panjang lintasan ruang-waktu.'
    },
    keyVariables: [
      { symbol: 'G_μν', name: 'Tensor Einstein', unit: 'm⁻²', dimension: '[L]⁻²' },
      { symbol: 'T_μν', name: 'Tensor Tegangan-Energi', unit: 'J·m⁻³', dimension: '[M][L]⁻¹[T]⁻²' }
    ],
    commonMisconceptions: [
      'Ruang hampa adalah wadah statis kosong. Faktual: Ruang-waktu adalah kain dinamis yang dapat melengkung, meregang, bergetar (gelombang gravitasi), dan terkoyak di singularitas.'
    ],
    historicalContext: 'Dirumuskan oleh Albert Einstein pada November 1915 setelah pergulatan matematika selama 10 tahun.',
    realWorldApplications: ['Koreksi waktu satelit navigasi GPS (tanpa koreksi relativitas umum, GPS akan meleset ~11 km per hari)', 'Pendeteksian gelombang gravitasi oleh LIGO/Virgo'],
    relatedEntityIds: ['spacetime', 'black-hole', 'gravitational-waves', 'gravitational-constant']
  },
  {
    id: 'black-hole',
    name: 'Black Hole',
    indonesianName: 'Lubang Hitam',
    entityType: 'Phenomenon',
    domainId: 'astrophysics',
    subdomain: 'Black Holes & Singularities',
    symbol: 'R_s = 2GM / c²',
    summary: 'Wilayah ruang-waktu dengan konsentrasi massa yang begitu padat sehingga kelengkungan gravitasi begitu ekstrem sampai tidak ada materi ataupun radiasi cahaya yang dapat lolos dari balik horizon peristiwanya.',
    layers: {
      simple: 'Lubang hitam adalah tempat di mana gravitasi begitu dahsyat sehingga bahkan cahaya—benda tercepat di alam semesta—tidak bisa melarikan diri jika masuk melewati batasnya yang disebut horizon peristiwa.',
      standard: 'Batas luar lubang hitam non-rotasi (metrik Schwarzschild) adalah Radius Schwarzschild: R_s = 2GM / c². Untuk massa sebesar Bumi, radius ini hanya sekitar 9 milimeter; untuk massa Matahari, sekitar 3 kilometer.',
      advanced: 'Menurut Teorema Tanpa Rambut (No-hair theorem), lubang hitam stasioner sepenuhnya dicirikan oleh hanya 3 parameter: massa M, momentum sudut putar J, dan muatan listrik Q (Solusi Kerr-Newman). Di pusatnya secara klasik terdapat singularitas gravitasi di mana kelengkungan Riemann tak terhingga.',
      deepDive: 'Paradoks Informasi Lubang Hitam (Hawking 1974) mempertanyakan apa yang terjadi pada informasi keadaan kuantum materi saat lubang hitam menguap melalui radiasi kuantum Hawking (T_H = ℏc³ / 8πGMk_B). Ini adalah garis depan perburuan teori Gravitasi Kuantum (String Theory & Loop Quantum Gravity).'
    },
    keyVariables: [
      { symbol: 'R_s', name: 'Radius Schwarzschild', unit: 'm', dimension: '[L]' },
      { symbol: 'M', name: 'Massa Lubang Hitam', unit: 'kg', dimension: '[M]' }
    ],
    commonMisconceptions: [
      'Miskonsepsi: Lubang hitam adalah penyedot debu raksasa kosmik yang menyedot segala sesuatu dari jauh. Faktual: Jika Matahari tiba-tiba digantikan oleh lubang hitam dengan massa persis sama, Bumi akan tetap mengorbit seperti biasa tanpa tersedot!'
    ],
    historicalContext: 'Diprediksi secara teoretis oleh Karl Schwarzschild (1916). Foto citra pertama horizon peristiwa lubang hitam M87* berhasil diabadikan oleh Event Horizon Telescope (EHT) pada April 2019.',
    realWorldApplications: ['Pusat galaksi Bima Sakti (Sagittarius A*)', 'Sumber gelombang gravitasi kuat dari peristiwa merger biner'],
    relatedEntityIds: ['general-relativity-theory', 'gravitation', 'spacetime']
  },

  // ==========================================
  // 5. QUANTITIES & UNITS
  // ==========================================
  {
    id: 'force',
    name: 'Force',
    indonesianName: 'Gaya',
    entityType: 'Quantity',
    domainId: 'dynamics',
    subdomain: 'Newton’s Three Laws',
    symbol: 'F (atau F⃗)',
    summary: 'Besaran vektor yang merepresentasikan tarikan atau dorongan pada suatu benda bermassa yang mampu menyebabkan perubahan keadaan gerak atau deformasi bentuk.',
    layers: {
      simple: 'Gaya adalah tarikan atau dorongan. Saat Anda menendang bola, menarik gerobak, atau saat gravitasi menarik Anda ke tanah, Anda sedang merasakan gaya.',
      standard: 'Gaya diukur dalam satuan SI Newton (N). Satu Newton didefinisikan sebagai besar gaya yang diperlukan untuk memberikan percepatan 1 m/s² pada benda bermassa 1 kg (1 N = 1 kg·m/s²). Gaya merupakan besaran vektor dengan magnitudo dan arah spesifik.',
      advanced: 'Dalam mekanika analitik Lagrangian, gaya tergeneralisasi didefinisikan sebagai Q_j = ∂L/∂q_j - d/dt(∂L/∂q̇_j). Untuk medan konservatif, vektor gaya adalah minus gradien dari fungsi energi potensial skalar: F⃗ = -∇U.'
    },
    keyVariables: [
      { symbol: 'F', name: 'Gaya', unit: 'Newton (N)', dimension: '[M][L][T]⁻²' }
    ],
    commonMisconceptions: [
      'Gaya tersimpan di dalam benda yang bergerak (konsep "impetus" kuno keliru). Benda memiliki energi atau momentum, bukan memiliki gaya.'
    ],
    historicalContext: 'Dirumuskan oleh Archimedes (statika tuas) dan dimatangkan secara dinamis oleh Newton.',
    realWorldApplications: ['Rekayasa struktur jembatan dan gedung tahan gempa', 'Uji tabrak keselamatan kendaraan'],
    relatedEntityIds: ['acceleration', 'mass', 'newton-second-law', 'work']
  },
  {
    id: 'mass',
    name: 'Mass',
    indonesianName: 'Massa',
    entityType: 'Quantity',
    domainId: 'foundations',
    subdomain: 'SI Units & Standards',
    symbol: 'm',
    summary: 'Besaran pokok skalar yang mengukur kuantitas materi dalam suatu benda sekaligus ukuran inersianya terhadap percepatan dan sumber medan gravitasi.',
    layers: {
      simple: 'Massa adalah banyaknya materi dalam suatu benda. Massa Anda di Bumi, di Bulan, atau melayang di ruang hampa tetap sama persis, berbeda dengan berat yang bisa berubah tergantung gravitasi setempat.',
      standard: 'Satuan dasar SI untuk massa adalah Kilogram (kg). Sejak 20 Mei 2019, kilogram tidak lagi didefinisikan oleh silinder logam fisik di Paris, melainkan dikaitkan langsung dengan nilai eksak Konstanta Planck (h = 6.62607015 × 10⁻³⁴ kg·m²·s⁻¹) menggunakan Timbangan Kibble elektrodinamik.',
      advanced: 'Fisika membedakan dua manifestasi massa: 1) Massa inersial (m_i = F/a) yang mengukur resistansi terhadap akselerasi, dan 2) Massa gravitasi (m_g = F_g r² / GM) yang mengukur respon terhadap gaya tarik gravitasi. Kesetaraan m_i = m_g telah diverifikasi hingga ketelitian 10⁻¹⁵ oleh eksperimen satelit MICROSCOPE.'
    },
    keyVariables: [
      { symbol: 'm', name: 'Massa', unit: 'Kilogram (kg)', dimension: '[M]' }
    ],
    commonMisconceptions: [
      'Mencampuradukkan massa dengan berat. Berat adalah gaya gravitasi (W = m·g) dalam satuan Newton, sedangkan massa adalah sifat intrinsik zat dalam satuan Kilogram.'
    ],
    historicalContext: 'Didefinisikan secara mekanis oleh Newton (1687) dan dimurnikan oleh redefinisi sistem SI 2019.',
    realWorldApplications: ['Metrologi standar industri', 'Pengukuran bahan farmasi mikro-gram'],
    relatedEntityIds: ['inertia', 'force', 'gravitation', 'speed-of-light']
  },
  {
    id: 'electric-field',
    name: 'Electric Field',
    indonesianName: 'Medan Listrik',
    entityType: 'Field',
    domainId: 'electricity',
    subdomain: 'Electric Field & Potential',
    symbol: 'E⃗',
    summary: 'Medan vektor fisik di sekitar muatan listrik yang memberikan gaya elektrostatik pada setiap partikel bermuatan lain yang berada di dalam wilayah medan tersebut.',
    layers: {
      simple: 'Medan listrik adalah "aura gaya" tak terlihat yang dipancarkan oleh setiap muatan listrik. Garis-garis medannya memancar keluar dari muatan positif dan masuk menuju muatan negatif.',
      standard: 'Kuat medan listrik E⃗ pada suatu titik didefinisikan sebagai gaya elektrostatik F⃗ yang dialami oleh sebuah muatan uji positif q₀ ditaruh di titik tersebut dibagi dengan besar muatan ujinya: E⃗ = F⃗ / q₀. Satuan SI: N/C atau V/m.',
      advanced: 'Medan listrik bersumber dari kerapatan muatan listrik volume ρ sesuai Hukum Gauss (Persamaan Maxwell I): ∇ · E⃗ = ρ / ε₀. Untuk medan elektrostatik statis, rotasionalnya nol (∇ × E⃗ = 0) sehingga dapat dinyatakan sebagai minus gradien potensial skalar: E⃗ = -∇V.'
    },
    keyVariables: [
      { symbol: 'E', name: 'Kuat Medan Listrik', unit: 'N·C⁻¹ (atau V·m⁻¹)', dimension: '[M][L][T]⁻³[I]⁻¹' }
    ],
    commonMisconceptions: [
      'Garis-garis medan listrik adalah lintasan yang akan dilalui oleh partikel bermuatan jika dilepaskan. Faktual: Garis medan menunjukkan arah percepatan sesaat partikel, bukan lintasannya.'
    ],
    historicalContext: 'Dikonsepkan oleh Michael Faraday untuk menghindari aksi jarak jauh (action-at-a-distance) Newton.',
    realWorldApplications: ['Layar sentuh kapasitif smartphone', 'Penyaring polusi udara elektrostatik cerobong pabrik (Precipitator)'],
    relatedEntityIds: ['coulombs-law', 'magnetic-field', 'electromagnetism']
  },
  {
    id: 'velocity',
    name: 'Velocity',
    indonesianName: 'Kecepatan',
    entityType: 'Quantity',
    domainId: 'kinematics',
    subdomain: 'Vector Kinematics',
    symbol: 'v⃗',
    summary: 'Besaran vektor yang menyatakan laju perubahan posisi benda terhadap waktu beserta arah geraknya.',
    layers: {
      simple: 'Kecepatan adalah seberapa cepat Anda bergerak ke arah tertentu. Berbeda dengan kelajuan (speedometer mobil hanya menunjukkan angka), kecepatan mencakup arah (misalnya: 60 km/jam ke arah utara).',
      standard: 'Kecepatan rata-rata adalah perpindahan vektor dibagi selang waktu: v⃗_avg = Δr⃗ / Δt. Kecepatan sesaat adalah turunan pertama posisi terhadap waktu: v⃗(t) = dr⃗/dt. Satuan SI: m/s.',
      advanced: 'Dalam 4-dimensi ruang-waktu relativistik, 4-kecepatan U^μ = dx^μ / dτ (dengan dτ adalah waktu tepat / proper time) memiliki magnitudo kuadrat invarian U_μ U^μ = -c².',
      deepDive: 'Batas kelajuan universal informasi dan partikel bermassa adalah c (299.792.458 m/s). Bahkan dalam efek penerobosan kuantum (quantum tunneling), kecepatan penjalaran informasi kausal tidak pernah melampaui c.'
    },
    keyVariables: [
      { symbol: 'v', name: 'Kecepatan', unit: 'm·s⁻¹', dimension: '[L][T]⁻¹' }
    ],
    commonMisconceptions: [
      'Menyamakan kecepatan (vektor) dengan kelajuan (skalar). Mobil yang melaju di sirkuit melingkar dengan speedometer tetap 100 km/jam memiliki kelajuan konstan, namun kecepatannya terus berubah karena arahnya berbelok.'
    ],
    historicalContext: 'Dirumuskan oleh Galileo Galilei dalam studi gerak benda jatuh bebas.',
    realWorldApplications: ['Navigasi penerbangan udara GPS', 'Penentuan orbit satelit'],
    relatedEntityIds: ['acceleration', 'mass', 'linear-momentum', 'kinetic-energy-classic']
  },
  {
    id: 'energy',
    name: 'Energy',
    indonesianName: 'Energi',
    entityType: 'Quantity',
    domainId: 'work-energy',
    subdomain: 'Conservation of Energy',
    symbol: 'E',
    summary: 'Besaran skalar invarian yang menyatakan kapasitas suatu sistem fisik untuk melakukan usaha atau memindahkan kalor.',
    layers: {
      simple: 'Energi adalah kemampuan untuk membuat sesuatu terjadi. Energi ada dalam banyak bentuk: energi gerak, energi panas, energi listrik, dan energi kimia dalam makanan yang Anda makan.',
      standard: 'Satuan SI energi adalah Joule (J = N·m = kg·m²·s⁻²). Bentuk mekaniknya mencakup energi kinetik translasi (½mv²), rotasi (½Iω²), dan potensial gravitasi (mgh) atau pegas (½kx²).',
      advanced: 'Dalam mekanika analitik, energi total sistem konservatif berkaitan erat dengan fungsi Hamiltonian H(q, p) = ∑ p_i q̇_i - L. Menurut Teorema Noether, energi kekal karena hukum fisika tidak berubah seiring berjalannya waktu (time-translation symmetry).',
      deepDive: 'Dalam Relativitas Khusus, massa itu sendiri adalah energi terkonsentrasi yang dinyatakan oleh E = mc². Dalam mekanika kuantum, keadaan energi partikel terikat terkuantisasi menjadi tingkat-tingkat diskret (eigenvalue dari operator Hamiltonian Ĥ).'
    },
    keyVariables: [
      { symbol: 'E', name: 'Energi', unit: 'Joule (J)', dimension: '[M][L]²[T]⁻²' }
    ],
    commonMisconceptions: [
      'Energi bisa habis atau hilang lenyap. Faktual: Energi tidak pernah habis, hanya mengalami degradasi menjadi energi panas yang kurang berguna (peningkatan entropi).'
    ],
    historicalContext: 'Dikonseptualisasikan abad ke-19 oleh Thomas Young, Joule, dan Helmholtz.',
    realWorldApplications: ['Transisi energi terbarukan global', 'Jaringan transmisi tenaga listrik'],
    relatedEntityIds: ['work', 'conservation-of-energy', 'mass-energy-equivalence', 'entropy']
  },
  {
    id: 'work',
    name: 'Work',
    indonesianName: 'Usaha Mekanik',
    entityType: 'Concept',
    domainId: 'work-energy',
    subdomain: 'Work-Energy Theorem',
    symbol: 'W',
    summary: 'Transfer energi yang terjadi ketika gaya bekerja pada suatu benda dan menyebabkan perpindahan sepanjang arah gaya tersebut.',
    layers: {
      simple: 'Dalam fisika, usaha hanya terjadi jika Anda mendorong sesuatu dan benda itu benar-benar berpindah. Mendorong dinding kokoh selama berjam-jam sampai lelah menghasilkan usaha fisika nol karena dinding tidak bergeser sama sekali!',
      standard: 'Usaha oleh gaya konstan didefinisikan sebagai perkalian titik (dot product) vektor gaya dan vektor perpindahan: W = F⃗ · d⃗ = F · d · cos(θ). Teorema Usaha-Energi menyatakan: W_net = ΔE_k. Satuan SI: Joule (J).',
      advanced: 'Untuk gaya bervariasi sepanjang lintasan kurva C: W = ∫_C F⃗ · dr⃗. Jika gaya bersifat konservatif (∇ × F⃗ = 0), usaha tidak bergantung pada bentuk lintasan dan dapat ditulis W = -ΔU.'
    },
    keyVariables: [
      { symbol: 'W', name: 'Usaha', unit: 'Joule (J)', dimension: '[M][L]²[T]⁻²' }
    ],
    commonMisconceptions: [
      'Gaya yang bekerja tegak lurus arah gerak melakukan usaha. Faktual: Cos(90°) = 0, sehingga gaya gravitasi pada satelit di orbit lingkaran sempurna tidak melakukan usaha mekanik sama sekali.'
    ],
    historicalContext: 'Dirumuskan oleh Gaspard-Gustave de Coriolis tahun 1826.',
    realWorldApplications: ['Perhitungan konsumsi bahan bakar mesin kendaraan', 'Daya angkat derek crane konstruksi'],
    relatedEntityIds: ['force', 'energy', 'kinetic-energy-classic']
  },
  {
    id: 'gravity',
    name: 'Gravitation',
    indonesianName: 'Gravitasi',
    entityType: 'Concept',
    domainId: 'gravitation',
    subdomain: 'Universal Gravitation',
    symbol: 'g (atau G_μν)',
    summary: 'Fenomena fundamental di mana materi dan energi saling menarik satu sama lain, atau secara relativistik merupakan kelengkungan geometri kontinuum ruang-waktu.',
    layers: {
      simple: 'Gaya tarik alami yang membuat apel jatuh dari pohon ke tanah, menjaga kita tetap berpijak di bumi, dan membuat Bumi terus mengelilingi Matahari.',
      standard: 'Dalam formulasi Newton, gravitasi adalah gaya tarik timbal balik antara dua massa: F = G (m₁m₂ / r²). Menghasilkan medan gravitasi g = GM / r² dan percepatan jatuh bebas standar 9.8 m/s² di permukaan Bumi.',
      advanced: 'Dalam Relativitas Umum, gravitasi bukan gaya tarik, melainkan kelengkungan ruang-waktu 4D yang disebabkan oleh tensor tegangan-energi materi: G_μν = (8πG/c⁴) T_μν. Benda jatuh bebas bergerak mengikuti garis lurus terpendek (geodetik) dalam ruang lengkung.',
      deepDive: 'Gravitasi adalah gaya paling lemah di antara 4 interaksi fundamental alam semesta (kira-kira 10³⁶ kali lebih lemah dari gaya elektrostatik), namun mendominasi skala kosmik karena tidak ada "muatan gravitasi negatif" yang saling meniadakan.'
    },
    keyVariables: [
      { symbol: 'G', name: 'Konstanta Gravitasi', unit: 'N·m²·kg⁻²', dimension: '[M]⁻¹[L]³[T]⁻²' }
    ],
    commonMisconceptions: [
      'Astronot di stasiun luar angkasa ISS melayang karena tidak ada gravitasi di sana. Faktual: Gravitasi di orbit ISS masih sekitar 90% dari gravitasi Bumi! Mereka melayang karena stasiun dan astronot terus-menerus jatuh bebas mengelilingi Bumi.'
    ],
    historicalContext: 'Dipelajari kuantitatif oleh Newton (1687) dan direvolusi oleh Einstein (1915).',
    realWorldApplications: ['Satelit cuaca dan komunikasi geostasioner', 'Pasang surut air laut akibat gravitasi Bulan'],
    relatedEntityIds: ['universal-gravitation', 'spacetime', 'black-hole', 'general-relativity-theory']
  },
  {
    id: 'magnetic-field',
    name: 'Magnetic Field',
    indonesianName: 'Medan Magnet',
    entityType: 'Field',
    domainId: 'magnetism',
    subdomain: 'Magnetic Fields & Poles',
    symbol: 'B⃗',
    summary: 'Medan vektor yang dihasilkan oleh muatan listrik yang bergerak atau momen dipol magnetik intrinsik partikel, yang memberikan gaya magnetik pada muatan bergerak lain.',
    layers: {
      simple: 'Wilayah tak terlihat di sekitar magnet atau kawat berarus listrik yang dapat menarik jarum kompas atau benda-benda dari besi.',
      standard: 'Diukur dalam satuan Tesla (T = N/(A·m)). Gaya magnetik pada muatan q yang meluncur dengan kecepatan v⃗ dalam medan B⃗ diberikan oleh gaya Lorentz: F⃗_m = q (v⃗ × B⃗). Karena bersifat perkalian silang, gaya selalu tegak lurus dengan kecepatan partikel.',
      advanced: 'Dihasilkan oleh rapat arus listrik J⃗ sesuai Hukum Ampère-Maxwell: ∇ × B⃗ = μ₀J⃗ + μ₀ε₀ ∂E⃗/∂t. Berdasarkan Hukum Gauss untuk Magnetisme: ∇ · B⃗ = 0, yang menyatakan bahwa tidak ada monopol magnetik yang terisolasi di alam semesta (garis gaya magnetik selalu membentuk kurva tertutup).'
    },
    keyVariables: [
      { symbol: 'B', name: 'Medan Magnetik (Induksi Magnet)', unit: 'Tesla (T)', dimension: '[M][T]⁻²[I]⁻¹' }
    ],
    commonMisconceptions: [
      'Kutub magnet utara geografis Bumi adalah kutub utara magnetik. Faktual: Kutub utara jarum kompas ditarik ke utara Bumi, yang berarti di belahan utara Bumi sebenarnya terdapat kutub SELATAN magnetik!'
    ],
    historicalContext: 'Diteliti oleh William Gilbert (1600), Oersted (1820), dan dirumuskan oleh Ampère & Maxwell.',
    realWorldApplications: ['Motor listrik industri', 'Generator pembangkit listrik tenaga air/uap', 'Mesin pencitraan resonansi magnetik (MRI)'],
    relatedEntityIds: ['electric-field', 'electromagnetism', 'lorentz-force']
  },
  {
    id: 'electric-charge',
    name: 'Electric Charge',
    indonesianName: 'Muatan Listrik',
    entityType: 'Quantity',
    domainId: 'electricity',
    subdomain: 'Coulomb’s Law',
    symbol: 'q (atau Q)',
    summary: 'Sifat fisik intrinsik materi yang menyebabkannya mengalami gaya saat berada di dalam medan elektromagnetik.',
    layers: {
      simple: 'Sifat dasar partikel yang ada dua macam: positif (+) dan negatif (−). Muatan sejenis tolak-menolak, dan muatan berlawanan tarik-menarik.',
      standard: 'Satuan SI adalah Coulomb (C). Muatan listrik bersifat kekal secara mutlak dalam setiap reaksi fisika dan kimia (Conservation of Electric Charge) dan terkuantisasi dalam kelipatan muatan elementer e ≈ 1.602 × 10⁻¹⁹ C.',
      advanced: 'Dalam teori medan tolok (gauge theory), kekekalan muatan listrik dijamin oleh simetri global U(1)_EM dari kerapatan Lagrangian Elektrodinamika Kuantum melalui arus Noether j^μ: ∂_μ j^μ = 0.'
    },
    keyVariables: [
      { symbol: 'q', name: 'Muatan Listrik', unit: 'Coulomb (C)', dimension: '[I][T]' }
    ],
    commonMisconceptions: [
      'Muatan listrik dikonsumsi dan habis terbakar saat lampu menyala. Faktual: Jumlah elektron yang masuk ke lampu sama persis dengan yang keluar; yang berpindah adalah energi potensial listriknya.'
    ],
    historicalContext: 'Dinamai muatan positif dan negatif oleh Benjamin Franklin (1747).',
    realWorldApplications: ['Baterai litium smartphone', 'Fotokopi xerografi elektrostatik'],
    relatedEntityIds: ['coulombs-law', 'electric-field', 'electron', 'elementary-charge']
  },
  {
    id: 'spacetime',
    name: 'Spacetime',
    indonesianName: 'Ruang-Waktu',
    entityType: 'Concept',
    domainId: 'special-relativity',
    subdomain: 'Curved Spacetime Metric',
    symbol: 'M⁴ (atau g_μν)',
    summary: 'Kontinuum matematis empat dimensi yang memadukan tiga dimensi spasial (panjang, lebar, tinggi) dan satu dimensi waktu menjadi satu kesatuan dinamis tak terpisahkan.',
    layers: {
      simple: 'Waktu dan ruang bukanlah panggung kaku yang terpisah. Keduanya terjalin seperti kain 4-dimensi. Benda yang bergerak sangat cepat meregangkan waktu dan memendekkan ruangnya.',
      standard: 'Diperkenalkan oleh Hermann Minkowski (1908). Jarak invarian antara dua peristiwa fisik dalam ruang-waktu datar Minkowski dinyatakan oleh interval ds² = -c²dt² + dx² + dy² + dz² yang nilainya sama bagi seluruh pengamat inersial.',
      advanced: 'Dalam Relativitas Umum, ruang-waktu adalah manifold pseudo-Riemannian bermetrik g_μν dengan kelengkungan intrinsik yang diatur oleh tensor Riemann R^ρ_σμν.'
    },
    keyVariables: [
      { symbol: 'ds²', name: 'Interval Ruang-Waktu Invarian', unit: 'm²', dimension: '[L]²' }
    ],
    commonMisconceptions: [
      'Waktu berjalan seragam dengan detik yang sama di seluruh alam semesta (pandangan waktu absolut Newton keliru).'
    ],
    historicalContext: 'Dirumuskan oleh Hermann Minkowski (1908) dan Albert Einstein (1915).',
    realWorldApplications: ['Sistem navigasi satelit global GPS', 'Analisis kosmologis radiasi Big Bang'],
    relatedEntityIds: ['general-relativity-theory', 'gravity', 'black-hole', 'speed-of-light']
  },
  {
    id: 'light',
    name: 'Light & Electromagnetic Radiation',
    indonesianName: 'Cahaya & Radiasi Elektromagnetik',
    entityType: 'Concept',
    domainId: 'optics',
    subdomain: 'Electromagnetic Spectrum',
    symbol: 'c',
    summary: 'Radiasi elektromagnetik yang merambat melintasi ruang dalam bentuk gelombang medan listrik dan magnet yang saling berosilasi tegak lurus sekaligus partikel kuantum foton.',
    layers: {
      simple: 'Cahaya adalah gelombang energi yang memungkinkan mata kita melihat dunia. Cahaya tampak hanyalah sebagian kecil dari keluarga radiasi yang mencakup gelombang radio, gelombang mikro Wi-Fi, sinar rontgen, dan sinar matahari.',
      standard: 'Cepat rambat cahaya dalam ruang hampa adalah c = 299.792.458 m/s. Menghubungkan frekuensi f dan panjang gelombang λ melalui rumus c = f · λ. Cahaya tampak memiliki rentang panjang gelombang sekitar 380 nm (ungu) hingga 750 nm (merah).',
      advanced: 'Dihasilkan oleh muatan yang mengalami akselerasi sesuai Persamaan Gelombang Elektromagnetik ∇²E⃗ = (1/c²) ∂²E⃗/∂t². Energi ditransmisikan oleh vektor Poynting S⃗ = (1/μ₀) (E⃗ × B⃗).'
    },
    keyVariables: [
      { symbol: 'c', name: 'Kelajuan Cahaya', unit: 'm·s⁻¹', dimension: '[L][T]⁻¹' }
    ],
    commonMisconceptions: [
      'Cahaya melambat secara permanen saat masuk ke air atau kaca. Faktual: Foton selalu melambat hanya karena interaksi absorpsi-reemisi dengan atom medium; saat keluar kembali ke udara, cahaya kembali melaju pada kelajuan penuhnya!'
    ],
    historicalContext: 'Disatukan dengan elektromagnetisme oleh James Clerk Maxwell (1865).',
    realWorldApplications: ['Internet serat optik bawah laut', 'Sinar laser bedah medis', 'Teleskop luar angkasa James Webb'],
    relatedEntityIds: ['photon', 'speed-of-light', 'optics', 'electromagnetism']
  },
  {
    id: 'quantum',
    name: 'Quantum Reality',
    indonesianName: 'Dunia Kuantum',
    entityType: 'Concept',
    domainId: 'quantum',
    subdomain: 'Wave-Particle Duality',
    symbol: 'ℏ',
    summary: 'Wilayah fisika skala atomik dan subatomik di mana besaran fisis seperti energi dan momentum hanya dapat bertukar dalam paket-paket diskret (kuanta) dan probabilitas mendikte perilaku partikel.',
    layers: {
      simple: 'Di dunia kuantum yang sangat kecil, aturan dunia biasa tidak berlaku. Partikel dapat berada di beberapa tempat sekaligus sampai dilihat, dapat menembus tembok padat, dan bertukar informasi secara instan!',
      standard: 'Mekanika kuantum menggantikan lintasan deterministik klasik Newton dengan fungsi gelombang probabilitas Ψ(x,t). Persamaan Schrödinger iℏ ∂Ψ/∂t = ĤΨ mengatur evolusi waktu keadaan kuantum.',
      advanced: 'Keadaan kuantum adalah vektor sinar di Ruang Hilbert kompleks |ψ⟩. Observabel fisik diwakili oleh operator linier Hermitian Â yang nilai eigen-nya merupakan kemungkinan hasil pengukuran riil.'
    },
    keyVariables: [
      { symbol: 'h', name: 'Konstanta Planck', unit: 'J·s', dimension: '[M][L]²[T]⁻¹' }
    ],
    commonMisconceptions: [
      'Mekanika kuantum hanya teori filsafat tanpa aplikasi praktis. Faktual: Komputer, smartphone, chip memori silikon, LED, dan laser bekerja 100% berdasarkan hukum mekanika kuantum.'
    ],
    historicalContext: 'Diprakarsai Planck (1900), Einstein (1905), Bohr (1913), Schrödinger & Heisenberg (1925).',
    realWorldApplications: ['Komputer kuantum qubit superkonduktor', 'Kriptografi kuantum anti-sadap QKD'],
    relatedEntityIds: ['wave-particle-duality', 'heisenberg-uncertainty-principle', 'electron', 'photon']
  }
];

