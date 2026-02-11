export default function Home() {
  return (
    <div className="noise-overlay gradient-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />
        {/* Corner accents */}
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-500/[0.05] blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-indigo-500/[0.05] blur-3xl" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center gap-8 text-center">
        {/* Aperture icon */}
        <div className="animate-shutter">
          <div className="aperture-ring flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
              <line x1="9.69" y1="8" x2="21.17" y2="8" />
              <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
              <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
              <line x1="14.31" y1="16" x2="2.83" y2="16" />
              <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
            </svg>
          </div>
        </div>

        {/* Brand name */}
        <div className="animate-fade-in-up">
          <h1 className="font-sans text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Dynamic
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Shots
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="animate-fade-in-up-delay-1 max-w-md font-sans text-lg text-zinc-400 sm:text-xl">
          Capturing life in motion
        </p>

        {/* Divider */}
        <div className="animate-fade-in-up-delay-2 flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-zinc-600" />
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse-glow" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-zinc-600" />
        </div>

        {/* Under development message */}
        <div className="animate-fade-in-up-delay-3 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-5 py-2.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            <span className="font-mono text-sm text-zinc-300">
              Website Under Development
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
            We&apos;re crafting something extraordinary. Our new photography
            portfolio is being developed and will be live soon.
          </p>
        </div>

        {/* Contact hint */}
        <div className="animate-fade-in-up-delay-4 mt-4">
          <a
            href="mailto:hello@dynamicshots.in"
            className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-y-0.5"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            hello@dynamicshots.in
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 z-10 text-center">
        <p className="font-mono text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} DynamicShots. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
