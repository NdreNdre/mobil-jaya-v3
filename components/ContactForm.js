"use client";
import { useState } from "react";
import { CARS, waLink } from "../lib/config";

const F = "w-full min-h-[52px] rounded-xl border-2 border-gray-300 px-4 text-lg focus:border-navy outline-none bg-white";

export default function ContactForm() {
  const [v, setV] = useState({ nama: "", hp: "", mobil: "", tanggal: "", layanan: "Lepas Kunci", pesan: "" });
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const send = (e) => {
    e.preventDefault();
    const t = `Halo Mobil Jaya, saya ingin menyewa mobil.\nNama: ${v.nama}\nNo. HP: ${v.hp}\nMobil: ${v.mobil || "-"}\nTanggal sewa: ${v.tanggal || "-"}\nLayanan: ${v.layanan}\nCatatan: ${v.pesan || "-"}`;
    window.open(waLink(t), "_blank", "noopener");
  };
  return (
    <form onSubmit={send} className="bg-white rounded-3xl p-6 md:p-8 space-y-4 text-gray-800">
      <label className="block font-semibold">Nama<input required className={`${F} mt-1 font-normal`} value={v.nama} onChange={set("nama")} /></label>
      <label className="block font-semibold">Nomor HP<input required type="tel" className={`${F} mt-1 font-normal`} value={v.hp} onChange={set("hp")} /></label>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block font-semibold">Mobil yang diminati
          <select className={`${F} mt-1 font-normal`} value={v.mobil} onChange={set("mobil")}>
            <option value="">Belum tahu</option>{CARS.map((c) => <option key={c.name}>{c.name}</option>)}
          </select></label>
        <label className="block font-semibold">Tanggal sewa<input type="date" className={`${F} mt-1 font-normal`} value={v.tanggal} onChange={set("tanggal")} /></label>
      </div>
      <label className="block font-semibold">Layanan
        <select className={`${F} mt-1 font-normal`} value={v.layanan} onChange={set("layanan")}>
          <option>Lepas Kunci</option><option>Dengan Sopir</option><option>Antar Jemput / Rombongan</option>
        </select></label>
      <label className="block font-semibold">Catatan<textarea rows={3} className={`${F} mt-1 py-3 font-normal`} value={v.pesan} onChange={set("pesan")} /></label>
      <button type="submit" className="w-full min-h-[56px] rounded-xl bg-wa hover:bg-wadark text-white font-semibold text-lg transition-all active:scale-[0.98]">Kirim via WhatsApp</button>
    </form>
  );
}
