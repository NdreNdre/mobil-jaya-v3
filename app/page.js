import RevealObserver from "../components/RevealObserver";
import { Header, FloatingWa } from "../components/Header";
import { Hero, Services, Fleet, Wisata, Stats, HowTo, Pricing, Reviews, Bento, Faq, Contact, Footer } from "../components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero /><Services /><Fleet /><Wisata /><Stats /><HowTo /><Pricing /><Reviews /><Bento /><Faq /><Contact />
      </main>
      <Footer />
      <FloatingWa />
      <RevealObserver />
    </>
  );
}
