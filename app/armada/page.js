import { Header, FloatingWa } from "../../components/Header";
import { Footer } from "../../components/Sections";
import FleetBrowser from "../../components/FleetBrowser";

export const metadata = {
  title: "Daftar Armada Rental Mobil Surabaya | Mobil Jaya",
  description: "Pilih mobil keluarga, mobil mewah, dan minibus untuk disewa di Surabaya. Harga jelas, pesan mudah via WhatsApp.",
};

export default function Armada() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-navy to-[#12263f] text-white pt-32 pb-14">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h1 className="rise text-4xl md:text-5xl font-bold">Daftar Armada Kami</h1>
            <p style={{ "--d": "150ms" }} className="rise mt-4 text-xl text-white/85">Pilih kategori, lalu tanyakan ketersediaan lewat WhatsApp.</p>
          </div>
        </section>
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-5"><FleetBrowser pageSize={6} /></div>
        </section>
      </main>
      <Footer />
      <FloatingWa />
    </>
  );
}
