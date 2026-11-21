const APP_CONFIG = {
    appName: "Dinomotors",
    ownerName: "Kiki Subagja, S. Pd",
    storagePrefix: "dino",
    materiPrefix: "N",
    assetPath: "./assets/",
    videoPath: "./video/",
    colors: {
        primary: "#2E7D32",
        primaryLight: "#4CAF50",
        bgLight: "#E8F5E9",
        btnGradient: "linear-gradient(180deg, #81C784, #4CAF50)",
        btnShadow: "#388E3C"
    },
    wordartGradient: "linear-gradient(90deg, #81C784, #1B5E20)",
    tagline: "Non-Locomotor Motor Skills",
    tagline_id: "Non-Lokomotor"
};

let _level = ["Mudah","Sedang","Sulit"];
let _level_EN = ["Easy","Medium","Hard"];

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

const permainan_EN = [
  // Bending
  {
    nama_permainan: "Bending Both Knees",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with feet shoulder-width apart",
      "Bend both knees slowly",
      "Return to the upright standing position",
      "Repeat the movement 5 - 8 times",
      "Focus on balance and movement coordination"
    ],
    video: ["menekuk_1.mp4"],
    tag: ["Bending"],
    level: _level_EN[0],
  },
  {
    nama_permainan: "Bending Knees with Arms Forward",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with feet shoulder-width apart and both arms extended straight forward",
      "Slowly bend both knees into a half-squat position",
      "Keep your back relatively straight and hold for 2 - 3 seconds",
      "Then return to the upright standing position",
      "Repeat the movement 6 - 10 times",
      "Focus on hand-leg coordination, balance, and body control"
    ],
    video: ["menekuk_2.mp4"],
    tag: ["Bending"],
    level: _level_EN[1],
  },
  {
    nama_permainan: "Bending Knees While Tilting the Body",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with feet shoulder-width apart and extend both arms out to the sides",
      "Bend both knees slowly",
      "While the knees are bent, tilt your body slightly to the right, then return to center",
      "Then tilt your body slightly to the left, then return to center",
      "Follow by returning to the upright standing position",
      "Perform the movement 5 times to the right and 5 times to the left",
      "Focus on balance, coordination, flexibility, and movement control"
    ],
    video: ["menekuk_3.mp4"],
    tag: ["Bending"],
    level: _level_EN[2],
  },

  // Rotating
  {
    nama_permainan: "Shoulder Rotation",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with feet shoulder-width apart and arms at your sides.",
      "Slowly roll both shoulders backward.",
      "Return to the starting position.",
      "Slowly roll both shoulders forward.",
      "Return to the starting position.",
      "Repeat 5-8 times.",
      "Focus on shoulder coordination and flexibility."
    ],
    video: ["berputar_1.mp4"],
    tag: ["Twisting"],
    level: _level_EN[0],
  },
  {
    nama_permainan: "Twisting the Body to the Right and Left",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with feet shoulder-width apart and both arms extended out to the sides.",
      "Slowly twist your torso to the right while keeping your feet in place.",
      "Return to the center position.",
      "Twist your torso to the left while keeping your feet in place.",
      "Return to the starting position.",
      "Repeat 5 times to the right and 5 times to the left.",
      "Focus on flexibility, balance, and body coordination."
    ],
    video: ["berputar_2.mp4"],
    tag: ["Twisting"],
    level: _level_EN[1],
  },
  {
    nama_permainan: "Twisting the Body with Arm Movement Combination",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with feet shoulder-width apart and extend both arms out to the sides.",
      "Twist your torso to the right while moving both arms in the direction of the twist.",
      "Return to the center position.",
      "Twist your torso to the left using the same motion.",
      "Return to the starting position. Alternate sides with controlled movements.",
      "Repeat 5-8 times in each direction.",
      "Focus on balance, coordination, flexibility, and body control."
    ],
    video: ["berputar_3.mp4"],
    tag: ["Twisting"],
    level: _level_EN[2],
  },

  // Swinging
  {
    nama_permainan: "Swinging Arms Forward and Backward Alternately",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with arms at your sides",
      "Swing your right arm forward while swinging your left arm backward, then alternate."
    ],
    video: ["mengayun_1.mp4"],
    tag: ["Swinging"],
    level: _level_EN[0],
  },
  {
    nama_permainan: "Swinging Both Arms to the Side Simultaneously",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with arms at your sides",
      "Swing both arms together from side to side (right and left) while keeping your body in place."
    ],
    video: ["mengayun_2.mp4"],
    tag: ["Swinging"],
    level: _level_EN[1],
  },
  {
    nama_permainan: "Swinging Arms Diagonally with Body Movement Combination",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with both arms at your sides",
      "Swing your right arm diagonally upward and your left arm diagonally downward alternately, while slightly twisting your torso."
    ],
    video: ["mengayun_3.mp4"],
    tag: ["Swinging"],
    level: _level_EN[2],
  },

  // Lifting
  {
    nama_permainan: "Lifting Both Arms Overhead from the Sides",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with feet shoulder-width apart.",
      "Slowly raise both arms overhead from the sides of your body.",
      "Hold for a few counts.",
      "Lower your arms back to the starting position."
    ],
    video: ["mengangkat_1.mp4"],
    tag: ["Lifting"],
    level: _level_EN[0],
  },
  {
    nama_permainan: "Lifting One Leg Forward to Waist Level",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with arms at your sides.",
      "Lift one leg forward until it is level with your waist.",
      "Hold for a few counts.",
      "Lower it back down and repeat with the other leg."
    ],
    video: ["mengangkat_2.mp4"],
    tag: ["Lifting"],
    level: _level_EN[1],
  },
  {
    nama_permainan: "Lifting Arms and Leg Simultaneously with Balance",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with feet shoulder-width apart.",
      "Raise both arms overhead while lifting one leg forward.",
      "Hold the balanced position for a few counts.",
      "Lower back down and repeat with the other leg."
    ],
    video: ["mengangkat_3.mp4"],
    tag: ["Lifting"],
    level: _level_EN[2],
  },

  // Balancing
  {
    nama_permainan: "Standing on One Leg",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand upright with both arms at your sides.",
      "Lift one leg and place the sole of your foot against the inner knee of the standing leg.",
      "Hold the balanced position for 10-15 seconds, then switch legs.",
      "Hold for 10-15 seconds on each leg."
    ],
    video: ["keseimbangan_1.mp4"],
    tag: ["Balancing"],
    level: _level_EN[0],
  },
  {
    nama_permainan: "Standing on a Straight Line",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Make a straight line on the floor (using tape).",
      "Stand with one foot directly behind the other, as if walking on a line.",
      "Extend both arms out to the sides to maintain balance.",
      "Hold the position for 15-30 seconds.",
      "Hold for 15-30 seconds."
    ],
    video: ["keseimbangan_2.mp4"],
    tag: ["Balancing"],
    level: _level_EN[1],
  },
  {
    nama_permainan: "Standing on One Leg on a Small Object While Raising Arms",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Place a small, stable object on the floor (such as a foam pad or mat).",
      "Stand on one leg on top of the object.",
      "Raise both arms overhead.",
      "Hold the position for 10-15 seconds, then switch legs.",
      "Hold for 10-15 seconds on each leg."
    ],
    video: ["keseimbangan_3.mp4"],
    tag: ["Balancing"],
    level: _level_EN[2],
  },

  // Pushing
  {
    nama_permainan: "Wall Push",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Face the wall",
      "Place both palms flat against the wall",
      "Position one foot in front and one foot behind",
      "Push against the wall with both hands.",
      "Hold for a few seconds, then return to the starting position.",
      "Repeat 5 times."
    ],
    video: ["mendorong_dinding.mp4"],
    tag: ["Pushing"],
    level: _level_EN[0],
  },
  {
    nama_permainan: "Ball Push",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Hold the ball in front of your chest",
      "Push the ball forward using both hands",
      "Pull it back slowly",
      "Perform with controlled movements",
      "Repeat 8–10 times with control."
    ],
    video: ["mendorong_bola.mp4"],
    tag: ["Pushing"],
    level: _level_EN[1],
  },
  {
    nama_permainan: "Partner Push",
    instruksi: [],
    tujuan: "",
    langkah: [
      "Stand facing your partner",
      "Press both palms together against your partner's palms",
      "Push gently",
      "Your partner maintains body balance",
      "Switch roles after 5–10 seconds",
      "Do not push too hard"
    ],
    video: ["mendorong_tiga.mp4"],
    tag: ["Pushing"],
    level: _level_EN[2],
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

const mapTagToMateri_EN = {
  Bending: "N1",
  Twisting: "N2",
  Swinging: "N3",
  Lifting: "N4",
  Balancing: "N5",
  Pushing: "N6"
};    


// function generateDataMateri(permainan) {
//   const materiMap = {};
//   Object.entries(mapTagToMateri).forEach(([nama, id]) => {
//     materiMap[id] = { id_materi: id, nama_materi: nama, permainan: [] };
//   });

//   permainan.forEach(p => {
//     const tagUnik = [...new Set(p.tag)];
//     tagUnik.forEach(tag => {
//       const materiId = mapTagToMateri[tag];
//       if (!materiId) return;
//       const sudahAda = materiMap[materiId].permainan.some(item => item.nama_permainan === p.nama_permainan);
//       if (!sudahAda) materiMap[materiId].permainan.push(p);
//     });
//   });

//   return Object.values(materiMap);
// }

function generateDataMateri(listPermainan, tagMap = mapTagToMateri) {
  const materiMap = {};
  Object.entries(tagMap).forEach(([nama, id]) => {
    materiMap[id] = { id_materi: id, nama_materi: nama, permainan: [] };
  });

  listPermainan.forEach(p => {
    const tagUnik = [...new Set(p.tag)];
    tagUnik.forEach(tag => {
      const materiId = tagMap[tag];
      if (!materiId) return;
      const sudahAda = materiMap[materiId].permainan.some(item => item.nama_permainan === p.nama_permainan);
      if (!sudahAda) materiMap[materiId].permainan.push(p);
    });
  });

  return Object.values(materiMap);
}

const dataMateri = generateDataMateri(permainan, mapTagToMateri);
const dataMateri_EN = generateDataMateri(permainan_EN, mapTagToMateri_EN);

// const dataMateri = generateDataMateri(permainan);
