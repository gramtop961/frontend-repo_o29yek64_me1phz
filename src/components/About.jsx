import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const silhouettes = [
  {
    name: 'Shadow',
    img: 'https://static.wikia.nocookie.net/shadowfight2/images/6/6a/Shadow_MK.png',
  },
  {
    name: 'Lynx',
    img: 'https://static.wikia.nocookie.net/shadowfight2/images/0/0c/Lynx.png',
  },
  {
    name: 'Hermit',
    img: 'https://static.wikia.nocookie.net/shadowfight2/images/3/3c/Hermit.png',
  },
  {
    name: 'Titan',
    img: 'https://static.wikia.nocookie.net/shadowfight2/images/5/5b/Titan.png',
  },
];

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black via-[#09090b] to-black text-gray-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div style={{ y }} className="space-y-5">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,60,60,0.25)]">
              A warrior forged by shadows
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Once a celebrated warrior, Shadow opened the Gates of Shadows in a desperate search for power, releasing a legion of formidable demons. His body consumed by darkness, he wanders realms between light and void — mastering martial arts, enchanted weapons, and the very essence of shadow itself. Your journey is a duel against destiny across haunted temples, frozen docks, and the Titan’s domain.
            </p>
            <p className="text-gray-400">
              Train, adapt, and strike with precision. Only then will the gates close — or open wider.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {silhouettes.map((s, i) => (
              <motion.figure
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-2"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="h-44 w-full object-contain mix-blend-lighten"
                />
                <figcaption className="mt-2 text-center text-sm text-gray-300">{s.name}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
