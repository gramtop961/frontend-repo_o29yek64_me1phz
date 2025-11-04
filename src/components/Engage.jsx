import React, { useState } from 'react';
import { motion } from 'framer-motion';

const news = [
  {
    title: 'Update: New Weapon Enchantments',
    date: '2025-08-05',
    excerpt: 'Harness blazing runes and ethereal frost with the latest enchantments to your arsenal.',
  },
  {
    title: 'Community Tournament — Sign Up',
    date: '2025-06-21',
    excerpt: 'Compete with fighters worldwide. Prizes, glory, and exclusive titles await.',
  },
  {
    title: 'Boss Spotlight: Titan',
    date: '2025-05-11',
    excerpt: 'Dive into Titan’s history and learn strategies to withstand his dominion.',
  },
];

export default function Engage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="download" className="relative w-full bg-gradient-to-b from-black to-[#0b0b0d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Download */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Join millions of fighters worldwide</h3>
            <p className="mt-3 max-w-prose text-gray-300">Sharpen your skills, collect legendary gear, and conquer the arenas. Available free on mobile.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.nekki.shadowfight"
                target="_blank" rel="noreferrer"
                className="rounded-xl border border-red-500/30 bg-black/40 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,60,60,0.15)] ring-1 ring-red-500/30 backdrop-blur hover:bg-red-500/10 hover:shadow-[0_0_45px_rgba(255,60,60,0.35)] transition"
              >Google Play</a>
              <a
                href="https://apps.apple.com/us/app/shadow-fight-2/id696565994"
                target="_blank" rel="noreferrer"
                className="rounded-xl border border-cyan-400/30 bg-black/40 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/30 backdrop-blur hover:bg-cyan-400/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)] transition"
              >App Store</a>
            </div>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur"
          >
            <h4 className="text-xl font-bold">Subscribe for updates</h4>
            <p className="mt-1 text-sm text-gray-300">Get the latest news, guides, and events straight to your inbox.</p>
            {submitted ? (
              <p className="mt-4 rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-3 text-emerald-300">Welcome to the clan! You are subscribed.</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none ring-0 focus:border-cyan-400/40 focus:bg-black/60"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-red-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(255,60,60,0.25)] transition hover:brightness-110"
                >Join the Clan</button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Community */}
        <div id="community" className="mt-20 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-2xl font-bold">Community Highlights</h4>
              <a href="https://www.youtube.com/@NEKKI" target="_blank" rel="noreferrer" className="text-sm text-cyan-300 hover:underline">More on YouTube</a>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/6uX7YbVxk-c?rel=0&autoplay=0&mute=1&controls=1"
                title="Shadow Fight 2 Trailer"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
              <h5 className="text-lg font-semibold">Social</h5>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li><a className="hover:text-white" href="https://www.facebook.com/ShadowFight2" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><a className="hover:text-white" href="https://www.instagram.com/nekki_com/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a className="hover:text-white" href="https://www.youtube.com/@NEKKI" target="_blank" rel="noreferrer">YouTube</a></li>
                <li><a className="hover:text-white" href="https://discord.com/invite/nekki" target="_blank" rel="noreferrer">Discord</a></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
              <h5 className="text-lg font-semibold">News</h5>
              <ul className="mt-3 space-y-3">
                {news.map((n) => (
                  <li key={n.title} className="group">
                    <p className="text-xs text-gray-400">{n.date}</p>
                    <p className="font-medium text-white">{n.title}</p>
                    <p className="text-sm text-gray-300">{n.excerpt}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-gray-400">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Shadow Fight 2 Fan Site · Credits to Nekki</p>
            <nav className="flex flex-wrap gap-4">
              <a href="#privacy" className="hover:text-white">Privacy Policy</a>
              <a href="#terms" className="hover:text-white">Terms</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
          <p className="mt-3 text-xs">Fan website — not affiliated with or endorsed by Nekki.</p>
        </footer>
      </div>
    </section>
  );
}
