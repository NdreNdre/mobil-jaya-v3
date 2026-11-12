import { waLink } from "../lib/config";

export const WaIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.8 6.5L3 29l6.7-1.7A13 13 0 0016 29c7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.7c-2 0-3.9-.6-5.6-1.6l-.4-.2-4 1 1.1-3.9-.3-.4A10.7 10.7 0 1116 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.8 8.8 0 01-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5 2.4 3.7 5.8 5.1c2.1.9 2.9.9 4 .8.6-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5-.3-.2-.6-.4z" />
  </svg>
);

export function WaButton({ text, children = "Pesan via WhatsApp", className = "" }) {
  return (
    <a href={waLink(text)} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 min-h-[56px] px-7 rounded-xl bg-wa hover:bg-wadark text-white font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] ${className}`}>
      <WaIcon /> {children}
    </a>
  );
}

export const Title = ({ children, sub, light }) => (
  <div data-reveal className="text-center max-w-2xl mx-auto mb-10">
    <h2 className={`text-3xl md:text-4xl font-bold ${light ? "text-white" : "text-navy"}`}>{children}</h2>
    {sub && <p className={`mt-3 ${light ? "text-white/80" : "text-gray-600"}`}>{sub}</p>}
  </div>
);

export const Wrap = ({ id, className = "", children }) => (
  <section id={id} className={`py-16 md:py-20 ${className}`}>
    <div className="max-w-6xl mx-auto px-5">{children}</div>
  </section>
);
