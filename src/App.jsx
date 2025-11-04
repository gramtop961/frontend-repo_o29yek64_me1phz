import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gameplay from './components/Gameplay';
import Characters from './components/Characters';
import { Youtube, Facebook, Instagram, Gamepad2, Mail } from 'lucide-react';

function StoreButtonsInline() {
  return (
    <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
      <a
        href="https://play.google.com/store/apps/details?id=com.nekki.shadowfight"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-3 rounded-xl border border-red-500/30 bg-black/40 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,60,60,0.15)] ring-1 ring-red-500/30 backdrop-blur hover:bg-red-500/10 hover:shadow-[0_0_45px_rgba(255,60,60,0.35)] transition"
      >
        <Gamepad2 className="h-5 w-5 text-green-400" />
        <span>Google Play</span>
      </a>
      <a
        href="https://apps.apple.com/us/app/shadow-fight-2/id696565994"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-black/40 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/30 backdrop-blur hover:bg-cyan-400/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)] transition"
      >
        <Gamepad2 className="h-5 w-5 text-cyan-400" />
        <span>App Store</span>
      </a>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.title = 'Shadow Fight 2 — Fan Site';
    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', 'Shadow Fight 2 fan website: story, gameplay, characters, downloads, and community. Step into the shadows and fight your destiny.');
    document.head.appendChild(metaDesc);

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'Shadow Fight 2, shadow fight, Nekki, fighting game, RPG action, mobile game, Titan, Lynx, Hermit');
    document.head.appendChild(metaKeywords);
  }, []);

  const news = [
    { title: 'New Event: Gates of Shadows Reopen', date: 'Oct 2025', body: 'Face elite enemies and earn unique rewards in a limited-time challenge.' },
    { title: 'Weapon Spotlight: Twin Nunchucks', date: 'Sep 2025', body: 'Master speed and precision with advanced combos and shadow abilities.' },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-red-600/40 selection:text-white">
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Gameplay */}
      <Gameplay />

      {/* Characters */}
      <Characters />

      {/* Download Section */}
      <section id="download" className="relative bg-gradient-to-b from-black via-[#0b0b0b] to-black py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Join millions of fighters worldwide.</h2>
              <p className="mt-4 max-w-xl text-gray-300">Download Shadow Fight 2 and begin your journey across realms. Equip legendary weapons, learn powerful techniques, and conquer terrifying bosses.</p>
              <StoreButtonsInline />
            </div>
            <div className="rounded-2xl border border-white/5 bg-black/40 p-6 backdrop-blur">
              <h3 className="text-lg font-bold">Subscribe for updates</h3>
              <p className="mt-1 text-sm text-gray-400">Get the latest events, gear drops, and tips in your inbox.</p>
              <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-red-500 focus:outline-none" />
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,60,60,0.25)] transition hover:brightness-110">
                  <Mail className="h-4 w-4" /> Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-gray-500">By subscribing you agree to receive emails. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative bg-[#0a0a0a] py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Community</h2>
              <p className="mt-2 max-w-xl text-gray-300">Connect with fighters worldwide, share combos, and watch highlights.</p>
            </div>
            <div className="flex gap-3">
              <a className="rounded-full border border-white/10 bg-black/50 p-3 text-white hover:bg-white/10" href="https://www.youtube.com/@Nekki" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube className="h-5 w-5 text-red-500" /></a>
              <a className="rounded-full border border-white/10 bg-black/50 p-3 text-white hover:bg-white/10" href="https://www.facebook.com/ShadowFightGame" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="h-5 w-5 text-blue-500" /></a>
              <a className="rounded-full border border-white/10 bg-black/50 p-3 text-white hover:bg-white/10" href="https://www.instagram.com/nekki.games/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5 text-pink-400" /></a>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/Q4pK3mKMJtQ?rel=0&modestbranding=1"
                  title="Shadow Fight 2 Trailer"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-bold">News & Updates</h3>
              <ul className="mt-4 space-y-4">
                {news.map((n) => (
                  <li key={n.title} className="rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-4">
                    <p className="text-xs text-gray-400">{n.date}</p>
                    <p className="mt-1 font-semibold text-white">{n.title}</p>
                    <p className="text-sm text-gray-300">{n.body}</p>
                  </li>
                ))}
              </ul>
              <a href="#download" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,60,60,0.25)] transition hover:brightness-110">Join the Clan</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/90 py-10 text-gray-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm">© {new Date().getFullYear()} Shadow Fight 2 Fan Site • Credits to Nekki</p>
            <nav className="flex flex-wrap items-center gap-4 text-sm">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#community" className="hover:text-white">Community</a>
              <span className="text-xs text-gray-500">Fan website — not affiliated with Nekki</span>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
