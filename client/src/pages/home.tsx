import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
