import { CARS, DIVISIONS, PLACES, STATS, STEPS, REVIEWS, FAQ, SITE, rp, commons, carImage } from "../lib/config";
import { WaButton, Title, Wrap } from "./Ui";
import { waLink } from "../lib/config";
import Photo from "./Photo";
import FleetBrowser from "./FleetBrowser";
import Counter from "./Counter";
import ContactForm from "./ContactForm";
import HeroMedia from "./HeroMedia";

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-navy text-white">
      <HeroMedia />
      <div className="relative max-w-6xl mx-auto px-5 pt-32 pb-10 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08]">
          <span className="line"><span style={{ "--d": "100ms" }}>Sewa Mobil di Surabaya,</span></span>
          <span className="line"><span style={{ "--d": "250ms" }} className="text-accent">Mudah dan Terpercaya.</span></span>
        </h1>
        <p style={{ "--d": "600ms" }} className="rise mt-6 max-w-2xl text-xl text-white/85">Mobil lepas kunci maupun dengan sopir. Harga jelas, unit terawat, pelayanan cepat.</p>
        <div style={{ "--d": "800ms" }} className="rise mt-8 flex flex-col sm:flex-row gap-4">
          <WaButton text="Halo Mobil Jaya, saya ingin menyewa mobil. Apakah tersedia?" />
          <a href="#armada" className="inline-flex items-center justify-center min-h-[56px] px-7 rounded-xl border-2 border-white font-semibold hover:bg-white hover:text-navy transition-all duration-200">Lihat Daftar Mobil</a>
        </div>
        <ul style={{ "--d": "1000ms" }} className="rise mt-12 grid grid-cols-3 gap-4 border-t border-white/25 pt-6 text-sm sm:text-lg font-medium">
          {["Unit Terawat", "Harga Transparan", "Layanan 24 Jam"].map((b) => <li key={b}>✔ {b}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <Wrap id="layanan" className="bg-gray-50">
      <Title sub="Pilih cara sewa yang paling cocok untuk perjalanan Anda.">Layanan Kami</Title>
      <div className="grid md:grid-cols-3 gap-6">
        {DIVISIONS.map((d, i) => (
          <a key={d.title} href="#kontak" data-reveal style={{ "--d": `${i * 120}ms` }} className="group relative block h-[420px] rounded-3xl overflow-hidden text-white">
            <Photo src={commons(d.file)} alt={d.title} className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e] via-[#0b1a2e]/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-accent font-semibold">{d.tag}</p>
              <h3 className="text-2xl font-bold mt-1">{d.title}</h3>
              <p className="mt-2 text-white/85">{d.text}</p>
              <span className="mt-4 inline-block font-semibold border-b-2 border-accent pb-0.5 group-hover:pr-3 transition-all">Pesan sekarang</span>
            </div>
          </a>
        ))}
      </div>
    </Wrap>
  );
}

export function Fleet() {
  return (
    <Wrap id="armada">
      <Title sub="Pilih kategori mobil, lalu tanyakan ketersediaan lewat WhatsApp.">Daftar Armada</Title>
      <FleetBrowser pageSize={3} showAllLink />
    </Wrap>
  );
}

export function Wisata() {
  const span = (i) => (i < 2 ? "lg:col-span-3" : "lg:col-span-2");
  return (
    <Wrap id="wisata" className="bg-gray-50">
      <Title sub="Sewa mobil dari kami, lalu kunjungi tempat-tempat ikonik di Kota Pahlawan. Bisa dengan sopir yang hafal jalan.">Jelajahi Surabaya</Title>
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
        {PLACES.map((p, i) => (
          <a key={p.name} href={waLink(`Halo Mobil Jaya, saya ingin sewa mobil untuk wisata ke ${p.name}. Bisa dibantu?`)} target="_blank" rel="noopener noreferrer"
            data-reveal style={{ "--d": `${(i % 3) * 110}ms` }}
            className={`group relative block h-[340px] rounded-3xl overflow-hidden text-white ${span(i)}`}>
            <Photo src={commons(p.file, 1000)} alt={p.name} emoji={p.emoji} className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e] via-[#0b1a2e]/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="inline-block rounded-full bg-accent text-navy text-sm font-semibold px-3 py-1">{p.tag}</span>
              <h3 className="mt-2 text-xl md:text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-white/85 text-base">{p.text}</p>
              <span className="mt-3 inline-block font-semibold border-b-2 border-accent pb-0.5 group-hover:pr-3 transition-all">Tanya sewa mobil ke sini</span>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-10 text-center"><WaButton text="Halo Mobil Jaya, saya ingin tanya paket sewa mobil untuk wisata keliling Surabaya.">Tanya Paket Wisata Surabaya</WaButton></div>
    </Wrap>
  );
}

export function Stats() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-6xl mx-auto px-5">
        <h2 data-reveal className="text-center text-3xl md:text-4xl font-bold text-white mb-12">Kenapa Pilih Mobil Jaya</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">{STATS.map((s) => <Counter key={s.label} {...s} />)}</div>
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white/90 text-center">
          {["Mobil bersih dan rutin diservis", "Harga jelas, tanpa biaya tersembunyi", "Driver berpengalaman dan ramah", "Pemesanan mudah dan cepat"].map((t, i) => (
            <li key={t} data-reveal style={{ "--d": `${i * 100}ms` }} className="rounded-2xl bg-white/10 p-5">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowTo() {
  return (
    <Wrap>
      <Title>Cara Pesan</Title>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STEPS.map((s, i) => (
          <li key={s} data-reveal style={{ "--d": `${i * 100}ms` }} className="card text-center p-6 rounded-2xl bg-gray-50 border border-gray-200">
            <span className="mx-auto flex w-14 h-14 rounded-full bg-accent text-navy text-2xl font-bold items-center justify-center">{i + 1}</span>
            <p className="mt-3 text-lg font-semibold text-navy">{s}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 text-center"><WaButton>Mulai Pesan Sekarang</WaButton></div>
    </Wrap>
  );
}

export function Pricing() {
  return (
    <Wrap id="harga" className="bg-gray-50">
      <Title>Daftar Harga</Title>
      <div data-reveal className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-left min-w-[520px]">
          <thead className="bg-navy text-white"><tr><th className="p-4">Jenis Mobil</th><th className="p-4">Lepas Kunci / hari</th><th className="p-4">Dengan Sopir / hari</th></tr></thead>
          <tbody>{CARS.map((c) => (
            <tr key={c.name} className="border-t border-gray-200 even:bg-gray-50 hover:bg-amber-50 transition-colors">
              <td className="p-4 font-semibold">{c.name}</td><td className="p-4">{rp(c.self)}</td><td className="p-4">{rp(c.driver)}</td>
            </tr>))}</tbody>
        </table>
      </div>
      <p className="mt-4 text-base text-gray-600">*Harga dapat berubah sewaktu-waktu. Hubungi kami untuk harga terbaik dan promo.</p>
    </Wrap>
  );
}

export function Reviews() {
  const items = [...REVIEWS, ...REVIEWS];
  const track = [...items, ...items];
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <Title sub="Pelanggan kami menghargai pelayanan yang cepat dan mobil yang terawat.">Kata Pelanggan Kami</Title>
      <div className="marquee-wrap overflow-hidden">
        <div className="marquee">
          {track.map((r, i) => (
            <figure key={i} className="w-[320px] md:w-[400px] mr-6 shrink-0 p-6 rounded-2xl border border-gray-200 bg-white">
              <div className="text-accent text-2xl" aria-label="5 bintang">★★★★★</div>
              <blockquote className="mt-2">“{r.text}”</blockquote>
              <figcaption className="mt-3 font-semibold text-navy">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Bento() {
  return (
    <Wrap id="tentang" className="bg-gray-50">
      <Title>Kenali Mobil Jaya</Title>
      <div className="grid md:grid-cols-3 gap-5">
        <div data-reveal className="card md:col-span-2 relative rounded-3xl overflow-hidden min-h-[300px] text-white">
          <Photo src={carImage(CARS[9])} alt="Armada Mobil Jaya" className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e] via-[#0b1a2e]/60 to-[#0b1a2e]/20" />
          <div className="relative p-7 flex flex-col justify-end h-full min-h-[300px]">
            <h3 className="text-2xl font-bold">Tentang Kami</h3>
            <p className="mt-2 max-w-xl text-white/90">{SITE.legal} adalah usaha rental mobil di Surabaya yang melayani pelanggan pribadi, keluarga, dan perusahaan. Kami menjaga kondisi setiap unit dan selalu menyampaikan harga dengan jelas.</p>
          </div>
        </div>
        <div data-reveal style={{ "--d": "100ms" }} className="card rounded-3xl bg-navy text-white p-7 flex flex-col justify-between min-h-[300px]">
          <div><h3 className="text-2xl font-bold">Lokasi Kami</h3><p className="mt-2 text-white/85">{SITE.address}</p><p className="mt-1 text-white/70">{SITE.hours}</p></div>
          <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center min-h-[52px] rounded-xl bg-white text-navy font-semibold hover:bg-accent transition-colors">Buka Google Maps</a>
        </div>
        <div data-reveal className="card rounded-3xl bg-accent text-navy p-7 min-h-[240px]">
          <h3 className="text-2xl font-bold">Syarat Sewa</h3>
          <ul className="mt-3 space-y-2 font-medium"><li>✔ KTP asli</li><li>✔ SIM A (lepas kunci)</li><li>✔ Uang muka saat pesan</li></ul>
        </div>
        <div data-reveal style={{ "--d": "100ms" }} className="card md:col-span-2 rounded-3xl bg-wa text-white p-7 flex flex-col md:flex-row md:items-center justify-between gap-5 min-h-[240px]">
          <div><h3 className="text-2xl md:text-3xl font-bold">Butuh mobil hari ini?</h3><p className="mt-2 text-white/90">Chat sekarang, kami balas cepat dan bantu pilihkan mobil yang pas.</p></div>
          <WaButton className="!bg-white !text-wadark hover:!bg-gray-100 shrink-0">Chat WhatsApp</WaButton>
        </div>
      </div>
    </Wrap>
  );
}

export function Faq() {
  return (
    <Wrap>
      <Title>Pertanyaan Umum</Title>
      <div className="max-w-3xl mx-auto space-y-3">
        {FAQ.map(([q, a], i) => (
          <details key={q} data-reveal style={{ "--d": `${i * 80}ms` }} className="group bg-white rounded-xl border border-gray-200 p-5">
            <summary className="cursor-pointer list-none flex justify-between gap-4 font-semibold text-navy text-lg">
              {q}<span className="text-accent text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-gray-700">{a}</p>
          </details>
        ))}
      </div>
    </Wrap>
  );
}

export function Contact() {
  const rows = [["📞", SITE.waDisplay], ["✉️", SITE.email], ["📍", SITE.address], ["🕐", SITE.hours]];
  return (
    <section id="kontak" className="bg-[#0b1a2e] text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12">
        <div data-reveal>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">Hubungi Kami!</h2>
          <p className="mt-4 text-xl text-white/80">Ceritakan kebutuhan perjalanan Anda. Konsultasi gratis, kami bantu pilihkan mobil dan harga terbaik.</p>
          <ul className="mt-8 space-y-4">{rows.map(([i, v]) => <li key={v} className="flex gap-4"><span className="text-2xl">{i}</span><span className="text-lg">{v}</span></li>)}</ul>
          <iframe title="Lokasi Mobil Jaya" src={SITE.mapsEmbed} loading="lazy" className="mt-8 w-full h-64 rounded-2xl border-0" />
        </div>
        <div data-reveal style={{ "--d": "150ms" }}><ContactForm /></div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#07111f] text-white/85 py-10">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8">
        <div><p className="text-xl font-bold text-white">🚗 {SITE.name}</p><p className="mt-2">Rental mobil terpercaya di Surabaya.</p></div>
        <div><p className="font-semibold text-white">Menu</p><ul className="mt-2 space-y-1">{[["Armada", "/armada"], ["Harga", "/#harga"], ["Tentang", "/#tentang"], ["Kontak", "/#kontak"]].map(([l, h]) => <li key={h}><a href={h} className="hover:text-accent">{l}</a></li>)}</ul></div>
        <div><p className="font-semibold text-white">Ikuti Kami</p><p className="mt-2 flex gap-4"><a href={SITE.instagram} className="hover:text-accent">Instagram</a><a href={SITE.facebook} className="hover:text-accent">Facebook</a></p></div>
      </div>
      <p className="mt-8 text-center text-sm text-white/60">Foto: Wikimedia Commons (lisensi CC / domain publik)</p>
      <p className="mt-2 text-center text-sm">© 2026 {SITE.legal}. Surabaya</p>
    </footer>
  );
}
