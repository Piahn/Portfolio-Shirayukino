export interface DevlogArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      paragraphs: string[];
      bulletPoints?: string[];
      callout?: string;
    }[];
  };
}

export const DEVLOG_ARTICLES_EN: DevlogArticle[] = [
  {
    id: "whatsapp-prologue",
    category: "WhatsApp Bot & Engine",
    title: "Bringing the Prologue to Life: The Interactive WhatsApp RPG Engine",
    date: "Sep 2026",
    readTime: "4 min read",
    author: "Circle Tech Lead",
    summary:
      "Why we chose an interactive WhatsApp Bot for our pre-release prologue quest, and how player choices bridge into the full Steam game release.",
    content: {
      lead:
        "Developing a full-scale narrative JRPG takes countless hours of crafting artwork, tuning combat formulas, and balancing scene flow. Before the complete Steam/PC build arrives, we wanted players to experience the world of 『星海の白雪と蒼穹の聖域』 immediately without downloading gigabytes of assets.",
      sections: [
        {
          heading: "1. The Philosophy of the Zero-Barrier Prologue",
          paragraphs: [
            "Almost everyone in our community has WhatsApp installed on their phone. By building an interactive text-based RPG bot, players can start Chapter 1 right from their messaging app within seconds.",
            "Each choice sent in chat branches into distinct story dialogues, testing player instincts and revealing early clues about Elyrith.",
          ],
          callout:
            "✦ Early Bird Benefit: Players who complete the WhatsApp Prologue receive a secret redemption code to claim an exclusive Celestial Relic when the full game launches on Steam!",
        },
        {
          heading: "2. Choice Dynamics & Character Affinity",
          paragraphs: [
            "The bot features interactive dialogue prompts where players can choose response styles (e.g., Tactical, Empathetic, or Investigative). Responses subtly alter your affinity score with key companions who reside in the sanctuary of Elyrith.",
          ],
          bulletPoints: [
            "Immediate branching responses with live story flags",
            "Periodic mini combat encounters via command inputs",
            "Exclusive visual CG previews and character quotes delivered directly to chat",
            "Automatic synchronization with the community Discord waitlist",
          ],
        },
        {
          heading: "3. What Lies Ahead",
          paragraphs: [
            "Player feedback gathered during the WhatsApp Prologue quest is actively shaping our final balance tweaks for the tactical turn-based battle engine on PC.",
          ],
        },
      ],
    },
  },
  {
    id: "combat-rpg",
    category: "Combat & RPG Systems",
    title: "Balancing turn-based tactical battles with story exploration",
    date: "Sep 2026",
    readTime: "5 min read",
    author: "Lead Battle Designer",
    summary:
      "How our team integrates visual novel dialogue branches with tactical turn order, elemental synthesis, and celestial relic skills.",
    content: {
      lead:
        "One of the core design pillars of 『星海の白雪と蒼穹の聖域』 is creating seamless harmony between intimate visual novel storytelling and deep, rewarding turn-based tactics.",
      sections: [
        {
          heading: "1. The Catalyst Action Point (AP) Economy",
          paragraphs: [
            "Rather than simple attack-defend turns, our battle engine utilizes a shared pool of Catalyst AP. Every movement, elemental stance switch, and item usage draws from this energy.",
            "Players must decide whether to consume AP immediately for aggressive chain attacks or bank it to unleash party-wide Celestial Burst Arts during enemy stagger states.",
          ],
          bulletPoints: [
            "Dynamic turn timeline with enemy intention indicators",
            "Elemental resonance chains that reward tactical team composition",
            "Synthesized combat elixirs brewed back at Elyrith",
          ],
        },
        {
          heading: "2. Story Stakes in Every Skirmish",
          paragraphs: [
            "Boss battles feature branching mid-combat dialogues where player decisions during dialogue breaks trigger unique buff conditions, enemy morale shifts, or alternate victory criteria.",
          ],
          callout:
            "✦ Tactical Insight: Utilizing celestial relics found during twilight exploration can completely alter the elemental affinity of boss shields.",
        },
      ],
    },
  },
  {
    id: "music-soundscapes",
    category: "Music & Soundscapes",
    title: "Composing the score for The Celestial Snow & Elyrith",
    date: "Aug 2026",
    readTime: "5 min read",
    author: "Sound Director & Composer",
    summary:
      "Behind the studio composition of 45+ orchestral tracks fusing whimsical fantasy melodies with grand choral climaxes.",
    content: {
      lead:
        "Music in our project is not merely background accompaniment; it is the emotional pulse of the sanctuary. We wanted the score to feel like discovering an ancient music box buried beneath twilight ruins.",
      sections: [
        {
          heading: "1. Acoustic Warmth Meets Cosmic Melancholy",
          paragraphs: [
            "We combined classical acoustic instruments—celtic harp, acoustic guitars, and solo woodwinds—with sweeping string ensembles and celestial choir layers.",
            "The main sanctuary theme shifts dynamically depending on the time of day and the player's progression, transitioning from a peaceful lute lullaby into a layered orchestral ensemble.",
          ],
          bulletPoints: [
            "45+ original symphonic tracks composed specifically for story chapters",
            "High-resolution 24-bit / 96kHz lossless FLAC master recordings",
            "Dynamic adaptive audio transitions between exploration and combat",
          ],
          callout:
            "✦ Audio Feature: The Collector's Edition includes full director audio commentaries explaining the motif behind each character theme.",
        },
      ],
    },
  },
  {
    id: "worldbuilding-art",
    category: "Worldbuilding & Art",
    title: "From concept sketch to canvas: Designing Elyrith",
    date: "Jul 2026",
    readTime: "6 min read",
    author: "Art Director",
    summary:
      "A deep dive into environment illustration, celestial fantasy atmosphere, and the hidden mechanisms of the sky sanctuary.",
    content: {
      lead:
        "Every adventure needs a place to call home. For our protagonists, the celestial sanctuary 'Elyrith' (蒼穹の聖域) is both a haven of celestial science and a sanctuary sheltered above the celestial sea.",
      sections: [
        {
          heading: "1. Architectural Duality: Ancient Stone & Warm Wood",
          paragraphs: [
            "The sanctuary is built atop an ancient floating sky ruin, illuminated by crystal-powered lanterns and starlight cascading through ceiling fissures.",
            "We aimed to contrast the cold, mystical architecture of the ancient civilization with warm handcrafted wooden furniture, celestial apparatuses, and sprawling book collections.",
          ],
          bulletPoints: [
            "Over 120 hand-painted scenic backgrounds across four story seasons",
            "Animated ambient details: floating dust motes, simmering cauldrons, and ticking clockwork gears",
            "Customizable room decor that reflects player milestones and achievements",
          ],
          callout:
            "✦ Lore Note: Look closely at the star charts pinned on the sanctuary walls—they depict the constellation alignments necessary to unseal the Sovereign's chamber.",
        },
      ],
    },
  },
  {
    id: "scenario-lore",
    category: "Scenario & Mythology",
    title: "Chronicles of the Celestial Sea: Crafting the World's Mythology",
    date: "Jun 2026",
    readTime: "4 min read",
    author: "Lead Scenario Writer",
    summary:
      "Writing the celestial mythology of the starlight sovereign, branching moral choices, and the mysteries of the sky realm.",
    content: {
      lead:
        "Who is the Sovereign of the Celestial Sea? Is she a guardian preserving the balance of a fractured world, or an ancient force trapped in eternal starlight? These questions form the central mystery driving our narrative.",
      sections: [
        {
          heading: "1. No Simple Heroes or Villains",
          paragraphs: [
            "In classic visual novel tradition, your choices are not marked as 'good' or 'bad'. Instead, they reflect your character's principles: preservation of forgotten history versus forging an uncertain new future.",
            "Each of the four main scenario branches reveals a different facet of the Sovereign's past, rewarding players who explore multiple perspectives.",
          ],
          bulletPoints: [
            "4 distinct major endings with unique epilogue sequences",
            "Fully scripted relationship events that deepen party member lore",
            "Extensive in-game glossary detailing world flora, artifacts, and celestial chronology",
          ],
        },
      ],
    },
  },
];

export const DEVLOG_ARTICLES_ID: DevlogArticle[] = [
  {
    id: "whatsapp-prologue",
    category: "WhatsApp Bot & Engine",
    title: "Menghidupkan Prolog: Di Balik Layar Engine RPG Interaktif WhatsApp",
    date: "Sep 2026",
    readTime: "4 menit baca",
    author: "Circle Tech Lead",
    summary:
      "Alasan kami memilih Bot WhatsApp interaktif untuk quest prolog pra-rilis, dan bagaimana pilihan pemain terhubung ke rilis game penuh di Steam.",
    content: {
      lead:
        "Mengembangkan JRPG naratif skala penuh membutuhkan waktu ratusan jam untuk menggambar ilustrasi, meracik rumus pertarungan, dan mengatur alur adegan. Sebelum build penuh di Steam/PC hadir, kami ingin pemain dapat langsung menjelajahi semesta 『星海の白雪と蒼穹の聖域』 seketika tanpa perlu mengunduh data bergigabita.",
      sections: [
        {
          heading: "1. Filosofi Prolog Tanpa Hambatan Unduhan",
          paragraphs: [
            "Hampir semua orang di komunitas kami memiliki aplikasi WhatsApp. Dengan membangun bot RPG berbasis teks interaktif, pemain dapat memulai Chapter 1 langsung dari ponsel mereka dalam hitungan detik.",
            "Setiap pilihan di chat bercabang ke dialog cerita unik, menguji insting pemain, dan mengungkap petunjuk awal tentang misteri suaka langit Elyrith.",
          ],
          callout:
            "✦ Keuntungan Awal: Pemain yang menyelesaikan Prolog WhatsApp akan menerima kode redeem rahasia untuk mengklaim Relik Celestial eksklusif saat game rilis di Steam!",
        },
        {
          heading: "2. Dinamika Pilihan & Afinitas Karakter",
          paragraphs: [
            "Bot ini menghadirkan prompt dialog responsif di mana pemain dapat memilih gaya kepribadian (Taktis, Empatis, atau Investigatif). Pilihan Anda secara halus memengaruhi skor kepercayaan rekan yang tinggal di Elyrith.",
          ],
          bulletPoints: [
            "Respons bercabang langsung dengan status flag cerita tersimpan",
            "Pertarungan mini berkala melalui perintah teks yang praktis",
            "Pratinjau visual CG eksklusif dan kutipan karakter langsung di chat",
            "Sinkronisasi otomatis dengan daftar tunggu komunitas Discord",
          ],
        },
        {
          heading: "3. Langkah Berikutnya",
          paragraphs: [
            "Umpan balik dari para pemain quest prolog WhatsApp ini secara aktif membantu kami menyempurnakan keseimbangan engine pertarungan taktis berbasis giliran di PC.",
          ],
        },
      ],
    },
  },
  {
    id: "combat-rpg",
    category: "Sistem Pertarungan & RPG",
    title: "Menyeimbangkan pertarungan taktis turn-based dengan eksplorasi cerita",
    date: "Sep 2026",
    readTime: "5 menit baca",
    author: "Lead Battle Designer",
    summary:
      "Bagaimana tim kami memadukan percabangan dialog visual novel dengan urutan giliran taktis, sintesis elemen, dan relic celestial.",
    content: {
      lead:
        "Salah satu pilar utama 『星海の白雪と蒼穹の聖域』 adalah menciptakan harmoni yang mulus antara penceritaan visual novel yang intim dan taktik giliran yang mendalam dan memuaskan.",
      sections: [
        {
          heading: "1. Ekonomi Action Point (AP) Katalis",
          paragraphs: [
            "Alih-alih giliran serang-tahan biasa, sistem pertarungan kami menggunakan pool AP bersama. Setiap gerakan, pergantian stance elemen, dan penggunaan item memanfaatkan energi ini.",
            "Pemain harus memutuskan apakah ingin menghabiskan AP seketika untuk kombo beruntun atau menyimpannya guna melepaskan jurus pamungkas Celestial Burst saat musuh dalam kondisi Stagger.",
          ],
          bulletPoints: [
            "Linimasa giliran dinamis dengan indikator niat serangan musuh",
            "Rantai resonansi elemen yang memberi penghargaan pada komposisi formasi tim",
            "Ramuan tempur sintetis yang diracik di suaka langit Elyrith",
          ],
        },
        {
          heading: "2. Taruhan Cerita di Setiap Pertarungan",
          paragraphs: [
            "Pertarungan bos menghadirkan percabangan dialog di tengah pertempuran. Keputusan pemain saat jeda konfrontasi dapat memicu buff unik, perubahan moral musuh, atau syarat kemenangan alternatif.",
          ],
          callout:
            "✦ Wawasan Taktis: Memanfaatkan relik celestial yang ditemukan selama eksplorasi dapat mengubah total afinitas elemen pelindung bos.",
        },
      ],
    },
  },
  {
    id: "music-soundscapes",
    category: "Musik & Tata Suara",
    title: "Menggubah aransemen musik untuk The Celestial Snow & Elyrith",
    date: "Agu 2026",
    readTime: "5 menit baca",
    author: "Sound Director & Composer",
    summary:
      "Di balik layar penciptaan 45+ trek orkestra studio yang memadukan melodi fantasi magis dengan klimaks paduan suara megah.",
    content: {
      lead:
        "Musik dalam proyek kami bukan sekadar latar pengiring; ia adalah detak emosional dari suaka langit. Kami ingin aransemen musik terasa seperti menemukan kotak musik kuno yang terpendam di bawah reruntuhan senja.",
      sections: [
        {
          heading: "1. Kehangatan Akustik Bertemu Melankolia Kosmik",
          paragraphs: [
            "Kami memadukan instrumen akustik klasik—harpa celtic, gitar akustik, dan tiup kayu solo—dengan ansambel gesek megah dan paduan suara langit.",
            "Tema musik suaka utama bergeser secara dinamis tergantung waktu hari dan progres pemain, bertransisi dari petikan lute damai menjadi orkestrasi berlapis yang megah.",
          ],
          bulletPoints: [
            "45+ trek simfoni orisinal yang digubah khusus untuk tiap bab cerita",
            "Rekaman master FLAC lossless resolusi tinggi 24-bit / 96kHz",
            "Transisi audio adaptif dinamis antara eksplorasi dan arena tempur",
          ],
          callout:
            "✦ Fitur Audio: Edisi Collector mencakup rekaman komentar penuh sutradara yang menjelaskan motif musikal di balik setiap karakter.",
        },
      ],
    },
  },
  {
    id: "worldbuilding-art",
    category: "Pembangunan Semesta & Seni",
    title: "Dari sketsa konsep hingga kanvas: Merancang Elyrith",
    date: "Jul 2026",
    readTime: "6 menit baca",
    author: "Art Director",
    summary:
      "Eksplorasi mendalam ilustrasi latar, atmosfer fantasi langit, dan mekanisme kuil suaka terapung yang terlupakan.",
    content: {
      lead:
        "Setiap petualangan membutuhkan tempat untuk beristirahat. Bagi para pahlawan kita, suaka langit 'Elyrith' (蒼穹の聖域) adalah tempat perlindungan ilmu celestial sekaligus rumah yang teduh di atas Laut Bintang.",
      sections: [
        {
          heading: "1. Dualitas Arsitektur: Batu Kuno & Kayu Hangat",
          paragraphs: [
            "Suaka ini dibangun di atas reruntuhan pulau langit kuno, diterangi lentera bertenaga kristal dan cahaya bintang yang menembus celah kubah.",
            "Kami sengaja mengontraskan dinginnya arsitektur peradaban kuno yang mistis dengan kehangatan furnitur kayu buatan tangan, perkakas astronomi, dan deretan buku tua.",
          ],
          bulletPoints: [
            "Lebih dari 120 latar pemandangan lukisan tangan melintasi empat musim",
            "Detail animasi ambient: partikel debu melayang, kuali mendidih, dan roda jam kuno",
            "Dekorasi ruangan suaka yang dapat dikustomisasi sesuai pencapaian petualangan",
          ],
          callout:
            "✦ Catatan Lore: Perhatikan peta bintang di dinding suaka—mereka menggambarkan formasi rasi bintang yang diperlukan untuk membuka ruang sang Penguasa.",
        },
      ],
    },
  },
  {
    id: "scenario-lore",
    category: "Skenario & Mitologi",
    title: "Babad Laut Bintang: Merajut Mitologi Dunia",
    date: "Jun 2026",
    readTime: "4 menit baca",
    author: "Lead Scenario Writer",
    summary:
      "Menulis mitologi penguasa cahaya bintang, dilema moral bercabang, dan misteri yang terhampar di kerajaan langit.",
    content: {
      lead:
        "Siapakah Penguasa Laut Bintang yang sesungguhnya? Apakah ia pelindung yang menjaga keseimbangan dunia yang rapuh, ataukah kekuatan kuno yang terjebak dalam cahaya abadi? Pertanyaan ini menjadi misteri penggerak cerita kami.",
      sections: [
        {
          heading: "1. Tidak Ada Pahlawan atau Penjahat yang Sederhana",
          paragraphs: [
            "Dalam tradisi visual novel klasik, pilihan Anda tidak diberi label hitam atau putih. Pilihan tersebut mencerminkan prinsip karakter Anda: menjaga peninggalan masa lampau atau menantang masa depan yang penuh ketidakpastian.",
            "Masing-masing dari empat cabang skenario utama menyingkap sisi berbeda dari masa lalu sang Penguasa, memberi kepuasan tersendiri bagi pemain yang menyukai multi-rute.",
          ],
          bulletPoints: [
            "4 akhir cerita utama yang berbeda dengan sekuens epilog sinematik",
            "Event hubungan karakter yang mendalam untuk membuka rahasia masa lalu",
            "Glosarium ensiklopedia di dalam game yang merinci flora, relik, dan kronologi waktu",
          ],
        },
      ],
    },
  },
];

export const DEVLOG_ARTICLES = DEVLOG_ARTICLES_EN;

export function getDevlogArticles(lang: "id" | "en" = "en"): DevlogArticle[] {
  return lang === "id" ? DEVLOG_ARTICLES_ID : DEVLOG_ARTICLES_EN;
}

export function getDevlogArticle(
  slug: string,
  lang: "id" | "en" = "en"
): DevlogArticle | undefined {
  const list = getDevlogArticles(lang);
  return list.find((a) => a.id === slug) || DEVLOG_ARTICLES_EN.find((a) => a.id === slug);
}
