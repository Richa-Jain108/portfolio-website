const EMAIL = "richasj108@gmail.com";
const EMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent("Portfolio Inquiry")}`;

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Richa-Jain108",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/richa-jain108/",
    external: true,
  },
  {
    label: "Email",
    href: EMAIL_HREF,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#121212] px-5 py-12 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-semibold text-white">Richa Sudhirkumar Jain</p>
          <p className="mt-1 text-sm text-white/55">Data Analyst</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-white/40">© 2026</p>
      </div>
    </footer>
  );
}
