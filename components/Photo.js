"use client";
import { useState } from "react";

// Foto dengan cadangan: kalau gambar gagal dimuat, tampil kotak abu-abu + emoji.
export default function Photo({ src, alt, className = "", emoji = "🚗" }) {
  const [bad, setBad] = useState(false);
  if (!src || bad)
    return <div role="img" aria-label={alt} className={`${className} bg-gray-100 flex items-center justify-center text-7xl`}>{emoji}</div>;
  return <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`${className} object-cover`} />;
}
