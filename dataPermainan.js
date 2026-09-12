let _level = ["Mudah","Sedang","Sulit"];

const permainan = [
  // Menekuk
  {
    nama_permainan: "Menekuk Kedua Lutut",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Berdiri tegak dengan kaki dibuka selebar bahu",
      "Tekuk kedua lutut secara perlahan",
      "Kembali ke posisi berdiri tegak",
      "Lakukan gerakan 5 - 8 kali perulangan",
      "Fokus gerakan pada keseimbangan dan koordinasi gerak"
    ],
    video: ["menekuk_1.mp4"],
    tag: ["Menekuk"],
    level: _level[0],
  },
  {
    nama_permainan: "Menekuk Lutut dengan Tangan ke Depan",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Berdiri tegak dengan kaki dibuka selebar bahu, kedua tangan lurus ke depan",
      "Tekuk kedua lutut secara perlahan seperti setengah jongkok",
      "Pertahankan punggung tetap relatif tegak, tahan 2 - 3 detik",
      "Lalu kembali berdiri tegak",
      "Lakukan gerakan 6 - 10 kali perulangan",
      "Fokus gerakan pada koordinasi tangan dan kaki, keseimbangan, serta kontrol tubuh"
    ],
    video: ["menekuk_2.mp4"],
    tag: ["Menekuk"],
    level : _level[1],
  },
  {
    nama_permainan: "Menekuk Lutut Sambil Memiringkan Badan",
    instruksi: [],
    tujuan: "",
    langkah: [
    "Berdiri tegak dengan kaki dibuka selebar bahu, rentangkan kedua tangan ke samping",
    "Tekuk kedua lutut secara perlahan",
    "Saat lutut menekuk, miringkan badan sedikit ke kanan, lalu kembali",
    "Lalu miringkan badan sedikit ke kiri, lalu kembali",
    "Kemudian dilanjutkan dengan kembali berdiri tegak",
    "Lakukan gerakan 5 kali ke kanan dan 5 kali ke kiri",
    "Fokus gerakan pada keseimbangan, koordinasi, kelenturan, dan kontrol gerak"
    ],
    video: ["menekuk_3.mp4"],
    tag: ["Menekuk"],
    level: _level[2],
  },

  // Berputar
  {
    nama_permainan: "Memutar Bahu",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Berdiri tegak, kaki dibuka selebar bahu. Tangan di samping badan.",
      "Putar kedua bahu perlahan ke arah belakang.",
      "Kembali ke posisi semula.",
      "Putar kedua bahu perlahan ke arah depan.",
      "Kembali ke posisi awal.",
      "pengulangan 5-8 kali.",
      "fokus gerakan pada koordinasi dan kelenturan bahu."
    ],
    video: ["berputar_1.mp4"],
    tag: ["Berputar"],
    level: _level[0],
  },
  {
    nama_permainan: "Memutar Badan ke Kanan dan ke Kiri",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Berdiri tegak dengan kaki selebar bahu. Kedua tangan direntangkan ke samping",
      "Putar badan secara perlahan ke arah kanan. Kaki tetap di tempat.",
      "Kembali ke posisi tengah.",
      "Putar badan ke arah kiri. Kaki tetap di tempat.",
      "Kembali ke posisi awal.",
      "pengulangan 5 kali ke kanan dan 5 kali ke kiri.",
      "fokus gerakan pada kelenturan,keseimbangan, dan koordinasi tubuh."
    ],
    video: ["berputar_2.mp4"],
    tag: ["Berputar"],
    level: _level[1],
  },
  {
    nama_permainan: "Memutar Badan dengan Kombinasi Gerak Tangan",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Berdiri tegak dengan kaki selebar bahu. Rentangkan kedua tangan ke samping.",
      "Putar badan ke kanan sambil membawa kedua tangan mengikuti arah putaran.",
      "Kembali ke posisi tengah.",
      "Putar badan ke kiri dengan gerakan yang sama.",
      "Kembali ke posisi awal. lakukan secara bergantian dengan gerakan terkendali.",
      "pengulangan 5-8 kali setiap arah",
      "fokus gerakan pada keseimbangan, koordinasi, kelenturan dan kontrol tubuh."
    ],
    video: ["berputar_3.mp4"],
    tag: ["Berputar"],
    level: _level[2],
  },

  //Mengayun
  {
    nama_permainan: "Mengayunkan Tangan ke Depan dan Belakang secara Bergantian",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Berdiri tegak dengan tangan di samping badan",
      "Ayunkan tangan kanan ke depan sambil tangan kiri ke belakang, lalu bergantian."
    ],
    video: ["mengayun_1.mp4"],
    tag: ["Mengayun"],
    level: _level[0],
  },
  {
    nama_permainan: "Mengayunkan Kedua Tangan ke Samping secara Bersamaan",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Berdiri tegak dengan tangan di samping badan",
      "Ayunkan kedua tangan ke kanan dan ke kiri secara bersamaan ke samping dengan posisi tubuh tetap di tempat."
    ],
    video: ["mengayun_2.mp4"],
    tag: ["Mengayun"],
    level: _level[1],
  },
  {
    nama_permainan: "Mengayunkan Tangan secara Diagonal dengan Kombinasi Gerakan Badan",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Berdiri tegak dengan kedua tangan berada di sampin badan",
      "Ayunkan tangan kanan ke atas diagonal dan tangan kiri ke bawah diagonal secara bergantian, sambil sedikit memutar badan."
    ],
    video: ["mengayun_3.mp4"],
    tag: ["Mengayun"],
    level: _level[2],
  },

  // Mengangkat
    {
      nama_permainan: "Mengangkat Kedua Tangan ke Atas dari Samping Tubuh",
      instruksi: [],
      tujuan: "",
      langkah: [
        "Berdiri tegak dengan kaki dibuka selebar bahu.",
        "Angkat kedua tangan dari samping tubuh ke atas secara perlahan.",
        "Tahan beberapa hitungan.",
        "Turunkan kembali ke posisi awal."
      ],
      video: ["mengangkat_1.mp4"],
      tag: ["Mengangkat"],
      level: _level[0],
    },
    {
      nama_permainan: "Mengangkat Satu Kaki ke Depan Sejajar dengan Pinggang",
      instruksi: [],
      tujuan: "",
      langkah: [
        "Berdiri tegak dengan tangan di samping tubuh.",
        "Angkat salah satu kaki ke depan hingga sejajar dengan pinggang.",
        "Tahan beberapa hitungan.",
        "Turunkan kembali dan lakukan pada kaki lainnya."
      ],
      video: ["mengangkat_2.mp4"],
      tag: ["Mengangkat"],
      level: _level[1],
    },
    {
      nama_permainan: "Mengangkat Tangan dan Kaki secara Bersamaan dengan Keseimbangan",
      instruksi: [],
      tujuan: "",
      langkah: [
        "Berdiri tegak dengan kaki dibuka selebar bahu.",
        "Angkat kedua tangan ke atas sambil mengangkat satu kaki ke depan.",
        "Tahan posisi beberapa hitungan dengan seimbang.",
        "Turunkan kembali dan lakukan pada kaki lainnya."
      ],
      video: ["mengangkat_3.mp4"],
      tag: ["Mengangkat"],
      level: _level[2],
    },

  // Keseimbangan
    {
      nama_permainan: "Berdiri dengan Satu Kaki",
      instruksi: [],
      tujuan: "",
      langkah: [
        "Berdiri tegak dengan kedua tangan di samping badan.",
        "Angkat salah satu kaki, letakkan telapak kaki di bagian dalam lutut kaki yang lain.",
        "Tahan posisi seimbang selama 10-15 detik, lalu ganti kaki.",
        "tahan 10-15 detik setiap kaki."
      ],
      video: ["keseimbangan_1.mp4"],
      tag: ["Keseimbangan"],
      level: _level[0],
    },  
    {
      nama_permainan: "Berdiri di Atas Satu Garis",
      instruksi: [],
      tujuan: "",
      langkah: [
        "Buat garis lurus di lantai (bisa dengan tape/lakban).",
        "Berdiri dengan satu kaki di belakang kaki lain, seperti berjalan di atas garis.",
        "Rentangkan kedua tangan untuk menjaga keseimbangan.",
        "Tahan posisi selama 15-30 detik.",
        "tahan 15-30 detik."
      ],
      video: ["keseimbangan_2.mp4"],
      tag: ["Keseimbangan"],
      level: _level[1],
    },
    {
      nama_permainan: "Berdiri dengan Satu Kaki di Atas Benda Kecil sambil Mengangkat Tangan",
      instruksi: [],
      tujuan: "",
      langkah: [
        "Letakkan benda kecil yang stabil (misalnya busa/alas kaki).",
        "Berdiri dengan satu kaki di atas benda.",
        "Angkat kedua tangan ke atas.",
        "Tahan posisi selama 10-15 detik, lalu ganti kaki.",
        "tahan 10-15 detik setiap kaki."
      ],
      video: ["keseimbangan_3.mp4"],
      tag: ["Keseimbangan"],
      level: _level[2],
    },

  // Mendorong
  {
    nama_permainan: "Mendorong Dinding",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Menghadap dinding",
      "Kedua telapak tangan menempel di dinding",
      "Satu kaki di depan, satu kaki di belakang",
      "Dorong dinding dengan kedua tangan.",
      "Tahan beberapa detik, lalu kembali ke posisi awal.",
      "Lakukan 5 kali ulangan."
    ],
    video: ["mendorong_dinding.mp4"],
    tag: ["Mendorong"],
    level: _level[0],
  },
  {
    nama_permainan: "Mendorong Bola",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Pegang bola di depan dada",
      "Dorong bola ke depan menggunakan kedua tangan",
      "Tarik kembali secara perlahan",
      "Lakukan dengan gerakan terkontrol",
      "Ulangi 8–10 kali secara terkontrol."
    ],
    video: ["mendorong_bola.mp4"],
    tag: ["Mendorong"],
    level: _level[1],
  },
  {
    nama_permainan: "Mendorong Berpasangan",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Berdiri berhadapan",
      "Tempelkan kedua telapak tangan",
      "Dorong secara perlahan",
      "Teman menjaga keseimbangan tubuh",
      "Bergantian setelah 5–10 detik",
      "Jangan mendorong terlalu kuat"
    ],
    video: ["mendorong_tiga.mp4"],
    tag: ["Mendorong"],
    level: _level[2],
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
