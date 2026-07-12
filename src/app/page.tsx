import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white">
      <ScrollyCanvas />
      <Projects />
      <Experience />
    </main>
  );
}
