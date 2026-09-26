// Audited field-equation entries; no fabricated scalar solver for differential equations.
const variable = (symbol, name, unit, dimension, quantityId, role) => ({symbol,name,unit,dimension,quantityId,role});
const E = variable('E','Electric field','V·m⁻¹','[M][L][T]⁻³[I]⁻¹','electric-field','Medan vektor listrik');
const B = variable('B','Magnetic field','T','[M][T]⁻²[I]⁻¹','magnetic-field','Medan vektor magnet');
const t = variable('t','Time','s','[T]','time','Waktu dalam turunan parsial');
const epsilon = variable('ε₀','Vacuum permittivity','F·m⁻¹','[M]⁻¹[L]⁻³[T]⁴[I]²','vacuum-permittivity','Permitivitas vakum');
const mu = variable('μ₀','Vacuum permeability','N·A⁻²','[M][L][T]⁻²[I]⁻²','vacuum-permeability','Permeabilitas vakum');
const maxwell = (id,name,formula,summary,variables,example) => ({
  id, name, indonesianName:name, domainId:'electromagnetism', category:'Persamaan Maxwell',
  latexDisplay:formula, htmlDisplay:formula, summary, variables,
  assumptions:['Bentuk mikroskopik SI, dengan seluruh muatan dan arus sebagai sumber.', 'Medan cukup halus untuk bentuk diferensial; bentuk integral menangani batas antarmuka.'],
  limitations:'Elektrodinamika klasik; peristiwa foton individual memerlukan teori kuantum. Kondisi awal dan batas dibutuhkan untuk mendapatkan solusi tertentu.',
  exampleProblem:{problem:example[0],solution:example[1]},
  relatedConceptIds:['electromagnetism','electric-field','magnetic-field','light'],
  reviewStatus:'CORE REVIEWED', sources:[{title:'Feynman Lectures II, 18: Maxwell Equations',url:'https://www.feynmanlectures.caltech.edu/II_18.html',scope:'Bentuk persamaan, sumber medan, dan batas teori klasik.'}]
});
export const FIELD_EQUATIONS = [
  maxwell('maxwell-gauss-electric','Hukum Gauss Listrik','∇·E = ρ/ε₀','Muatan merupakan sumber divergensi medan listrik. Fluks total melalui permukaan tertutup adalah Q_dalam/ε₀.',[E,variable('ρ','Charge density','C·m⁻³','[I][T][L]⁻³','charge-density','Muatan per volume, bukan massa jenis'),epsilon],['Apa medan muatan titik q pada jarak r?','Simetri bola memberi E(4πr²) = q/ε₀, sehingga E = q/(4πε₀r²), radial.']),
  maxwell('maxwell-gauss-magnetic','Hukum Gauss Magnetik','∇·B = 0','Fluks magnet neto melalui permukaan tertutup nol dalam elektromagnetisme klasik tanpa monopol magnetik.',[B,variable('r','Position','m','[L]','length','Koordinat spasial pada operator ∇')],['Berapa fluks magnet neto melalui bola tertutup?','Nol: integral ∮B·dA = 0, meskipun B lokal pada permukaan tidak nol.']),
  maxwell('maxwell-faraday','Hukum Faraday','∇×E = −∂B/∂t','Medan magnet berubah menghasilkan sirkulasi medan listrik. Tanda minus sesuai hukum Lenz.',[E,B,t],['Loop diam seluas 0.02 m² tegak lurus B yang naik 0.5 T/s; berapa GGL dengan normal searah B?','ε = −dΦ_B/dt = −A dB/dt = −0.01 V. Tanda menentukan arah terhadap orientasi loop.']),
  maxwell('maxwell-ampere','Hukum Ampère–Maxwell','∇×B = μ₀J + μ₀ε₀ ∂E/∂t','Arus konduksi dan medan listrik berubah menghasilkan sirkulasi medan magnet; suku perpindahan menjaga konsistensi kekekalan muatan.',[B,variable('J','Current density','A·m⁻²','[I][L]⁻²','current-density','Arus per luas'),mu,epsilon,E,t],['Berapa B pada jarak r dari kawat lurus panjang berarus DC I?','Dalam simetri silinder dan keadaan tunak, B(2πr) = μ₀I, sehingga B = μ₀I/(2πr).']),
  {
    id:'schrodinger-equation', name:'Schrödinger Equation', indonesianName:'Persamaan Schrödinger', domainId:'quantum', category:'Kuantum nonrelativistik',
    latexDisplay:'iℏ ∂ψ/∂t = [−ℏ²/(2m) ∇² + V]ψ', htmlDisplay:'iℏ ∂ψ/∂t = [−ℏ²/(2m) ∇² + V]ψ',
    summary:'Mengatur evolusi amplitudo probabilitas partikel nonrelativistik dalam potensial V. Dalam tiga dimensi, |ψ|² adalah kerapatan probabilitas posisi dan ∫|ψ|²d³r = 1.',
    variables:[variable('ψ','Wavefunction','m⁻³/² (3D)','[L]⁻³/²','quantum','Amplitudo kompleks; unit berubah dengan dimensi ruang'),variable('ℏ','Reduced Planck constant','J·s','[M][L]²[T]⁻¹','reduced-planck-constant','Skala aksi kuantum'),variable('m','Mass','kg','[M]','mass','Massa partikel'),variable('V','Potential energy','J','[M][L]²[T]⁻²','energy','Energi potensial, bukan tegangan'),t],
    assumptions:['Satu partikel nonrelativistik tanpa spin dalam potensial skalar.', 'Keadaan awal, normalisasi, dan syarat batas diberikan.'],
    limitations:'Tidak memodelkan penciptaan partikel, efek relativistik, atau spin. Bentuk ini bukan simulasi pengukuran atau teori medan kuantum.',
    exampleProblem:{problem:'Partikel dalam kotak 1D dengan dinding tak hingga pada x = 0 dan L: bagaimana spektrum energinya?',solution:'Syarat ψ(0)=ψ(L)=0 memberi ψ_n=√(2/L)sin(nπx/L) dan E_n=n²π²ℏ²/(2mL²), n=1,2,…; keadaan dasar bukan energi nol.'},
    relatedConceptIds:['quantum','heisenberg-uncertainty-principle','atomic-structure','wave-particle-duality'],
    reviewStatus:'CORE REVIEWED',sources:[{title:'Feynman Lectures III, 16: Position dependence of amplitudes',url:'https://www.feynmanlectures.caltech.edu/III_16.html',scope:'Evolusi amplitudo dan persamaan Schrödinger.'}]
  }
];
