import Image from "next/image";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/dynamicshotsIN",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@dynamicshotsIN",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/dynamicshotsIN",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/dynamicshotsin",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Threads",
    href: "https://threads.net/@dynamicshotsin",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 7.5c-1.333-3-3.833-4.5-7-4.5-4 0-7 2.5-7 7s3 7 7 7c3.167 0 5.667-1.5 7-4.5" />
        <path d="M12 10c2.21 0 4 .9 4 3s-1.79 3-4 3-4-.9-4-3 1.79-3 4-3z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/dynamicshotsIN",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.808-2.425.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.282a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/dynamicshotsin",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Snapchat",
    href: "https://snapchat.com/add/dynamicshotsin?share_id=OkJp_8h-qjM&locale=en-GB",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-2.5 0-4.5 1.5-5 4l-.5 3c-.1.5-.5.8-1 .8H5c-.5 0-1 .3-1 .8s.5.8 1 .8h.5c.5 0 .8.3.7.8-.3 1.5-1.2 2.7-2.7 3.5-.3.2-.5.5-.5.8 0 .5.5.8 1 .8.7 0 1.5-.2 2-.3.3-.1.7 0 .8.3.3.5.7 1.2 1.7 1.2.8 0 1.3-.3 2-.8.5-.3 1-.5 1.5-.5s1 .2 1.5.5c.7.5 1.2.8 2 .8 1 0 1.4-.7 1.7-1.2.1-.3.5-.4.8-.3.5.1 1.3.3 2 .3.5 0 1-.3 1-.8 0-.3-.2-.6-.5-.8-1.5-.8-2.4-2-2.7-3.5-.1-.5.2-.8.7-.8H19c.5 0 1-.3 1-.8s-.5-.8-1-.8h-.5c-.5 0-.9-.3-1-.8l-.5-3c-.5-2.5-2.5-4-5-4z" />
      </svg>
    ),
  },
  {
    name: "Behance",
    href: "https://behance.net/dynamicshotsin",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12.5h8c1.5 0 3-1 3-3s-1-3-3-3H1v10h8c2 0 3.5-1.5 3.5-3.5S11 9.5 9 9.5" />
        <path d="M15 13.5h7" />
        <path d="M22 11c0-2.5-1.5-4-4-4s-4 1.5-4 4 1.5 4 4 4c1.5 0 2.7-.5 3.5-1.5" />
        <path d="M15 7h6" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="noise-overlay gradient-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
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
        {/* Logo */}
        <div className="animate-shutter" role="img" aria-label="Dynamic Shots logo">
          <Image
            src="/LOGO_Portrait_JPG_White.jpg"
            alt="Dynamic Shots Logo"
            width={100}
            height={100}
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            priority
          />
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
        <p className="animate-fade-in-up-delay-1 max-w-lg font-sans text-lg text-zinc-400 sm:text-xl">
          Cinematic wedding films &amp; emotional storytelling
        </p>

        {/* Location badge */}
        <div className="animate-fade-in-up-delay-1 inline-flex items-center gap-1.5 text-sm text-zinc-500">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Madurai &middot; Available across India
        </div>

        {/* Divider */}
        <div className="animate-fade-in-up-delay-2 flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-zinc-600" />
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse-glow" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-zinc-600" />
        </div>

        {/* Description */}
        {/* <p className="animate-fade-in-up-delay-2 max-w-md text-sm leading-relaxed text-zinc-500">
          We believe every love story is unique. From grand weddings to intimate
          ceremonies, we turn your emotions into dynamic memories — with beauty,
          elegance, and soul.
        </p> */}

        {/* Services */}
        <section aria-label="Our Services">
        <h2 className="sr-only">Our Services</h2>
        <div className="animate-fade-in-up-delay-3 flex flex-wrap items-center justify-center gap-2">
          {[
            "Cinematic Teasers",
            "Couple Reels",
            "Full Wedding Highlights",
            "Pre/Post-Wedding Shoots",
            "Drone Coverage",
          ].map((service) => (
            <span
              key={service}
              className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-sm"
            >
              {service}
            </span>
          ))}
        </div>
        </section>

        {/* Under development badge */}
        <div className="animate-fade-in-up-delay-3 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-5 py-2.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            <span className="font-mono text-sm text-zinc-300">
              Website Under Development
            </span>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-zinc-600">
            We&apos;re crafting something extraordinary. Our full portfolio is
            coming soon.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-in-up-delay-4 mt-2 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/919363223700"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 px-6 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-green-500/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book Us on WhatsApp
          </a>
          <a
            href="mailto:contact@dynamicshots.in"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-2.5 text-sm text-zinc-300 backdrop-blur-sm transition-all hover:border-zinc-600 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-y-0.5">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            contact@dynamicshots.in
          </a>
        </div>

        {/* Social links */}
        <nav aria-label="Social media links" className="animate-fade-in-up-delay-4 mt-4 flex flex-wrap items-center justify-center gap-2.5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className="social-link group inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 py-2 pl-3 pr-4 text-zinc-500 backdrop-blur-sm transition-all hover:border-zinc-600 hover:text-white hover:shadow-lg hover:shadow-white/5"
            >
              {link.icon}
              <span className="text-xs">{link.name}</span>
            </a>
          ))}
        </nav>
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
