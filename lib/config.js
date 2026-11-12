// ====== EDIT DATA DI SINI SAJA ======
export const SITE = {
  name: "Mobil Jaya",
  legal: "CV Mobil Jaya",
  waNumber: "6282111280240", // format internasional tanpa + atau 0 di depan
  waDisplay: "0821-1128-0240",
  email: "info@mobiljaya.co.id",
  address: "Jl. Raya Contoh No. 123, Surabaya, Jawa Timur",
  hours: "Setiap hari, 24 jam",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  heroImage: "", // kosong = pakai foto Jembatan Suramadu (Wikimedia). Isi "/hero.jpg" untuk foto sendiri
  heroVideo: "/video/footage2.mp4", // contoh: "/video/hero.mp4" (taruh file di public/video/). Kosong = tombol video disembunyikan
  mapsLink: "https://maps.google.com/?q=Surabaya",
  mapsEmbed: "https://www.google.com/maps?q=Surabaya&output=embed",
};

export const waLink = (text = "Halo Mobil Jaya, saya ingin bertanya tentang sewa mobil.") =>
  `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(text)}`;

// Foto diambil dari Wikimedia Commons (gratis, lisensi CC / domain publik).
// Ganti dengan foto asli: isi `image` dengan "/cars/namafile.jpg" (taruh file di public/cars/)
export const commons = (file, w = 800) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;

export const CATEGORIES = ["Semua", "Mobil Keluarga", "Mobil Mewah", "Minibus"];

export const CARS = [
  { name: "Toyota Avanza", category: "Mobil Keluarga", seats: 7, trans: "Manual / Matic", self: 350000, driver: 550000, file: "2019 Toyota Avanza 1.3 G (front left), East Surabaya.jpg" },
  { name: "Daihatsu Xenia", category: "Mobil Keluarga", seats: 7, trans: "Manual / Matic", self: 330000, driver: 530000, file: "2021 Daihatsu Xenia 1.3 R ADS (Indonesia) front view 01.jpg" },
  { name: "Suzuki Ertiga", category: "Mobil Keluarga", seats: 7, trans: "Manual / Matic", self: 400000, driver: 600000, file: "2019 Suzuki Ertiga GX (front), Citraland, West Surabaya.jpg" },
  { name: "Toyota Innova", category: "Mobil Keluarga", seats: 7, trans: "Manual / Matic", self: 600000, driver: 850000, file: "2013 Toyota Kijang Innova 2.0 V Luxury (front), West Surabaya.jpg" },
  { name: "Toyota Avanza Veloz", category: "Mobil Keluarga", seats: 7, trans: "Matic", self: 450000, driver: 650000, file: "2014 Toyota Avanza 1.5 Veloz (front), West Surabaya.jpg" },
  { name: "Suzuki Ertiga Cruise", category: "Mobil Keluarga", seats: 7, trans: "Matic", self: 450000, driver: 650000, file: "2024 Suzuki Ertiga Cruise (front left), Pakuwon Trade Center, West Surabaya.jpg" },
  { name: "Toyota Alphard", category: "Mobil Mewah", seats: 7, trans: "Matic", self: 2000000, driver: 2500000, file: "2007 Toyota Alphard V (front), East Surabaya.jpg" },
  { name: "Toyota Vellfire", category: "Mobil Mewah", seats: 7, trans: "Matic", self: 2200000, driver: 2700000, file: "2023 Toyota Vellfire Z Premier.jpg" },
  { name: "Toyota Hiace", category: "Minibus", seats: 14, trans: "Manual", self: 1200000, driver: 1500000, file: "Unit HiAce Feeder Wirawiri Suroboyo (Maret 2023).jpg" },
  { name: "Toyota Innova (Putih)", category: "Mobil Keluarga", seats: 7, trans: "Manual / Matic", self: 600000, driver: 850000, file: "2012 Toyota Innova 2.0 G in Pearl White, front left, 05-11-2024.jpg" },
];
export const carImage = (c) => c.image || commons(c.file);

export const rp = (n) => "Rp " + n.toLocaleString("id-ID");

export const SERVICES = [
  { icon: "🔑", title: "Lepas Kunci", text: "Bawa mobil sendiri, bebas atur perjalanan Anda." },
  { icon: "🧑‍✈️", title: "Dengan Sopir", text: "Sopir berpengalaman, Anda tinggal duduk nyaman." },
  { icon: "📅", title: "Harian, Mingguan, Bulanan", text: "Pilih lama sewa sesuai kebutuhan." },
  { icon: "✈️", title: "Antar Jemput", text: "Bandara Juanda, stasiun, dan alamat Anda." },
];

export const WHY = [
  { icon: "✨", t: "Mobil bersih dan rutin diservis" },
  { icon: "💰", t: "Harga jelas, tanpa biaya tersembunyi" },
  { icon: "🤝", t: "Driver berpengalaman dan ramah" },
  { icon: "⚡", t: "Pemesanan mudah dan cepat" },
  { icon: "🕐", t: "Siap melayani 24 jam" },
];

export const STEPS = ["Pilih mobil", "Chat kami via WhatsApp", "Konfirmasi tanggal dan harga", "Mobil siap diantar atau diambil"];

export const REVIEWS = [
  { name: "Bapak Hendra", text: "Mobil bersih, sopir sopan dan tepat waktu. Sudah langganan." },
  { name: "Ibu Sari", text: "Harga sesuai yang dijanjikan. Antar jemput bandara lancar." },
  { name: "Bapak Agus", text: "Pesan lewat WhatsApp cepat dibalas. Sangat membantu." },
];

export const FAQ = [
  ["Apa syarat sewa mobil?", "Cukup KTP dan SIM A yang masih berlaku untuk sewa lepas kunci. Untuk sewa dengan sopir, cukup KTP."],
  ["Apakah mobil bisa diantar ke alamat?", "Bisa. Kami antar ke rumah, hotel, bandara Juanda, atau stasiun. Biaya antar menyesuaikan jarak."],
  ["Apa saja metode pembayarannya?", "Tunai dan transfer bank. Untuk pemesanan, kami minta uang muka terlebih dahulu."],
  ["Bagaimana dengan BBM dan tol?", "BBM, tol, dan parkir ditanggung penyewa, kecuali disepakati lain saat pemesanan."],
  ["Jam operasional?", "Kami melayani setiap hari, 24 jam. Hubungi lewat WhatsApp kapan saja."],
];

export const DIVISIONS = [
  { title: "Lepas Kunci", tag: "Self-drive", text: "Bawa mobil sendiri, bebas atur perjalanan. Bisa harian, mingguan, bulanan.", file: "2019 Toyota Avanza 1.3 G (front left), East Surabaya.jpg" },
  { title: "Dengan Sopir", tag: "Nyaman & aman", text: "Sopir berpengalaman dan ramah. Anda tinggal duduk dan menikmati perjalanan.", file: "2007 Toyota Alphard V (front), East Surabaya.jpg" },
  { title: "Antar Jemput & Rombongan", tag: "Bandara, stasiun, wisata", text: "Juanda, stasiun, hotel, hingga paket wisata untuk rombongan besar.", file: "Unit HiAce Feeder Wirawiri Suroboyo (Maret 2023).jpg" },
];
export const STATS = [
  { to: 10, suffix: "+", label: "Unit armada" },
  { to: 500, suffix: "+", label: "Pelanggan puas" },
  { to: 24, suffix: " Jam", label: "Siap melayani" },
  { to: 5, suffix: "+", label: "Tahun pengalaman" },
];

// Tempat wisata (foto: Wikimedia Commons). Ganti/tambah sesuai selera.
export const PLACES = [
  { name: "Tugu Pahlawan & Museum Sepuluh Nopember", tag: "Sejarah", emoji: "🏛️", file: "Tugu Pahlawan Surabaya.jpg", text: "Monumen setinggi 41 meter untuk mengenang Pertempuran 10 November 1945, dengan museum di bawahnya." },
  { name: "Jembatan Suramadu", tag: "Ikon Kota", emoji: "🌉", file: "Suramadu Bridge 5.JPG", text: "Jembatan yang menghubungkan Surabaya dengan Pulau Madura. Ramai dikunjungi saat sore hari." },
  { name: "Masjid Nasional Al-Akbar", tag: "Religi & Arsitektur", emoji: "🕌", file: "20161130 0921 Masjid Nasional Al-Akbar Surabaya 2016 minaret.jpg", text: "Masjid terbesar di Jawa Timur dengan menara setinggi 99 meter dan kubah biru yang megah." },
  { name: "Kawasan Pecinan", tag: "Budaya & Kuliner", emoji: "🏮", file: "Surabaya Chinatown.jpg", text: "Kawasan dengan gerbang khas, toko tua, dan beragam kuliner Tionghoa." },
  { name: "Kawasan Tunjungan", tag: "Belanja & Heritage", emoji: "🛍️", file: "Plaza Tunjungan.JPG", text: "Pusat belanja dan kuliner di jantung kota, dekat bangunan-bangunan bersejarah." },
];
