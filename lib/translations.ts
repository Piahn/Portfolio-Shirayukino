export interface NavDrawerItem {
  num: string;
  label: string;
  desc: string;
  href: string;
}

export interface GameplayPillar {
  tag: string;
  title: string;
  description: string;
  features: string[];
}

export interface VersionUpdate {
  version: string;
  codename: string;
  date: string;
  badge: string;
  statusColor: "blue" | "gold" | "emerald" | "gray";
  description: string;
  highlights: string[];
}

export interface CommunityChannel {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  actionLabel: string;
  actionUrl: string;
  isComingSoon?: boolean;
  featured?: boolean;
}

export interface LegalSection {
  title: string;
  content: string;
}

export const translations = {
  id: {
    nav: {
      story: "Kisah & RPG",
      world: "Dunia",
      patchNotes: "Catatan Patch",
      devlog: "Catatan Dev",
      community: "Komunitas",
      portal: "Portal",
      playWhatsapp: "Main di WhatsApp",
      drawerTitle: "Navigasi Menu",
      drawerItems: [
        {
          num: "01",
          label: "Kisah & RPG",
          desc: "Pertarungan linimasa taktis & skenario bercabang",
          href: "/gameplay",
        },
        {
          num: "02",
          label: "Dunia",
          desc: "Laut Bintang, paus langit & pulau terapung",
          href: "/#world",
        },
        {
          num: "03",
          label: "Catatan Patch",
          desc: "Versi pembaruan, patch notes & roadmap rilis",
          href: "/editions",
        },
        {
          num: "04",
          label: "Catatan Dev",
          desc: "Catatan skenario, brankas 45 OST & wawasan Elyrith",
          href: "/devlog",
        },
        {
          num: "05",
          label: "Komunitas",
          desc: "Suaka Discord, beta playtest & bot WhatsApp",
          href: "/community",
        },
      ],
      drawerSecondary: [
        { label: "Steam Hub", href: "/community" },
        { label: "Discord Circle", href: "/community" },
        { label: "Brankas Musik OST", href: "/devlog/music-soundscapes" },
        { label: "Syarat & Ketentuan", href: "/terms" },
      ],
      portalBadge: "✦ MEMBER & STUDIO PORTAL",
      portalDesc: "Portal Login Pengguna",
      portalAction: "Buka Portal",
    },
    hero: {
      tags: ["Visual Novel", "Tactical JRPG", "Original OST"],
      desc: "Rasakan kisah awal fantasi celestial dan visual novel oleh ShirayukinoComp secara interaktif via WhatsApp Bot sebelum versi penuh rilis di PC/Steam. Tentukan pilihan alur cerita, kumpulkan relic rahasia, dan jelajahi misteri Laut Bintang.",
      ctaWhatsapp: "Mainkan Prolog (WhatsApp)",
      ctaLore: "Trailer & Kisah",
      currentVersionLabel: "Versi Saat Ini",
      currentVersionVal: "WhatsApp Bot",
      originalScoreLabel: "Musik Orisinal",
      originalScoreVal: "45+ Trek",
      fullGameTargetLabel: "Target Rilis",
      fullGameTargetVal: "Steam / PC",
    },
    stats: [
      { label: "Alur Cerita", value: "Bercabang" },
      { label: "Class Karakter", value: "10 Class" },
      { label: "Musik Orisinal", value: "45+ Trek" },
      { label: "Durasi Cerita", value: "35+ Jam" },
    ],
    ctaBanner: {
      badge: "INTERACTIVE PROLOGUE QUEST AVAILABLE",
      title: "Coba 3 chapter pertama secara interaktif lewat WhatsApp Bot resmi kami. Dapatkan kode rahasia untuk klaim item eksklusif saat game rilis!",
      btn: "Mulai Quest di WhatsApp",
    },
    blog: {
      tag: "Arsip Pengembangan",
      title: "Catatan produksi & devlog studio",
      viewAll: "Lihat semua catatan",
      readArticle: "Baca Artikel",
      posts: [
        {
          id: "combat-rpg",
          category: "Sistem Pertarungan & RPG",
          title: "Menyeimbangkan pertarungan taktis turn-based dengan eksplorasi cerita",
          description:
            "Bagaimana tim kami memadukan percabangan dialog visual novel dengan urutan giliran taktis, sintesis elemen, dan relic celestial.",
        },
        {
          id: "music-soundscapes",
          category: "Musik & Tata Suara",
          title: "Menggubah aransemen musik untuk The Celestial Snow & Elyrith",
          description:
            "Di balik layar penciptaan 45+ trek orkestra studio yang memadukan melodi fantasi magis dengan klimaks paduan suara megah.",
        },
        {
          id: "worldbuilding-art",
          category: "Pembangunan Semesta & Seni",
          title: "Dari sketsa konsep hingga kanvas: Merancang Elyrith",
          description:
            "Eksplorasi mendalam ilustrasi latar, atmosfer fantasi langit, dan mekanisme kuil suaka terapung yang terlupakan.",
        },
      ],
    },
    why: {
      tag: "Gameplay & Semesta",
      title: "JRPG naratif berbalut keajaiban dan taktik mendalam",
      items: [
        {
          title: "Narasi Mendalam Multi-Rute",
          description:
            "Setiap pilihan dialog bergaung ke seluruh alur cerita. Rasakan percabangan akhir cerita, ikatan karakter yang intim, dan ungkap misteri kuno Elyrith.",
        },
        {
          title: "Pertarungan Taktis Berbasis Giliran",
          description:
            "Kuasai pertarungan strategis berbasis giliran dengan katalis elemen, bonus formasi party, dan jurus pamungkas celestial burst.",
        },
        {
          title: "Sintesis Relik & Kuil Suaka",
          description:
            "Kumpulkan kristal bintang langka dan flora alami di alam liar untuk menempa perlengkapan magis, obat petualangan, dan memperkuat suaka langit.",
        },
        {
          title: "Harmoni Audio-Visual Buatan Tangan",
          description:
            "Hanyutkan diri Anda dalam ilustrasi latar lukisan tangan yang memukau serta lebih dari 45 trek orkestra orisinal yang direkam dengan instrumen akustik asli.",
        },
      ],
    },
    steps: {
      tag: "Arsitektur Sistem & Perjalanan Pemain",
      title: "Alur perpaduan taktis dan cerita visual novel",
      steps: [
        {
          number: "01",
          title: "Prolog Interaktif di WhatsApp",
          description:
            "Masuk ke semesta Laut Bintang tanpa unduhan besar. Mainkan chapter pembuka melalui antarmuka bot teks cerdas kami, pilih jalur dialog, dan buka kode item eksklusif.",
          tag: "Tersedia Sekarang",
          badge: "Akses Instan",
          highlights: ["Bot Interaktif", "Pilihan Dialog", "Kode Hadiah"],
        },
        {
          number: "02",
          title: "Pertarungan Taktis Berbasis Linimasa",
          description:
            "Kelola Action Points (AP), rangkai reaksi elemen, dan tentukan inisiatif giliran sebelum serangan lawan mendarat. Setiap pertarungan membutuhkan perhitungan cermat.",
          tag: "Sistem Pertarungan",
          badge: "Linimasa Taktis",
          highlights: ["Manajemen AP", "Kombo Elemen", "Stagger Bos"],
        },
        {
          number: "03",
          title: "Suaka Langit & Alkimia Relik",
          description:
            "Kembalilah ke Elyrith di antara ekspedisi tempur. Bangun relasi dengan rekan tim, tempa senjata bertuah, dan racik ramuan katalis pengubah alur pertempuran.",
          tag: "Sintesis & Markas",
          badge: "Suaka Elyrith",
          highlights: ["Tempa Senjata", "Alkimia Relik", "Ikatan Karakter"],
        },
        {
          number: "04",
          title: "Peluncuran Penuh di PC / Steam",
          description:
            "Bawa data progres dan kode hadiah prolog Anda ke rilis Steam resmi. Nikmati narasi penuh 5 chapter, sulih suara dwibahasa, dan integrasi achievement.",
          tag: "Target Q4 2026",
          badge: "Steam Deck 60FPS",
          highlights: ["Rilis PC", "5 Chapter", "Steam Verified"],
        },
      ],
    },
    trust: {
      label: "Spesifikasi & Kompatibilitas Sistem",
      features: [
        "Optimal untuk Steam Deck & Controller",
        "Dukungan Penuh Layar Ultrawide 21:9",
        "Sulih Suara Jepang & Inggris Penuh",
        "Teks Dwibahasa (ID / EN)",
      ],
    },
    caseStudies: {
      tag: "Bab Cerita & Narasi",
      title: "Babak utama petualangan & ekspedisi",
      cases: [
        {
          type: "Babak I: Prolog",
          problem: "Terbangun di dalam kuil kuno berselimut tanaman rambat dengan ingatan yang terpecah.",
          solution: "Kuasai relik katalis celestial pertama dan kumpulkan rekan petualangan Anda.",
          metric: "Suaka Pembisik Bintang",
        },
        {
          type: "Babak II: Pertengahan",
          problem: "Kabut senja perlahan merayap dan mengancam kepulauan terapung di langit.",
          solution: "Jelajahi labirin bawah tanah yang terlupakan, tempa perlengkapan kelas tinggi, dan hadapi bayangan penjaga.",
          metric: "Ujian Sang Kabut",
        },
        {
          type: "Babak III: Klimaks",
          problem: "Identitas asli pelindung suaka terungkap, memicu pilihan moral yang menentukan takdir semesta.",
          solution: "Buka berbagai rute akhir naratif dan true ending berdasarkan tingkat kepercayaan rekan perjalanan.",
          metric: "Sang Penguasa Cahaya Bintang",
        },
      ],
    },
    testimonials: {
      tag: "Ulasan & Kesan Pemain",
      title: "Impresi dari sesi uji coba tertutup",
      list: [
        {
          quote:
            "Sistem pertarungannya memiliki kedalaman taktis yang luar biasa. Menghubungkan mantra katalis menjadi celestial burst sembari mendengarkan iringan orkestra langsung sungguh tak terlupakan.",
          name: "Kurogane",
          role: "Steam Beta Playtester & Streamer",
          avatar: "/jack.png",
        },
        {
          quote:
            "星海の白雪と蒼穹の聖域 menghadirkan perpaduan eksplorasi santai dan misteri cerita yang memikat. Interaksi antar karakter di perkemahan suaka terasa sangat hidup dan berkesan.",
          name: "Luna V.",
          role: "Visual Novel & RPG Reviewer",
          avatar: "/sofia.png",
        },
        {
          quote:
            "Format prolog lewat WhatsApp ini sangat jenius dan segar. Ceritanya langsung menarik perhatian sejak dialog pertama tanpa hambatan download!",
          name: "Rian Pratama",
          role: "Indie Game Enthusiast",
          avatar: "/kylie.png",
        },
      ],
    },
    pricing: {
      tag: "PAKET DUKUNGAN CIRCLE",
      title: "Dukung petualangan di Laut Bintang",
      sub: "Mulai dari Rp 3k/bulan, dukung circle indie kami dan nikmati reward eksklusif.",
      supportDesc:
        "Dukungan bulanan terjangkau via IDR/Card. Dapatkan akses demo berkala, rilisan soundtrack lengkap, hingga nama Anda di credits game.",
    },
    faq: {
      tag: "Pertanyaan Umum",
      title: "Seputar Game & Circle Studio",
    },
    finalCta: {
      tag: "MULAI PERJALANAN",
      title: "Siap Mengarungi Lautan Bintang dan Menguak Misteri Elyrith?",
      desc: "Ikuti kisah awal lewat WhatsApp Bot interaktif kami sekarang secara gratis, atau bergabunglah dengan Discord komunitas kami.",
      btnWhatsapp: "Mulai Quest di WhatsApp",
      btnDiscord: "Gabung Discord Sanctuary",
    },
    footer: {
      tagline: "Di mana keajaiban bintang bertemu petualangan naratif RPG.",
      projectSub: "星海の白雪と蒼穹の聖域 Project",
      exploreBtn: "Jelajahi Elyrith",
      projectCol: "Proyek",
      storyLink: "Kisah & JRPG",
      worldLink: "Dunia",
      patchLink: "Catatan Patch",
      communityCol: "Komunitas",
      discordLink: "Discord Circle",
      botLink: "Bot WhatsApp",
      steamLink: "Steam Hub",
      legalCol: "Legalitas",
      termsLink: "Ketentuan",
      privacyLink: "Privasi",
      copyright: "Hak Cipta Dilindungi Undang-Undang.",
    },

    // Subpages: Gameplay, Editions, Community, Terms, Privacy
    gameplayPage: {
      backHome: "Beranda",
      breadcrumbCurrent: "Ikhtisar Gameplay",
      badge: "SISTEM & MEKANIK",
      title: "Pertarungan JRPG taktis bertemu visual novel bercabang",
      desc: "『星海の白雪と蒼穹の聖域』 memadukan kedalaman pertarungan giliran, peracikan relik suaka, dan eksplorasi narasi mendalam. Coba chapter pembuka sekarang via WhatsApp atau bersiap untuk rilis Steam mendatang.",
      coreFeaturesTitle: "✦ Fitur Utama",
      pillars: [
        {
          tag: "COMBAT ENGINE",
          title: "Pertarungan Taktis Berbasis Linimasa",
          description:
            "Sistem giliran strategis dengan indikator inisiatif dinamis. Kelola Action Points (AP), goyahkan pertahanan musuh dengan memanfaatkan kelemahan elemen, dan lepaskan jurus Celestial Relic Burst bersama 4 karakter aktif.",
          features: [
            "Linimasa giliran dinamis dengan taktik gangguan urutan aksi musuh",
            "Rantai katalis elemen (Astral, Pyre, Glacial, Zephyr)",
            "Sistem Stagger & Break untuk peluang serangan kritikal masif",
            "Lebih dari 40 skill karakter unik dan jurus pamungkas tim sinematik",
          ],
        },
        {
          tag: "STORY & VISUAL NOVEL",
          title: "Skenario Bercabang & Ragam Akhir Cerita",
          description:
            "Rasakan pilihan berisiko tinggi yang menentukan nasib Laut Bintang dan kawan seperjuangan. Setiap keputusan memengaruhi tingkat kepercayaan rekan, membuka chapter cerita bercabang, dan 4 akhir cerita kanon berbeda.",
          features: [
            "Lebih dari 18 persimpangan cerita besar yang memengaruhi seluruh wilayah",
            "Event ikatan pahlawan dan obrolan intim di suaka langit",
            "CG cerita berilustrasi kaya dengan transisi adegan sinematik",
            "Log skenario terintegrasi untuk memutar ulang rute cerita yang terbuka",
          ],
        },
        {
          tag: "RELIC SYNTHESIS",
          title: "Celestial Forge & Suaka Elyrith",
          description:
            "Di bawah pulau-pulau melayang terhampar suaka langit tersembunyi. Kumpulkan serpihan starlight, fosil kuno, dan katalis mineral dari ekspedisi untuk meracik ramuan tempur, menempa aksesori relik, dan mengkustomisasi perlengkapan tim.",
          features: [
            "Kisi sintesis berbasis grid yang memadukan sifat katalis dan nilai elemen",
            "Upgrade suaka yang membuka resep ramuan tingkat tinggi dan buff pasif",
            "Sistem soket relik kustom untuk menyesuaikan build setiap karakter",
            "Musik latar suaka yang menenangkan serta interaksi hangat antaranggota party",
          ],
        },
        {
          tag: "WORLD & SKY VOYAGE",
          title: "Lautan Bintang & Paus Kosmik",
          description:
            "Arungi angkasa menaiki kapal galion celestial. Bernavigasi di atas samudra awan untuk menemukan kepulauan melayang mitos, kuil langit kuno, dan paus kosmik raksasa yang melayang anggun di atmosfer berbintang.",
          features: [
            "Peta dunia luas yang membentang dari kepulauan awan hingga reruntuhan tenggelam",
            "Cuaca dinamis termasuk aurora berbintang dan badai celestial",
            "Labirin dungeon tersembunyi yang menjaga bos relik kuno",
            "Penyampaian cerita lingkungan yang kaya dan mitologi dunia lokal",
          ],
        },
      ],
      banner: {
        badge: "✦ DAPAT DIMAINKAN DI WHATSAPP HARI INI",
        title: "Uji coba keputusan pertempuran prolog langsung di WhatsApp",
        desc: "Rasakan engine dialog bercabang dan klaim item rahasia awal tanpa perlu mendownload file game.",
        action: "Buka Prolog Bot",
      },
    },

    editionsPage: {
      backHome: "Beranda",
      breadcrumbCurrent: "Versi Pembaruan & Patch Notes",
      badge: "LOG PEMBARUAN RESMI",
      title: "Versi Pembaruan & Patch Notes",
      desc: "Ikuti rekam jejak riwayat versi pembaruan (patch notes & release roadmap) untuk 『星海の白雪と蒼穹の聖域』 (The Celestial Snow & Elyrith).",
      keyHighlightsTitle: "Sorotan Utama",
      updates: [
        {
          version: "v1.0.0",
          codename: "Celestial Sea Awakening",
          date: "Target Q4 2026",
          badge: "Rilis Mendatang",
          statusColor: "blue",
          description:
            "Peluncuran resmi sedunia di PC / Steam dengan kampanye naratif penuh, 45 trek OST orkestra lengkap, dan pilihan sulih suara ganda.",
          highlights: [
            "Seluruh 5 chapter cerita dan 4 akhir cerita kanon bercabang",
            "Integrasi penuh brankas soundtrack 45 trek orkestra studio",
            "Steam Achievements, Cloud Saves, dan Trading Cards",
            "Transfer data simpanan bot WhatsApp & klaim kode relik eksklusif",
          ],
        },
        {
          version: "v0.9.4",
          codename: "Tactical Stagger & AP Overhaul",
          date: "September 2026",
          badge: "Patch Terbaru",
          statusColor: "gold",
          description:
            "Penyesuaian besar pada sistem pertarungan: menghadirkan gangguan antrean linimasa dan sinergi katalis elemen.",
          highlights: [
            "Linimasa inisiatif dinamis dengan aksi interupsi giliran lawan",
            "Rantai Katalis Elemen: Astral, Pyre, Glacial, Zephyr",
            "Ekspansi resep relik celestial pada Celestial Forge (+12 item)",
            "Optimalisasi performa visual effect dengan kelancaran 60fps",
          ],
        },
        {
          version: "v0.8.2",
          codename: "Interactive Prologue & Cloud Sync",
          date: "Agustus 2026",
          badge: "Milestone Publik",
          statusColor: "emerald",
          description:
            "Peluncuran quest pembuka interaktif via WhatsApp Bot, memungkinkan pemain menjajal pilihan prolog langsung dari ponsel.",
          highlights: [
            "Engine keputusan cerita interaktif berbasis WhatsApp Webhook",
            "Penyimpanan status awan dengan identifikasi unik pemain",
            "Debut sistem kepercayaan rekan dengan reaksi dialog dinamis",
            "Pembuatan kode item eksklusif 'Starlight Sovereign Brooch' untuk rilis Steam",
          ],
        },
        {
          version: "v0.7.0",
          codename: "Elyrith Haven & Celestial Prototype",
          date: "Juli 2026",
          badge: "Alpha Demo",
          statusColor: "gray",
          description:
            "Build sandbox awal yang memperkenalkan suaka langit Elyrith, log backlog dialog, dan sintesis relik.",
          highlights: [
            "Engine penempatan katalis sintesis berbasis grid",
            "Rendering interior suaka beratmosfer dengan pencahayaan dinamis",
            "Draf musik latar orisinal oleh circle musik ShirayukinoComp",
          ],
        },
      ],
      banner: {
        badge: "PROLOG DAPAT DIMAINKAN SEKARANG",
        title: "Ingin mencoba build v0.8.2 langsung di ponsel Anda?",
        desc: "Jalankan bot WhatsApp resmi kami untuk memulai quest prolog dan amankan kode reward item eksklusif sebelum rilis penuh Steam.",
        action: "Mulai di WhatsApp",
      },
    },

    communityPage: {
      backHome: "Beranda",
      breadcrumbCurrent: "Pusat Komunitas",
      badge: "SUAKA KOMUNITAS RESMI",
      title: "Terhubung Bersama Rekan Petualang",
      desc: "Masuk ke dalam suaka komunitas Elyrith. Diskusikan lore visual novel, uji coba battle turn-based lebih awal, klaim kode rahasia bot WhatsApp, dan ikuti polling arah pengembangan mendatang.",
      keyFeaturesTitle: "✦ Fitur Saluran",
      channels: [
        {
          id: "discord",
          title: "Discord Sanctuary Resmi",
          category: "Pusat Diskusi Real-time & Tanya Jawab Dev",
          badge: "Paling Aktif",
          description:
            "Aula guild utama untuk berteori tentang lore visual novel, bedah strategi pertempuran, sesi tanya jawab developer, dan pengumuman circle.",
          highlights: [
            "Diskusi langsung bersama penulis skenario dan komposer musik",
            "Peran eksklusif untuk Closed Beta playtester",
            "Ruang khusus bedah lore dan teori cerita tanpa spoiler liar",
            "Pameran karya penggemar dan sesi dengar bersama soundtrack",
          ],
          actionLabel: "Gabung Server Discord",
          actionUrl: "https://discord.gg",
          featured: true,
        },
        {
          id: "whatsapp",
          title: "Guild Petualang WhatsApp",
          category: "Bot Seluler & Quest Prolog",
          badge: "Aktif Sekarang",
          description:
            "Tetap terhubung langsung dari smartphone. Dapatkan quest prolog interaktif, petunjuk teka-teki, pengumuman patch, dan kode redeem rahasia langsung di WhatsApp.",
          highlights: [
            "Pilihan cerita interaktif seketika melalui Bot WhatsApp",
            "Drop kode item rahasia awal untuk peluncuran Steam",
            "Fragmen dialog harian karakter & lore dunia",
            "Saluran umpan balik langsung bagi penguji prolog",
          ],
          actionLabel: "Masuk Guild WhatsApp",
          actionUrl: "#",
          featured: false,
        },
        {
          id: "steam",
          title: "Komunitas Steam & Diskusi PC",
          category: "Pusat PC & Pengujian",
          badge: "Segera Hadir",
          description:
            "Halaman toko resmi Steam dan ruang diskusi komunitas sedang dipersiapkan untuk rilis PC. Coba prolog interaktif di WhatsApp sementara verifikasi hub Steam berlangsung.",
          highlights: [
            "Halaman toko Steam & hub komunitas dalam persiapan akhir",
            "Utas benchmark performa dan kompatibilitas Steam Deck",
            "Panduan bermain komunitas dan strategi pertarungan bos",
            "Pratinjau lencana komunitas Steam dan trading card",
          ],
          actionLabel: "Segera Hadir",
          actionUrl: "#",
          isComingSoon: true,
          featured: false,
        },
        {
          id: "sanctuary-forge",
          title: "Circle Kreasi Penggemar & Seni",
          category: "Seni, Fiksi & Aransemen Musik",
          badge: "Sorotan",
          description:
            "Wadah apresiasi khusus yang merayakan karya fan artist, musisi, cosplayer, dan kontributor penerjemah dari seluruh penjuru dunia.",
          highlights: [
            "Galeri fan art bulanan pilihan di artikel devlog",
            "Lembar referensi karakter resmi resolusi tinggi",
            "Panduan izin aransemen dan remix soundtrack",
            "Penghargaan pengakuan komunitas & drop merchandise fisik",
          ],
          actionLabel: "Kirim Karya Penggemar",
          actionUrl: "mailto:contact@shirayukinocomp.com",
          featured: false,
        },
      ],
      milestonesTitle: "✦ Milestone Komunitas & Reward Global",
      milestones: [
        {
          tier: "Tier 1",
          goal: "1.000 Penyelesai Prolog",
          status: "Tercapai",
          reward: "Wallpaper digital 4K eksklusif seluruh karakter di suaka langit",
        },
        {
          tier: "Tier 2",
          goal: "5.000 Anggota Discord",
          status: "Sedang Berjalan (68%)",
          reward: "Rilis mini-EP 3 trek akustik belum pernah diperdengarkan",
        },
        {
          tier: "Tier 3",
          goal: "10.000 Wishlist Steam",
          status: "Target Rilis",
          reward: "DLC kosmetik kostum celestial festival gratis untuk semua pemain rilis awal",
        },
      ],
      banner: {
        badge: "SUARA KOMUNITAS",
        title: "Bantu Bentuk Masa Depan Laut Bintang",
        desc: "Setiap saran dari pemain prolog dan playtester beta dipertimbangkan langsung oleh tim pengembang kami.",
        action: "Beri Masukan di Discord",
      },
    },

    devlogPage: {
      backHome: "Beranda",
      title: "Devlog & Berita Studio",
      badge: "ARSIP PRODUKSI & UPDATE",
      desc: "Catatan pengembangan berkala, wawasan naskah naratif, sampel rekaman orkestra, dan pembaruan patch dari tim ShirayukinoComp.",
      searchPlaceholder: "Cari artikel, topik, atau pembaruan...",
      readArticle: "Baca Catatan Lengkap",
    },

    termsPage: {
      backHome: "Beranda",
      breadcrumbCurrent: "Ketentuan Penggunaan",
      badge: "PANDUAN LEGAL & KOMUNITAS",
      title: "Ketentuan Penggunaan & Pedoman Karya",
      desc: "Ketentuan resmi penggunaan situs web, bot prolog, aset game, dan panduan karya kreasi penggemar ShirayukinoComp.",
      lastUpdated: "Terakhir diperbarui: September 2026",
      sections: [
        {
          title: "1. Penerimaan Ketentuan",
          content:
            "Dengan mengakses situs web ShirayukinoComp, memainkan prolog bot WhatsApp, mengunduh demo, atau membeli edisi game 『星海の白雪と蒼穹の聖域』 (The Celestial Snow & Elyrith), Anda setuju untuk terikat oleh Ketentuan Penggunaan ini serta semua undang-undang dan peraturan yang berlaku.",
        },
        {
          title: "2. Lisensi Perangkat Lunak & Game",
          content:
            "ShirayukinoComp memberi Anda lisensi pribadi, non-eksklusif, tidak dapat dipindahtangankan, dan dapat dibatalkan untuk memainkan, menyiarkan (streaming), dan menikmati game serta bot interaktif untuk tujuan hiburan pribadi non-komersial. Anda tidak boleh mendekompilasi, merekayasa balik, atau mendistribusikan ulang aset game internal tanpa otorisasi tertulis.",
        },
        {
          title: "3. Pedoman Kreasi Penggemar & Konten Komunitas",
          content:
            "Kami mendukung penuh kreativitas komunitas! Anda diperbolehkan membuat fan art, menulis fiksi penggemar, melakukan cosplay, dan mengunggah video gameplay/streaming (termasuk monetisasi YouTube/Twitch reguler). Harap cantumkan atribusi: '星海の白雪と蒼穹の聖域 © ShirayukinoComp'. Penjualan merchandise komersial berskala massal tanpa izin resmi tetap dilarang.",
        },
        {
          title: "4. Kebijakan Hak Cipta & Kekayaan Intelektual",
          content:
            "Semua judul, ilustrasi karakter, musik orisinal, logo, dan teks cerita adalah hak milik eksklusif ShirayukinoComp Creative Circle. Pelanggaran hak cipta akan ditindaklanjuti sesuai hukum kekayaan intelektual yang berlaku.",
        },
        {
          title: "5. Batasan Tanggung Jawab",
          content:
            "Game, situs web, dan bot prolog disediakan 'sebagaimana adanya'. ShirayukinoComp tidak bertanggung jawab atas gangguan koneksi pihak ketiga (seperti WhatsApp API atau server penyedia pihak ketiga) di luar kendali wajar kami.",
        },
      ],
    },

    privacyPage: {
      backHome: "Beranda",
      breadcrumbCurrent: "Kebijakan Privasi",
      badge: "KEAMANAN DATA & PRIVASI",
      title: "Kebijakan Privasi",
      desc: "Bagaimana ShirayukinoComp melindungi dan mengelola data pengguna bot WhatsApp dan situs web.",
      lastUpdated: "Terakhir diperbarui: September 2026",
      sections: [
        {
          title: "1. Informasi yang Kami Kumpulkan",
          content:
            "Saat Anda mengunjungi situs web kami, kami hanya mengumpulkan preferensi bahasa dan tema yang disimpan di penyimpanan lokal (cookies / localStorage). Saat memainkan bot WhatsApp interaktif kami, nomor telepon Anda hanya digunakan sebagai pengidentifikasi unik kemajuan cerita dan kode redeem Anda.",
        },
        {
          title: "2. Penggunaan Data",
          content:
            "Data kemajuan cerita digunakan semata-mata untuk menyimpan riwayat permainan, cabang skenario yang telah Anda pilih, dan verifikasi kode klaim item eksklusif. Kami TIDAK PERNAH menjual, menyewakan, atau membagikan data nomor telepon Anda kepada pengiklan pihak ketiga mana pun.",
        },
        {
          title: "3. Keamanan & Penyimpanan",
          content:
            "Semua data sesi disimpan di server terenkripsi dengan protokol keamanan standar industri. Anda dapat meminta penghapusan riwayat data bot Anda kapan saja dengan menghubungi tim dukungan komunitas kami.",
        },
        {
          title: "4. Hubungi Kami",
          content:
            "Jika Anda memiliki pertanyaan tentang privasi atau pengelolaan data, silakan hubungi kami melalui surel di contact@shirayukinocomp.com atau melalui server Discord resmi kami.",
        },
      ],
    },

    creditsPage: {
      backHome: "Beranda",
      breadcrumbCurrent: "Staf & Kredit",
      badge: "KREDIT PRODUKSI & TIM CIRCLE",
      title: "Kredit Produksi & Tim Kreatif",
      desc: "Kredit resmi tim inti Shirayukino Software / Comp, pengembang ekosistem Yurizaki, serta apresiasi mendalam untuk komunitas dan penguji coba.",
      coreTeamTitle: "Tim Inti & Pendiri Circle",
      coreTeamDesc: "Para kreator di balik pengembangan arsitektur game, naskah cerita, sistem bot interaktif, dan pengujian sistem.",
      coreMembers: [
        {
          name: "Piahn",
          role: "Lead Developer",
          subRole: "Founder Shirayukino Software",
          desc: "Pengembang utama arsitektur sistem, engine web, dan perancang semesta game 『星海の白雪と蒼穹の聖域』.",
          badge: "Founder",
        },
        {
          name: "Rialya",
          role: "Community Manager",
          subRole: "Owner Yurizaki • Co-Founder",
          desc: "Pengelola komunitas dan ekosistem Yurizaki, mengarahkan komunikasi, manajemen interaksi guild, dan operasional circle.",
          badge: "Co-Founder",
        },
        {
          name: "Kafka",
          role: "Core Developer & Tester",
          subRole: "Battle Mechanics & Systems",
          desc: "Pengembang logika fitur, pengujian stabilitas performa, dan sinkronisasi battle mechanics di ekosistem bot.",
          badge: "Core Dev",
        },
        {
          name: "Darren",
          role: "QA & Story Reviewer",
          subRole: "Playtest Evaluation & Balancing",
          desc: "Penguji kualitas alur cerita, evaluasi keseimbangan dinamika pertarungan, dan kurator pengalaman bermain.",
          badge: "Lead QA",
        },
      ],
      inspirationTitle: "Sumber Inspirasi",
      inspirationContent:
        "Fitur-fitur dan perkembangan dalam semesta Shirayukino dan bot Yurizaki terinspirasi langsung dari antusiasme, saran, dan ide-ide kreatif seluruh anggota komunitas. Setiap masukan dan interaksi kalian adalah inspirasi terbesar di balik setiap kemajuan karya ini.",
      bigThanksTitle: "Ucapan Terima Kasih",
      bigThanksContent:
        "Terima kasih sebesar-besarnya kepada seluruh Staff, beta playtester, dan pengguna setia Yurizaki yang senantiasa mendukung perjalanan kami. Kalian adalah alasan utama circle ini terus berkarya dan berkembang.",
      closingQuote: "Makasih udah jadi bagian dari perjalanan Shirayukino & Yurizaki!",
      banner: {
        badge: "KOMUNITAS & CIRCLE",
        title: "Bergabung Bersama Kami di Sanctuary",
        desc: "Jelajahi diskusi cerita, ikuti playtest rilisan mendatang, atau berinteraksi langsung melalui Discord dan Bot Yurizaki.",
        actionDiscord: "Buka Server Discord",
        actionBot: "Coba Bot Yurizaki",
      },
    },
  },

  en: {
    nav: {
      story: "Story & RPG",
      world: "World",
      patchNotes: "Patch Notes",
      devlog: "Devlog",
      community: "Community",
      portal: "Portal",
      playWhatsapp: "Play on WhatsApp",
      drawerTitle: "Menu Navigation",
      drawerItems: [
        {
          num: "01",
          label: "Story & RPG",
          desc: "Tactical timeline battles & branching scenarios",
          href: "/gameplay",
        },
        {
          num: "02",
          label: "World",
          desc: "The Celestial Sea, sky whales & floating islands",
          href: "/#world",
        },
        {
          num: "03",
          label: "Patch Notes",
          desc: "Version updates, patch notes & release roadmap",
          href: "/editions",
        },
        {
          num: "04",
          label: "Devlog",
          desc: "Scenario notes, 45-track OST vault & Elyrith insights",
          href: "/devlog",
        },
        {
          num: "05",
          label: "Community",
          desc: "Discord sanctuary, beta playtests & WhatsApp bot",
          href: "/community",
        },
      ],
      drawerSecondary: [
        { label: "Steam Hub", href: "/community" },
        { label: "Discord Circle", href: "/community" },
        { label: "Soundtrack Vault", href: "/devlog/music-soundscapes" },
        { label: "Terms & Privacy", href: "/terms" },
      ],
      portalBadge: "✦ MEMBER & STUDIO PORTAL",
      portalDesc: "User Login Portal",
      portalAction: "Open Portal",
    },
    hero: {
      tags: ["Visual Novel", "Tactical JRPG", "Original OST"],
      desc: "Experience the interactive prologue of ShirayukinoComp's celestial story RPG & visual novel via WhatsApp Bot before full release on PC/Steam. Choose your narrative path, synthesize forgotten relics, and traverse the Sea of Stars.",
      ctaWhatsapp: "Play Prologue (WhatsApp)",
      ctaLore: "Trailer & Lore",
      currentVersionLabel: "Current Version",
      currentVersionVal: "WhatsApp Bot",
      originalScoreLabel: "Original Score",
      originalScoreVal: "45+ Tracks",
      fullGameTargetLabel: "Full Game Target",
      fullGameTargetVal: "Steam / PC",
    },
    stats: [
      { label: "Story Pathways", value: "Branching" },
      { label: "Character Classes", value: "10 Classes" },
      { label: "Original Score", value: "45+ Tracks" },
      { label: "Campaign Scope", value: "35+ Hours" },
    ],
    ctaBanner: {
      badge: "INTERACTIVE PROLOGUE QUEST AVAILABLE",
      title: "Play the first 3 chapters interactively through our official WhatsApp Bot. Unlock secret redemption codes for exclusive in-game relics at launch!",
      btn: "Start Quest on WhatsApp",
    },
    blog: {
      tag: "Development Archive",
      title: "Production notes & circle devlog",
      viewAll: "View all notes",
      readArticle: "Read Article",
      posts: [
        {
          id: "combat-rpg",
          category: "Combat & RPG Systems",
          title: "Balancing turn-based tactical battles with story exploration",
          description:
            "How our team integrates visual novel dialogue branches with tactical turn order, elemental synthesis, and celestial relic skills.",
        },
        {
          id: "music-soundscapes",
          category: "Music & Soundscapes",
          title: "Composing the score for The Celestial Snow & Elyrith",
          description:
            "Behind the studio composition of 45+ orchestral tracks fusing whimsical fantasy melodies with grand choral climaxes.",
        },
        {
          id: "worldbuilding-art",
          category: "Worldbuilding & Art",
          title: "From concept sketch to canvas: Designing Elyrith",
          description:
            "A deep dive into environment illustration, celestial fantasy atmosphere, and the hidden mechanisms of the sky sanctuary.",
        },
      ],
    },
    why: {
      tag: "Gameplay & World",
      title: "A story JRPG crafted with wonder and tactical depth",
      items: [
        {
          title: "Deep Multi-Route Narrative",
          description:
            "Every dialogue choice echoes through the storyline. Experience branching outcomes, intimate character bonds, and uncover the ancient mysteries of Elyrith and the Celestial Sea.",
        },
        {
          title: "Tactical Party Combat",
          description:
            "Master strategic turn-based battles featuring elemental catalysts, party formation bonuses, and celestial awakening ultimate arts.",
        },
        {
          title: "Relic Synthesis & Sanctuary Forge",
          description:
            "Harvest rare star crystals and untamed flora to forge enchanted gear, brew tactical elixirs, and upgrade your hidden sanctuary.",
        },
        {
          title: "Handcrafted Audio-Visual Harmony",
          description:
            "Immerse yourself in breathtaking hand-painted environments and over 45 studio orchestral compositions performed with live acoustic instruments.",
        },
      ],
    },
    steps: {
      tag: "System Architecture & Player Journey",
      title: "How narrative visual novel flows into tactical JRPG depth",
      steps: [
        {
          number: "01",
          title: "Interactive WhatsApp Prologue",
          description:
            "Step inside the world without hefty downloads. Play the prelude chapters via our intelligent text RPG bot, choose story pathways, and unlock secret relic codes.",
          tag: "Live Now",
          badge: "Instant Access",
          highlights: ["Interactive Bot", "Dialogue Paths", "Reward Codes"],
        },
        {
          number: "02",
          title: "Timeline Initiative Combat",
          description:
            "Manage Action Points (AP), chain elemental catalyst affinities, and disrupt turn orders before devastating enemy abilities strike your party.",
          tag: "Combat Engine",
          badge: "Timeline Tactics",
          highlights: ["AP Resource", "Catalyst Combos", "Boss Stagger"],
        },
        {
          number: "03",
          title: "Sanctuary Haven & Relic Alchemy",
          description:
            "Return to Elyrith between expeditions. Deepen companion bonds, forge sacred gear, and brew battle catalysts that reshape tactical encounters.",
          tag: "Synthesis & Haven",
          badge: "Elyrith Haven",
          highlights: ["Gear Forging", "Relic Alchemy", "Party Bonds"],
        },
        {
          number: "04",
          title: "Full PC / Steam Release",
          description:
            "Carry forward your prologue milestone codes into the complete Steam edition. Experience the full 5-chapter campaign, dual voice acting, and achievement sets.",
          tag: "Target Q4 2026",
          badge: "Steam Deck 60FPS",
          highlights: ["PC Release", "5 Chapters", "Steam Verified"],
        },
      ],
    },
    trust: {
      label: "Engine & Platform Verification",
      features: [
        "Optimized for Steam Deck & Controllers",
        "Native 21:9 Ultrawide Resolution",
        "Full Japanese & English Voice Acting",
        "Dual Language Localization (ID / EN)",
      ],
    },
    caseStudies: {
      tag: "Narrative Scenario Arcs",
      title: "Major story chapters & exploration arcs",
      cases: [
        {
          type: "Chapter I: Prologue",
          problem: "Awakening inside the overgrown ancient sanctuary with fragmented memories.",
          solution: "Master the first celestial catalyst relics and assemble your exploration party.",
          metric: "The Whispering Sanctuary",
        },
        {
          type: "Chapter II: Mid-Game",
          problem: "The creeping twilight mist threatens the celestial floating archipelago.",
          solution: "Delve into subterranean labyrinth vaults, synthesize high-tier gear, and confront guardian shades.",
          metric: "Trial of the Mist",
        },
        {
          type: "Chapter III: Climax",
          problem: "The sovereign guardian's true identity is revealed, requiring pivotal moral choices.",
          solution: "Unlock multiple narrative routes and true endings depending on companion trust levels.",
          metric: "The Sovereign of Starlight",
        },
      ],
    },
    testimonials: {
      tag: "Early Feedback",
      title: "Impressions from the closed playtest",
      list: [
        {
          quote:
            "The combat system has immense tactical depth. Chaining catalyst spells into celestial bursts while listening to the live orchestral score is unforgettable.",
          name: "Kurogane",
          role: "Steam Beta Playtester & Streamer",
          avatar: "/jack.png",
        },
        {
          quote:
            "星海の白雪と蒼穹の聖域 balances cozy sanctuary exploration with high-stakes story revelations. The character banter in the party camp is pure gold.",
          name: "Luna V.",
          role: "Visual Novel & RPG Reviewer",
          avatar: "/sofia.png",
        },
        {
          quote:
            "The interactive WhatsApp prologue format is pure genius. I was immediately immersed in the world from the first story choice without waiting for a massive download!",
          name: "Rian Pratama",
          role: "Indie Game Enthusiast",
          avatar: "/kylie.png",
        },
      ],
    },
    pricing: {
      tag: "CIRCLE SUPPORT PLANS",
      title: "Support the adventure in the Sea of Stars",
      sub: "Starting from Rp 3k/month, support our indie circle and enjoy exclusive rewards.",
      supportDesc:
        "Affordable monthly support via IDR/Card. Get periodic demo builds, full soundtrack releases, and your name in game credits.",
    },
    faq: {
      tag: "Frequently Asked Questions",
      title: "About the Game & Studio",
    },
    finalCta: {
      tag: "BEGIN THE JOURNEY",
      title: "Ready to Traverse the Celestial Sea and Uncover Elyrith?",
      desc: "Play the interactive story via our official WhatsApp Bot now for free, or join our community sanctuary on Discord.",
      btnWhatsapp: "Start Quest on WhatsApp",
      btnDiscord: "Join Discord Sanctuary",
    },
    footer: {
      tagline: "Where celestial wonder meets narrative RPG exploration.",
      projectSub: "星海の白雪と蒼穹の聖域 Project",
      exploreBtn: "Explore Elyrith",
      projectCol: "Project",
      storyLink: "Story & JRPG",
      worldLink: "World",
      patchLink: "Patch Notes",
      communityCol: "Community",
      discordLink: "Discord Circle",
      botLink: "WhatsApp Bot",
      steamLink: "Steam Hub",
      legalCol: "Legal",
      termsLink: "Terms",
      privacyLink: "Privacy",
      copyright: "All rights reserved.",
    },

    // Subpages: Gameplay, Editions, Community, Terms, Privacy
    gameplayPage: {
      backHome: "Home",
      breadcrumbCurrent: "Gameplay Overview",
      badge: "SYSTEMS & MECHANICS",
      title: "Tactical JRPG combat meets branching visual novel",
      desc: "『星海の白雪と蒼穹の聖域』 fuses turn-based combat depth, cozy sanctuary relic crafting, and deep narrative exploration. Experience the opening chapter now on WhatsApp or prepare for the upcoming full Steam release.",
      coreFeaturesTitle: "✦ Core Features",
      pillars: [
        {
          tag: "COMBAT ENGINE",
          title: "Timeline-Driven Tactical Battles",
          description:
            "A strategic turn-based battle system featuring a dynamic initiative timeline. Manage Action Points (AP), stagger enemy defenses by exploiting elemental affinities, and unleash devastating Celestial Relic Bursts with your four-member active party.",
          features: [
            "Dynamic Turn-Order Timeline with queue disruption tactics",
            "Elemental Catalyst chains (Astral, Pyre, Glacial, Zephyr)",
            "Stagger & Break system for massive critical damage windows",
            "Over 40 unique character skills and cinematic group finishers",
          ],
        },
        {
          tag: "STORY & VISUAL NOVEL",
          title: "Branching Scenarios & Multiple Endings",
          description:
            "Experience high-stakes choices that determine the fate of the Sovereign of the Celestial Sea and your comrades. Every decision subtly influences companion trust levels, unlocking divergent story chapters and 4 distinct canonical endings.",
          features: [
            "Over 18 major narrative crossroads affecting entire regions",
            "Hero bond events and intimate sanctuary conversations",
            "Richly illustrated story CGs with cinematic scene transitions",
            "Integrated scenario log allowing replay of unlocked story branches",
          ],
        },
        {
          tag: "RELIC SYNTHESIS",
          title: "The Celestial Forge & Sanctuary of Elyrith",
          description:
            "Beneath the floating islands lies your sanctuary. Gather celestial starlight motes, ancient fossils, and mineral catalysts from expeditions to brew potent combat tonics, forge relic accessories, and customize party gear.",
          features: [
            "Grid-based synthesis grid combining catalyst traits and elemental values",
            "Sanctuary upgrades that unlock advanced potion recipes and passive buffs",
            "Custom relic socketing allowing tailored character builds",
            "Cozy sanctuary soundtrack and ambient character interactions",
          ],
        },
        {
          tag: "WORLD & SKY VOYAGE",
          title: "The Celestial Sea & Sky Whales",
          description:
            "Take to the skies aboard celestial galleons. Navigate above the clouds to discover mythical floating islands, ancient sky temples, and colossal celestial whales that drift peacefully through the starry atmosphere.",
          features: [
            "Expansive world map spanning cloud archipelagos and sunken ruins",
            "Dynamic weather including starry auroras and celestial storms",
            "Hidden dungeon labyrinths harboring ancient relic bosses",
            "Rich environmental storytelling and localized mythologies",
          ],
        },
      ],
      banner: {
        badge: "✦ PLAYABLE ON WHATSAPP TODAY",
        title: "Test the prologue battle decisions right on WhatsApp",
        desc: "Experience the game's branching dialogue engine and unlock early secret items without downloading any client files.",
        action: "Launch Bot Prologue",
      },
    },

    editionsPage: {
      backHome: "Home",
      breadcrumbCurrent: "Version Updates & Patch Notes",
      badge: "OFFICIAL UPDATE LOG",
      title: "Version Updates & Patch Notes",
      desc: "Track the version update history (patch notes & release roadmap) for 『星海の白雪と蒼穹の聖域』 (The Celestial Snow & Elyrith).",
      keyHighlightsTitle: "Key Highlights",
      updates: [
        {
          version: "v1.0.0",
          codename: "Celestial Sea Awakening",
          date: "Target Q4 2026",
          badge: "Upcoming Launch",
          statusColor: "blue",
          description:
            "The official worldwide release on PC / Steam with full narrative campaign, complete 45-track OST, and dual voice tracks.",
          highlights: [
            "All 5 story chapters and 4 divergent canonical endings",
            "Full 45-track orchestral soundtrack vault integration",
            "Steam Achievements, Cloud Saves, and Trading Cards",
            "WhatsApp Bot Prologue save transfer & relic code redemption",
          ],
        },
        {
          version: "v0.9.4",
          codename: "Tactical Stagger & AP Overhaul",
          date: "September 2026",
          badge: "Latest Patch",
          statusColor: "gold",
          description:
            "Major battle system tuning introducing timeline queue disruption and elemental catalyst synergies.",
          highlights: [
            "Dynamic initiative turn timeline with interrupt actions",
            "Elemental Catalyst chains: Astral, Pyre, Glacial, Zephyr",
            "Sanctuary Forge celestial relic recipe expansion (+12 items)",
            "Performance optimization for VFX with silky 60fps frame timing",
          ],
        },
        {
          version: "v0.8.2",
          codename: "Interactive Prologue & Cloud Sync",
          date: "August 2026",
          badge: "Public Milestone",
          statusColor: "emerald",
          description:
            "Deployment of the WhatsApp Bot prelude quest, enabling players to play prologue decisions on mobile.",
          highlights: [
            "Interactive story decision engine over WhatsApp Business Webhooks",
            "Cloud state persistence with unique player phone identifier",
            "Companion trust system debut with dynamic dialogue reactions",
            "Early-bird exclusive 'Starlight Sovereign Brooch' item code generation",
          ],
        },
        {
          version: "v0.7.0",
          codename: "Elyrith Haven & Celestial Prototype",
          date: "July 2026",
          badge: "Alpha Demo",
          statusColor: "gray",
          description:
            "Initial sandbox build introducing the celestial sanctuary haven, dialogue backlog, and relic synthesis.",
          highlights: [
            "Grid-based synthesis catalyst placement engine",
            "Atmospheric sanctuary interior rendering with dynamic lighting",
            "Original background music drafts by ShirayukinoComp sound circle",
          ],
        },
      ],
      banner: {
        badge: "PLAYABLE PROLOGUE AVAILABLE",
        title: "Want to experience build v0.8.2 right on your phone?",
        desc: "Launch our official WhatsApp Bot to begin the prologue quest and secure exclusive item reward codes before the full Steam launch.",
        action: "Launch on WhatsApp",
      },
    },

    communityPage: {
      backHome: "Home",
      breadcrumbCurrent: "Community Sanctuary",
      badge: "OFFICIAL COMMUNITY SANCTUARY",
      title: "Connect with fellow adventurers",
      desc: "Step inside the Elyrith community sanctuary. Join our active community to discuss visual novel lore, test early turn-based combat builds, claim WhatsApp bot secret item codes, and vote on upcoming development directions.",
      keyFeaturesTitle: "✦ Channel Features",
      channels: [
        {
          id: "discord",
          title: "Official Discord Sanctuary",
          category: "Real-time Hub & Dev AMA",
          badge: "Most Active",
          description:
            "Our main guild hall for visual novel lore theories, battle strategy breakdowns, live dev AMAs, voice playtest streams, and circle announcements.",
          highlights: [
            "Direct discussions with scenario writers and composer",
            "Exclusive Closed Beta playtest roles",
            "Dedicated lore spoilers & theorycrafting rooms",
            "Fan art showcase and soundtrack listening parties",
          ],
          actionLabel: "Join Discord Server",
          actionUrl: "https://discord.gg",
          featured: true,
        },
        {
          id: "whatsapp",
          title: "WhatsApp Adventurer Guild",
          category: "Mobile Bot & Prologue Quests",
          badge: "Live Now",
          description:
            "Stay connected on mobile. Receive interactive prologue quest drops, puzzle hints, patch alerts, and secret redemption codes directly on WhatsApp.",
          highlights: [
            "Instant interactive story choices via WhatsApp Bot",
            "Secret early-bird item code drops for Steam launch",
            "Daily hideout dialogue fragments & character lore",
            "Direct feedback line for prologue playtesters",
          ],
          actionLabel: "Enter WhatsApp Guild",
          actionUrl: "#",
          featured: false,
        },
        {
          id: "steam",
          title: "Steam Community & Discussions",
          category: "PC Hub & Playtests",
          badge: "Coming Soon",
          description:
            "The official Steam store page and community discussions are currently in preparation for the PC release. Play the interactive prologue now on WhatsApp while Steam hub verification is underway.",
          highlights: [
            "Steam store page & community hub in final preparation",
            "Hardware benchmark and Steam Deck compatibility threads",
            "Community gameplay guides and boss fight strategies",
            "Steam community badges and trading card previews",
          ],
          actionLabel: "Coming Soon",
          actionUrl: "#",
          isComingSoon: true,
          featured: false,
        },
        {
          id: "sanctuary-forge",
          title: "Creative Sanctuary & Fan Circle",
          category: "Art, Fiction & OST",
          badge: "Spotlight",
          description:
            "A dedicated showcase celebrating fan artists, musicians, cosplay creators, and translation contributors from across the globe.",
          highlights: [
            "Monthly featured fan art gallery in devlog articles",
            "High-resolution official character reference sheets",
            "OST remix and arrangement permission guidelines",
            "Community recognition rewards & physical merch drops",
          ],
          actionLabel: "Submit Fan Creation",
          actionUrl: "mailto:contact@shirayukinocomp.com",
          featured: false,
        },
      ],
      milestonesTitle: "✦ Community Milestones & Global Rewards",
      milestones: [
        {
          tier: "Tier 1",
          goal: "1,000 Prologue Finishers",
          status: "Achieved",
          reward: "Exclusive 4K digital artwork of all sanctuary guardians",
        },
        {
          tier: "Tier 2",
          goal: "5,000 Discord Adventurers",
          status: "In Progress (68%)",
          reward: "Release of 3 unreleased acoustic preview soundtrack tracks",
        },
        {
          tier: "Tier 3",
          goal: "10,000 Steam Wishlists",
          status: "Launch Target",
          reward: "Free festival celestial cosmetic DLC pack for all early players",
        },
      ],
      banner: {
        badge: "COMMUNITY VOICE",
        title: "Help Shape the Future of the Celestial Sea",
        desc: "Every suggestion from prologue players and beta playtesters is directly reviewed by our core development team.",
        action: "Share Feedback on Discord",
      },
    },

    devlogPage: {
      backHome: "Home",
      title: "Studio Devlogs & Chronicles",
      badge: "DEV ARCHIVE & UPDATES",
      desc: "Production logs, behind-the-scenes scenario insights, orchestral recording logs, and patch notes from the ShirayukinoComp team.",
      searchPlaceholder: "Search articles, topics, or patch notes...",
      readArticle: "Read Full Devlog",
    },

    termsPage: {
      backHome: "Home",
      breadcrumbCurrent: "Terms of Use",
      badge: "LEGAL & COMMUNITY GUIDELINES",
      title: "Terms of Use & Fan Creation Guidelines",
      desc: "Official terms governing the website, prologue bot, game assets, and fan creation guidelines for ShirayukinoComp.",
      lastUpdated: "Last updated: September 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing the ShirayukinoComp website, playing our interactive WhatsApp Bot prologue, downloading demo builds, or purchasing upcoming game editions of 『星海の白雪と蒼穹の聖域』 (The Celestial Snow & Elyrith), you agree to be bound by these Terms of Use and all applicable laws and regulations.",
        },
        {
          title: "2. Software & Game License",
          content:
            "ShirayukinoComp grants you a personal, non-exclusive, non-transferable, revocable license to play, stream, and enjoy the software and interactive bot for non-commercial personal entertainment purposes. You may not decompile, reverse engineer, or redistribute internal game assets without explicit written authorization.",
        },
        {
          title: "3. Fan Creations & Community Content Guidelines",
          content:
            "We enthusiastically encourage community creativity! You are welcome to create fan illustrations, write fan fiction, cosplay, and stream gameplay (including standard Twitch/YouTube monetization). Please credit: '星海の白雪と蒼穹の聖域 © ShirayukinoComp'. Mass-market commercial physical merchandise sales without permission remain strictly prohibited.",
        },
        {
          title: "4. Copyright & Intellectual Property",
          content:
            "All titles, character illustrations, original scores, logos, and narrative texts are the exclusive intellectual property of the ShirayukinoComp Creative Circle. Unauthorized redistribution is prohibited by applicable copyright laws.",
        },
        {
          title: "5. Limitation of Liability",
          content:
            "The game, website, and interactive prologue bot are provided 'as is'. ShirayukinoComp is not liable for third-party platform service interruptions (such as WhatsApp API outages) beyond our reasonable control.",
        },
      ],
    },

    privacyPage: {
      backHome: "Home",
      breadcrumbCurrent: "Privacy Policy",
      badge: "DATA SECURITY & PRIVACY",
      title: "Privacy Policy",
      desc: "How ShirayukinoComp protects and manages user information across our WhatsApp bot and website.",
      lastUpdated: "Last updated: September 2026",
      sections: [
        {
          title: "1. Information We Collect",
          content:
            "When you browse our website, we only store client-side theme and language preferences in your browser's local cookies / localStorage. When playing our interactive WhatsApp bot, your phone number is used exclusively as a unique progress identifier and redemption code verification anchor.",
        },
        {
          title: "2. How We Use Data",
          content:
            "Game progression data is used solely to maintain your story state, track dialogue flags, and verify exclusive relic claim codes. We NEVER sell, rent, or share your contact information with third-party advertisers.",
        },
        {
          title: "3. Security & Storage",
          content:
            "Session states are stored on encrypted database clusters with industry-standard access controls. You may request full deletion of your bot progress history at any time by contacting our community team.",
        },
        {
          title: "4. Contact Us",
          content:
            "If you have questions regarding privacy or data handling, please reach out via email at contact@shirayukinocomp.com or connect through our official Discord server.",
        },
      ],
    },

    creditsPage: {
      backHome: "Home",
      breadcrumbCurrent: "Staff & Credits",
      badge: "PRODUCTION CREDITS & CIRCLE TEAM",
      title: "Production Credits & Creative Team",
      desc: "Official credits for the Shirayukino Software / Comp core team, Yurizaki ecosystem developers, and heartfelt acknowledgments to our community.",
      coreTeamTitle: "Core Team & Circle Founders",
      coreTeamDesc: "The creators behind the game system architecture, narrative scenario, interactive bot systems, and playtest balance.",
      coreMembers: [
        {
          name: "Piahn",
          role: "Lead Developer",
          subRole: "Founder Shirayukino Software",
          desc: "Lead architect for system design, web engine, and the conceptual universe of 『星海の白雪と蒼穹の聖域』.",
          badge: "Founder",
        },
        {
          name: "Rialya",
          role: "Community Manager",
          subRole: "Owner Yurizaki • Co-Founder",
          desc: "Community director and owner of the Yurizaki ecosystem, overseeing guild interactions, communications, and circle operations.",
          badge: "Co-Founder",
        },
        {
          name: "Kafka",
          role: "Core Developer & Tester",
          subRole: "Battle Mechanics & Systems",
          desc: "Developing core feature logic, performance stability testing, and battle mechanics synchronization across the bot ecosystem.",
          badge: "Core Dev",
        },
        {
          name: "Darren",
          role: "QA & Story Reviewer",
          subRole: "Playtest Evaluation & Balancing",
          desc: "Quality assurance lead for narrative flow, JRPG combat balance evaluation, and player experience curation.",
          badge: "Lead QA",
        },
      ],
      inspirationTitle: "Source of Inspiration",
      inspirationContent:
        "The gameplay features and narrative arcs within the Shirayukino universe and Yurizaki bot are inspired directly by the creativity and enthusiasm of our community members. Your feedback and engagement remain our greatest inspiration.",
      bigThanksTitle: "Special Thanks",
      bigThanksContent:
        "Our deepest gratitude goes to all Circle staff, beta playtesters, and devoted Yurizaki users who continually support our journey. You are the heartbeat behind everything we build.",
      closingQuote: "Thank you for being part of the Shirayukino & Yurizaki journey!",
      banner: {
        badge: "COMMUNITY & CIRCLE",
        title: "Join Us in the Sanctuary",
        desc: "Explore story discussions, participate in upcoming playtests, or interact directly via Discord and the Yurizaki Bot.",
        actionDiscord: "Open Discord Server",
        actionBot: "Launch Yurizaki Bot",
      },
    },
  },
};
