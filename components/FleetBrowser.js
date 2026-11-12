"use client";
import { useState } from "react";
import { CARS, CATEGORIES, carImage, rp } from "../lib/config";
import { WaButton } from "./Ui";
import Photo from "./Photo";

export default function FleetBrowser({ pageSize = 6, showAllLink = false }) {
  const [cat, setCat] = useState("Semua");
  const [shown, setShown] = useState(pageSize);
  const list = cat === "Semua" ? CARS : CARS.filter((c) => c.category === cat);
  const visible = list.slice(0, shown);
  const pick = (c) => { setCat(c); setShown(pageSize); };

  return (
    <div>
      <div role="tablist" aria-label="Kategori mobil" className="flex flex-wrap justify-center gap-3 mb-8">
        {CATEGORIES.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => pick(c)}
            className={`min-h-[48px] px-6 rounded-full font-semibold border-2 transition-all duration-200 active:scale-95 ${
              cat === c ? "bg-navy border-navy text-white" : "border-gray-300 text-gray-700 hover:border-navy hover:text-navy"}`}>
            {c}
          </button>
        ))}
      </div>

      <div key={cat} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((c, i) => (
          <article key={c.name} style={{ "--d": `${(i % pageSize) * 80}ms` }} className="rise-in card rounded-2xl border border-gray-200 overflow-hidden bg-white">
            <Photo src={carImage(c)} alt={c.name} className="w-full h-48" />
            <div className="p-5">
              <p className="text-sm font-medium text-gray-500">{c.category}</p>
              <h3 className="text-xl font-semibold text-navy">{c.name}</h3>
              <p className="text-gray-600">{c.seats} Penumpang · {c.trans}</p>
              <p className="mt-3 text-lg font-semibold">Mulai <span className="text-accent">{rp(c.self)}</span> / hari</p>
              <WaButton className="w-full mt-4" text={`Halo Mobil Jaya, saya ingin menyewa ${c.name}. Apakah tersedia?`}>Tanya via WhatsApp</WaButton>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-gray-600">Menampilkan {visible.length} dari {list.length} mobil</p>
      <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
        {shown < list.length && (
          <button onClick={() => setShown(shown + pageSize)}
            className="min-h-[56px] px-8 rounded-xl border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-200 active:scale-[0.98]">
            Muat Lebih Banyak
          </button>
        )}
        {showAllLink && (
          <a href="/armada" className="inline-flex items-center justify-center min-h-[56px] px-8 rounded-xl bg-navy text-white font-semibold hover:bg-[#12263f] transition-all duration-200">
            Lihat Semua Armada
          </a>
        )}
      </div>
    </div>
  );
}
