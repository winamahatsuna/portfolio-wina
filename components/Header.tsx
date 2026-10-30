
"use client";

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificate", href: "#certificate" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#572333]/95 text-white shadow-md backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-10">
        <a
          href="#home"
          className="text-sm font-bold tracking-tight text-white transition duration-300 hover:text-[#D6A0AA] sm:text-base lg:text-lg"
        >
          Wina Mahatsuna Atsmara Hanifah
          <span className="text-[#D6A0AA]">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 transition duration-300 hover:text-[#D6A0AA]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-[#D6A0AA]/60 px-3 py-2 text-sm text-white transition hover:bg-[#D6A0AA] hover:text-[#572333] md:hidden"
        >
          {menuOpen ? "Tutup ✕" : "Menu ☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#572333] px-5 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm text-white/90 transition hover:bg-white/10 hover:text-[#D6A0AA]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
