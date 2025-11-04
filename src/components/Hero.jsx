import React from 'react';
import Spline from '@splinetool/react-spline';

const StoreButtons = () => (
  <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
    <a
      href="https://play.google.com/store/apps/details?id=com.nekki.shadowfight" 
      target="_blank" 
      rel="noreferrer"
      className="group inline-flex items-center gap-3 rounded-xl border border-red-500/30 bg-black/40 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,60,60,0.15)] ring-1 ring-red-500/30 backdrop-blur hover:bg-red-500/10 hover:shadow-[0_0_45px_rgba(255,60,60,0.35)] transition"
      aria-label="Get it on Google Play"
    >
      <svg aria-hidden="true" viewBox="0 0 512 512" className="h-5 w-5 text-green-400"><path fill="currentColor" d="M325.3 234.3 104.5 13.5c-11-11-29.5-3.3-29.5 12.4v460.2c0 15.7 18.5 23.4 29.5 12.4l220.8-220.8c6.9-6.9 6.9-18 0-24.9zM357.7 201.9l73.7-73.7c14.1-14.1 38.3-4.1 38.3 15.8v224c0 19.9-24.2 29.9-38.3 15.8l-73.7-73.7-40.3 40.3-33.9-33.9 40.3-40.3-40.3-40.3 33.9-33.9 40.3 40.3z"/></svg>
      <span>Google Play</span>
    </a>
    <a
      href="https://apps.apple.com/us/app/shadow-fight-2/id696565994"
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-black/40 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/30 backdrop-blur hover:bg-cyan-400/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)] transition"
      aria-label="Download on the App Store"
    >
      <svg aria-hidden="true" viewBox="0 0 384 512" className="h-5 w-5 text-cyan-400"><path fill="currentColor" d="M318.7 268.7c-.2-36.6 16.3-64.3 49.6-84.5-18.7-27-46.9-42-84.5-44.7-35.4-2.6-74.2 20.7-88.1 20.7-14.2 0-50.1-19.9-77.6-19.9-56.1 0-116.1 41.1-116.1 123.5 0 27.9 5.1 56.6 15.4 86 13.7 38.6 63.2 133.4 114.7 131.7 27.1-.7 46.3-19.3 81.7-19.3 34.9 0 53.2 19.3 81.7 19.3 51.8-.8 97.8-84.5 111.5-123.1-70.3-33.1-88.3-98.3-88.3-109.7zM259.1 79.6C284.3 50.1 278 20 277.2 16c-25.9 1-56.1 17.3-73.8 37-16.2 18.1-28.7 43.2-25.1 69.1 27.8 2.1 56.2-14.1 80.8-42.5z"/></svg>
      <span>App Store</span>
    </a>
  </div>
);

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vignette and particle glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_220px_80px_rgba(0,0,0,0.85)]" />

      {/* Embers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-orange-400/70 blur-[1px]"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `floatY ${8 + (i % 6)}s linear ${i * 0.4}s infinite`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-start px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,60,60,0.35)]">
              Shadow Fight 2
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300/90">
            Step into the shadows. Fight your destiny.
          </p>

          <StoreButtons />

          <p className="mt-4 text-xs text-gray-400/80">Fan website — not affiliated with Nekki.</p>
        </div>
      </div>

      <style>{`
        @keyframes floatY { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-40px) scale(1.15);} 100% { transform: translateY(0) scale(1);} }
      `}</style>
    </section>
  );
}
