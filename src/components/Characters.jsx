import React from 'react';
import { motion } from 'framer-motion';

const roster = [
  {
    name: 'Shadow',
    role: 'The fallen hero mastering the void.',
    img: 'https://static.wikia.nocookie.net/shadowfight2/images/6/6a/Shadow_MK.png',
  },
  {
    name: 'Titan',
    role: 'Ruler of the Shadow World.',
    img: 'https://static.wikia.nocookie.net/shadowfight2/images/5/5b/Titan.png',
  },
  {
    name: 'Lynx',
    role: 'Leader of The Order, swift and deadly.',
    img: 'https://static.wikia.nocookie.net/shadowfight2/images/0/0c/Lynx.png',
  },
  {
    name: 'Hermit',
    role: 'Master of magic and control.',
    img: 'https://static.wikia.nocookie.net/shadowfight2/images/3/3c/Hermit.png',
  },
  {
    name: 'Butcher',
    role: 'Brutality with serrated steel.',
    img: 'https://static.wikia.nocookie.net/shadowfight2/images/9/97/Butcher.png',
  },
  {
    name: 'Widow',
    role: 'Elegant, venomous, relentless.',
    img: 'https://static.wikia.nocookie.net/shadowfight2/images/8/82/Widow.png',
  },
];

export default function Characters() {
  return (
    <section id="characters" className="relative bg-black py-20 text-gray-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Characters</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roster.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 3) * 0.1 + Math.floor(i / 3) * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-contain mix-blend-lighten transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-0 flex translate-y-10 flex-col items-center justify-end bg-gradient-to-t from-black/80 to-transparent p-5 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white">{c.name}</h3>
                <p className="mt-1 text-sm text-gray-300">{c.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
