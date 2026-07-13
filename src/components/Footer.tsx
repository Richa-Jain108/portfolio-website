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
    <footer className="border-t border-white/10 bg-[#121212] px-5 py-14 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center gap-4">
        <p className="text-xl font-semibold text-white tracking-tight">Richa Sudhirkumar Jain</p>

        <p className="text-sm text-white/55">Data Analyst</p>

        <p className="text-xs text-white/35 tracking-wide">© 2026 • Designed &amp; developed by Richa Jain</p>
      </div>
    </footer>
  );
}
