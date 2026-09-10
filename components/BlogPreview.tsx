import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const posts = [
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
    title: "Composing the score for Queen of Ever Darkness",
    description:
      "Behind the studio composition of 45+ orchestral tracks fusing whimsical fantasy melodies with grand choral climaxes.",
  },
  {
    id: "worldbuilding-art",
    category: "Worldbuilding & Art",
    title: "From concept sketch to canvas: Designing the Secret Hideout",
    description:
      "A deep dive into environment illustration, cozy atelier atmosphere, and the hidden mechanisms of the underground sanctuary.",
  },
];

export function BlogPreview() {
  return (
    <section id="devlog" data-section="devlog" className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                Development Archives
              </p>
              <h2 className="mt-2 text-[2rem] sm:text-[2.5rem] leading-[1.02] tracking-[-0.04em] text-black dark:text-white transition-colors">
                Production notes & circle devlogs
              </h2>
            </div>
            <Link
              href="/devlog"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#142d55] dark:text-[#E5BA68] transition hover:text-black dark:hover:text-white font-mono"
            >
              <span>View all notes</span>
              <HiArrowUpRight size={13} />
            </Link>
          </div>

          {/* Featured 3 Articles */}
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={`/devlog/${post.id}`}
                className="group flex min-h-[300px] flex-col justify-between rounded-[21px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-7 transition-all duration-300 hover:border-[#142d55]/50 dark:hover:border-[#E5BA68]/50 hover:shadow-md dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#142d55] dark:text-[#E5BA68] font-semibold transition-colors">
                    ✦ {post.category}
                  </p>
                  <h3 className="mt-4 text-[22px] sm:text-[24px] leading-[1.1] tracking-[-0.03em] text-black dark:text-white group-hover:text-[#142d55] dark:group-hover:text-[#E5BA68] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3.5 text-[14px] leading-[1.6] text-[#4f4a44] dark:text-[#a0aec0] transition-colors">
                    {post.description}
                  </p>
                </div>
                <div className="mt-8 border-t border-[#ddd7d0] dark:border-[#1a2840] pt-4 transition-colors flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#142d55] dark:text-[#E5BA68] transition group-hover:translate-x-1 font-mono">
                    Read article
                    <HiArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile View All Notes Button */}
          <div className="mt-6 sm:hidden text-center">
            <Link
              href="/devlog"
              className="w-full py-3.5 px-6 rounded-full border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] text-xs font-mono font-semibold uppercase tracking-wider text-[#142d55] dark:text-[#E5BA68] hover:bg-gray-100 dark:hover:bg-[#121e33] transition-colors flex items-center justify-center gap-2"
            >
              <span>View all notes (5 articles)</span>
              <HiArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
