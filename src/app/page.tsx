import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import { Faq } from "./components/sections/Faq";
import { Cta } from "./components/sections/Cta";
import { Footer } from "./components/sections/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
