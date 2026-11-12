# Mobil Jaya V2 - Landing Page Rental Mobil Surabaya

Jalankan:
  npm install
  npm run dev        # buka http://localhost:3000

Ubah data (nomor WA, alamat, mobil, harga, FAQ) di: lib/config.js
Foto mobil: sementara dari Wikimedia Commons (lihat lib/config.js). Untuk foto asli, taruh file di public/cars/ lalu isi `image: "/cars/namafile.jpg"` pada mobilnya.
Deploy: push ke GitHub lalu import di vercel.com

## Video hero
1. Siapkan video footage rental (10-15 detik, tanpa suara, loop mulus, landscape).
2. Kompres supaya ringan (target di bawah 4 MB):
   ffmpeg -i asli.mp4 -an -t 12 -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -movflags +faststart public/video/hero.mp4
3. Di lib/config.js isi: heroVideo: "/video/hero.mp4"
Gambar tampil dulu, video muncul perlahan setelah halaman selesai dimuat. Pengunjung dengan data hemat/koneksi lambat
otomatis mendapat gambar saja, dan semua pengunjung bisa mematikan video lewat tombol di pojok hero.
Footage gratis: pexels.com/videos atau pixabay.com/videos (cari "car driving", "road trip", "Indonesia city").
