import "./globals.css";

export const metadata = {
  title: "Rental Mobil Surabaya | Mobil Jaya - Lepas Kunci & Dengan Sopir",
  description:
    "Sewa mobil di Surabaya dengan harga jelas. Avanza, Innova, Alphard, Hiace. Lepas kunci atau dengan sopir. Pesan mudah via WhatsApp.",
  openGraph: { title: "Mobil Jaya - Rental Mobil Surabaya", description: "Sewa mobil mudah dan terpercaya di Surabaya.", locale: "id_ID", type: "website" },
};
export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-white">{children}</body>
    </html>
  );
}
