"use client";
import { useEffect, useRef, useState } from "react";
import { SITE, commons } from "../lib/config";
import Photo from "./Photo";

const KEY = "mobiljaya-hero-video";

export default function HeroMedia() {
  const poster = SITE.heroImage || commons("Suramadu Bridge 5.JPG", 1600);
  const src = SITE.heroVideo;
  const [enabled, setEnabled] = useState(false); // video diizinkan?
  const [mounted, setMounted] = useState(false); // elemen <video> dipasang?
  const [ready, setReady] = useState(false);     // video siap -> transisi dari gambar
  const vid = useRef(null);
  const box = useRef(null);

  // 1. Tentukan default: video hanya jika koneksi lega, tidak hemat data, tidak "kurangi gerakan"
  useEffect(() => {
    if (!src) return;
    let pref = null;
    try { pref = localStorage.getItem(KEY); } catch (e) {}
    const c = navigator.connection || {};
    const light = c.saveData || /(^|-)(2g|3g)$/.test(c.effectiveType || "") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(pref ? pref === "on" : !light);
  }, [src]);

  // 2. Gambar tampil dulu; video baru dimuat setelah halaman selesai (tidak mengganggu loading awal)
  useEffect(() => {
    if (!enabled) { setReady(false); const t = setTimeout(() => setMounted(false), 1000); return () => clearTimeout(t); }
    let t;
    const go = () => { t = setTimeout(() => setMounted(true), 600); };
    if (document.readyState === "complete") go(); else window.addEventListener("load", go, { once: true });
    return () => { clearTimeout(t); window.removeEventListener("load", go); };
  }, [enabled]);

  // 3. Jeda video saat hero tidak terlihat (hemat baterai)
  useEffect(() => {
    if (!mounted || !box.current) return;
    const io = new IntersectionObserver(([e]) => {
      const v = vid.current; if (!v) return;
      if (e.isIntersecting) v.play().catch(() => {}); else v.pause();
    });
    io.observe(box.current);
    return () => io.disconnect();
  }, [mounted]);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    try { localStorage.setItem(KEY, next ? "on" : "off"); } catch (e) {}
  };

  return (
    <>
      <div ref={box} className="absolute inset-0">
        <Photo src={poster} alt="" className="kb absolute inset-0 w-full h-full" />
        {src && mounted && (
          <video ref={vid} src={src} poster={poster} muted loop playsInline autoPlay preload="auto"
            onCanPlay={() => setReady(true)} onError={() => setEnabled(false)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${ready && enabled ? "opacity-100" : "opacity-0"}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e] via-[#0b1a2e]/70 to-[#0b1a2e]/40" />
      </div>
      {src && (
        <button type="button" onClick={toggle} aria-pressed={enabled}
          className="absolute z-10 top-24 right-5 min-h-[44px] px-4 rounded-full bg-black/45 backdrop-blur border border-white/40 text-white text-base font-medium hover:bg-black/65 transition-colors">
          {enabled ? "⏸ Matikan video" : "▶ Putar video"}
        </button>
      )}
    </>
  );
}
