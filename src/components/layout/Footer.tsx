import Image from "next/image";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/seminariosimonton/",
    // Instagram
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/seminariosimonton",
    // YouTube
    path: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/seminariosimonton/?locale=pt_BR",
    // Facebook
    path: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <Image
          src="/images/logo-branca-trim.png"
          alt="Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton"
          width={269}
          height={91}
          className="h-16 w-auto opacity-90"
        />

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-brand-100/80 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {social.path}
              </svg>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 text-xs text-brand-200/70 sm:items-end">
          <span>
            © {new Date().getFullYear()} Seminário Teológico Presbiteriano
            Rev. Ashbel Green Simonton
          </span>
          <span>Jurisdicionado à Igreja Presbiteriana do Brasil</span>
        </div>
      </div>
    </footer>
  );
}
