import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skill";
import Projects from "@/components/sections/Project";
import Experience from "@/components/sections/Experiance";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
       <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
} 