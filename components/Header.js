"use client";
import { useEffect, useState } from "react";
import { SITE, waLink } from "../lib/config";
import { WaButton, WaIcon } from "./Ui";

const LINKS = [["Beranda", "/"], ["Armada", "/armada"], ["Layanan", "/#layanan"], ["Wisata", "/#wisata"], ["Harga", "/#harga"], ["Tentang", "/#tentang"], ["Kontak", "/#kontak"]];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      setSolid(window.scrollY > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${solid ? "bg-white/95 backdrop-blur shadow-md text-navy" : "bg-transparent text-white"}`}>
      <div className="max-w-6xl mx-auto px-5 h-[72px] flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 font-bold text-xl"><span className="text-2xl">🚗</span> {SITE.name}</a>
        <nav className="hidden lg:flex gap-7 font-medium">
          {LINKS.map(([l, h]) => <a key={h} href={h} className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">{l}</a>)}
        </nav>
        <WaButton className="hidden sm:inline-flex !min-h-[46px] !px-5 !text-base">Chat WhatsApp</WaButton>
        <details className="lg:hidden relative">
          <summary className={`list-none cursor-pointer min-h-[46px] px-4 flex items-center border-2 rounded-xl font-semibold ${solid ? "border-navy" : "border-white"}`}>Menu</summary>
          <div className="menu absolute right-0 mt-2 w-60 bg-white text-gray-800 rounded-xl shadow-lg border p-2">
            {LINKS.map(([l, h]) => <a key={h} href={h} className="block px-4 py-3 rounded-lg hover:bg-gray-100 font-medium">{l}</a>)}
            <a href={waLink()} className="block mt-1 px-4 py-3 rounded-lg bg-wa text-white font-semibold text-center">Chat WhatsApp</a>
          </div>
        </details>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-accent origin-left" style={{ transform: `scaleX(${p})` }} />
    </header>
  );
}

export function FloatingWa() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp"
      className="wa-pulse fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-wa hover:bg-wadark text-white rounded-full pl-4 pr-5 py-3 shadow-xl font-semibold">
      <WaIcon className="w-8 h-8" /> <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
