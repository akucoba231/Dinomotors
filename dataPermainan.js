const permainan = [
  {
    nama_permainan: "Mengayun Kedua Lengan",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Siswa berdiri dengan sikap siap, kaki dibuka selebar bahu, kedua tangan di samping badan.",
      "Siswa mengayunkan lengan lurus ke depan dan ke belakang secara bergantian."
    ],
    video: ["mengayun.mp4"],
    tag: ["Mengayun"],
    level: "Mudah"
  },
  {
    nama_permainan: "Sikap Kapal Terbang",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Siswa berdiri dengan sikap siap, kaki dibuka selebar bahu, kedua tangan di samping badan.",
      "Siswa meluruskan tangan ke samping, dan mengangkat satu kaki lurus ke belakang.",
      "Siswa lalu mencondongkan badan ke depan, dan menjaga sikap kapal terbang selama mungkin.",
      "Permainan selesai sesuai instruksi guru."
    ],
    video: ["berdiri_satu_kaki.mp4"],
    tag: ["Keseimbangan"],
    level: "Mudah"
  },
  {
    nama_permainan: "Mendorong Dinding",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Siswa berdiri dengan sikap siap, kaki dibuka selebar bahu, kedua tangan di samping badan.",
      "Siswa menghadap dinding, menunggu aba-aba guru.",
      "Siswa mendorong dinding, permainan selesai sesuai aba-aba dari guru."
    ],
    video: ["mendorong_dinding.mp4"],
    tag: ["Mendorong"],
    level: "Mudah"
  },
  {
    nama_permainan: "Dorong Tarik Bola",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Siswa berdiri dengan sikap siap, kaki dibuka selebar bahu, kedua tangan memegang bola.",
      "Siswa menunggu instruksi guru.",
      "Setelah aba-aba, siswa meluruskan tangan ke depan sambil memegang bola.",
      "Permainan selesai sesuai dengan aba-aba dari guru."
    ],
    video: ["mendorong_bola.mp4"],
    tag: ["Mendorong"],
    level: "Sedang"
  },
  {
    nama_permainan: "Tepuk Dorong",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Siswa berdiri berpasangan dengan teman, keduanya berdiri dengan sikap siap, kaki dibuka selebar bahu, kedua tangan di samping badan.",
      "Kedua siswa saling berhadapan.",
      "Sesuai instruksi guru, siswa lalu saling mendorong santai dengan kedua tangan saling bertemu.",
      "Siswa menahan posisi sesuai aba-aba guru."
    ],
    video: ["mendorong_tiga.mp4"],
    tag: ["Mendorong"],
    level: "Sulit"
  },
  // end extras
  {
    nama_permainan: "Patung Musik (Freeze Game)",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Musik diputar, anak bebas bergerak di tempat (mengayun tangan, memutar badan, dll).",
      "Saat musik berhenti, semua harus diam seperti patung."
    ],
    video: ["mematung_480p.mp4"],
    tag: ["Menekuk", "Berputar", "Mengayun", "Keseimbangan"],
    level: "Sedang"
  },
  {
    nama_permainan: "Ikuti Gerakanku",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Guru atau satu anak jadi pemimpin.",
      "Anak lain menirukan gerakan tanpa berpindah tempat."
    ],
    video: ["ikuti_saya_1.mp4"],
    tag: ["Menekuk", "Berputar", "Mengangkat"],
    level : "Mudah",
  },
  {
    nama_permainan: "Simon Says",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Instruksi hanya dilakukan jika diawali 'Simon says'.",
      "Kalau tidak, yang bergerak dianggap salah."
    ],
    video: ["simon_says_480p.mp4"],
    tag: ["Menekuk", "Berputar", "Mengangkat"],
    level: "Sedang"
  },
  {
    nama_permainan: "Tebak Gerakan",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Satu anak memperagakan gerakan di tempat.",
      "Teman lain menebak."
    ],
    video: ["tebak_gerakan.mp4"],
    tag: ["Berputar", "Mengayun", "Mengangkat","Menekuk"],
    level: "Sulit"
  },
  {
    nama_permainan: "Keseimbangan Satu Kaki",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Anak berdiri dengan satu kaki selama mungkin.",
      "Bisa dibuat lomba."
    ],
    video: ["keseimbangan.mp4"],
    tag: ["Keseimbangan"],
    level: "Sulit"
  }
];

const mapTagToMateri = {
  Menekuk: "N1",
  Berputar: "N2",
  Mengayun: "N3",
  Mengangkat: "N4",
  Keseimbangan: "N5",
  Mendorong: "N6"
};

function generateDataMateri(permainan) {
  const materiMap = {};

  // Inisialisasi materi (biar urutan konsisten)
  Object.entries(mapTagToMateri).forEach(([nama, id]) => {
    materiMap[id] = {
      id_materi: id,
      nama_materi: nama,
      permainan: []
    };
  });

  // Mapping permainan ke materi
  permainan.forEach(p => {
    const tagUnik = [...new Set(p.tag)]; // cegah duplikat tag

    tagUnik.forEach(tag => {
      const materiId = mapTagToMateri[tag];
      //if (!materiId) return;
      if (!materiId) {
        console.warn(`Tag tidak dikenali: ${tag}`);
        return; 
      }

      // Hindari duplikasi permainan dalam materi
      const sudahAda = materiMap[materiId].permainan
        .some(item => item.nama_permainan === p.nama_permainan);

      if (!sudahAda) {
        materiMap[materiId].permainan.push(p);
      }
    });
  });

  return Object.values(materiMap);
}

const dataMateri = generateDataMateri(permainan);
