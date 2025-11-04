import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Epic Battles',
    desc: 'Fight through challenging enemies using martial arts and shadow powers.',
    img: 'https://images.unsplash.com/photo-1520975922284-9bcd8b4a0d83?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Customizable Weapons',
    desc: 'Unlock swords, nunchucks, armor, and magical skills.',
    img: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Journey Through Realms',
    desc: 'Explore stunning locations and defeat powerful bosses.',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Gameplay() {
  return (
    <section id="gameplay" className="relative bg-[#0a0a0a] py-20 text-gray-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,100,100,0.07),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Gameplay</h2>
          <p className="text-sm text-gray-400">Fast, fluid, and cinematic combat.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white drop-shadow-[0_0_12px_rgba(255,60,60,0.25)]">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{f.desc}</p>
              </div>
              <div className="absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(239,68,68,0.6), transparent 40%)' }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
