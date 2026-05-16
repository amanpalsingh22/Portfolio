import About from "@/components/sections/About";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Extracurriculars from "@/components/sections/Extracurriculars";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import WhyHireMe from "@/components/sections/WhyHireMe";

export default function Home() {
  return (
    <>
      <div className="ambient-shell" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
        <Extracurriculars />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
