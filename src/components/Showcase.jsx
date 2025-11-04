import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Epic Battles',
    desc: 'Fight through challenging enemies using martial arts and shadow powers.',
    media: 'https://i.ytimg.com/vi/0vCRzN3Hq6M/maxresdefault.jpg',
  },
  {
    title: 'Customizable Weapons',
    desc: 'Unlock swords, nunchucks, armor, and magical skills.',
    media: 'https://i.ytimg.com/vi/ZkYtGZ4Aky0/maxresdefault.jpg',
  },
  {
    title: 'Journey Through Realms',
    desc: 'Explore stunning locations and defeat powerful bosses.',
    media: 'https://i.ytimg.com/vi/4X2n2Iok3VY/maxresdefault.jpg',
  },
];

const characters = [
  { name: 'Shadow', img: 'https://static.wikia.nocookie.net/shadowfight2/images/6/6a/Shadow_MK.png', info: 'The fallen warrior mastering the void.' },
  { name: 'Titan', img: 'https://static.wikia.nocookie.net/shadowfight2/images/5/5b/Titan.png', info: 'The conqueror beyond realms.' },
  { name: 'Lynx', img: 'https://static.wikia.nocookie.net/shadowfight2/images/0/0c/Lynx.png', info: 'Leader of the assassins, swift and lethal.' },
  { name: 'Hermit', img: 'https://static.wikia.nocookie.net/shadowfight2/images/3/3c/Hermit.png', info: 'Mystic master of the elements.' },
  { name: 'Butcher', img: 'https://static.wikia.nocookie.net/shadowfight2/images/3/34/Butcher.png', info: 'Merciless brute with crushing blows.' },
  { name: 'Widow', img: 'https://static.wikia.nocookie.net/shadowfight2/images/4/4c/Widow.png', info: 'Enchanting yet deadly duelist.' },
];

export default function Showcase() {
  return (
    <section id="gameplay" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Gameplay Features */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Master the art of combat
          </h3>
          <p className="mt-3 text-gray-400">Timing, precision, and gear define every duel.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-zinc-900/60 to-black/60 p-4 backdrop-blur"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <img src={f.media} alt={f.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <h4 className="mt-4 text-xl font-bold text-white">{f.title}</h4>
              <p className="mt-1 text-sm text-gray-300">{f.desc}</p>
            </motion.article>
          ))}
        </div>

        {/* Characters */}
        <div id="characters" className="mt-20">
          <div className="mb-8 text-center">
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Champions and foes</h3>
            <p className="mt-3 text-gray-400">Hover to reveal their legends.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {characters.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50"
              >
                <img src={c.img} alt={c.name} loading="lazy" className="h-64 w-full object-contain mix-blend-lighten transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-center backdrop-blur">
                    <h5 className="font-semibold text-white">{c.name}</h5>
                    <p className="mt-1 text-xs text-gray-300">{c.info}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
