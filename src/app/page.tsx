import ScrollyCanvas from "@/components/ScrollyCanvas";
import Navbar from "@/components/Navbar";
import QuickLinks from "@/components/QuickLinks";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AppsProducts from "@/components/AppsProducts";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white">
      <Navbar />
      <ScrollyCanvas />
      <QuickLinks />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <AppsProducts />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
