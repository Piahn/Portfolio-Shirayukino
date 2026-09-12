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

export const DEVLOG_ARTICLES: DevlogArticle[] = [
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
            "Each choice sent in chat branches into distinct story dialogues, testing player instincts and revealing early clues about the Azure Sanctuary.",
          ],
          callout:
            "✦ Early Bird Benefit: Players who complete the WhatsApp Prologue receive a secret redemption code to claim an exclusive Celestial Relic when the full game launches on Steam!",
        },
        {
          heading: "2. Choice Dynamics & Character Affinity",
          paragraphs: [
            "The bot features interactive dialogue prompts where players can choose response styles (e.g., Tactical, Empathetic, or Investigative). Responses subtly alter your affinity score with key companions who reside in the azure sanctuary.",
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
          heading: "1. The Catalyst Action Point (AP) System",
          paragraphs: [
            "Rather than simple attack-defend turns, our battle engine utilizes a shared pool of Catalyst AP. Every movement, elemental stance switch, and item usage draws from this energy.",
            "Players must decide whether to consume AP immediately for aggressive chain attacks or bank it to unleash party-wide Celestial Burst Arts during enemy stagger states.",
          ],
          bulletPoints: [
            "Dynamic turn timeline with enemy intention indicators",
            "Elemental resonance chains that reward tactical team composition",
            "Synthesized combat elixirs brewed back at the azure sanctuary",
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
    title: "Composing the score for The Celestial Snow & the Azure Sanctuary",
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
    title: "From concept sketch to canvas: Designing the Azure Sanctuary",
    date: "Jul 2026",
    readTime: "6 min read",
    author: "Art Director",
    summary:
      "A deep dive into environment illustration, celestial fantasy atmosphere, and the hidden mechanisms of the sky sanctuary.",
    content: {
      lead:
        "Every adventure needs a place to call home. For our protagonists, the 'Azure Sanctuary' (蒼穹の聖域) is both a haven of celestial science and a sanctuary sheltered above the celestial sea.",
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
