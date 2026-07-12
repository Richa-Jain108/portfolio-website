"use client";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 z-50 p-4 md:p-6">
      <nav
        aria-label="Main navigation"
        className="rounded-full border border-white/10 bg-[#121212]/75 px-4 py-3 backdrop-blur-xl md:px-5"
      >
        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60 md:gap-x-5 md:text-[0.7rem]">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
