import About from "./_components/About/About";
import Education from "./_components/Education/Education";
import Hero from "./_components/Hero/Hero";
import MySkills from "./_components/MySkills/MySkills";
import Navbar from "./_components/Navbar/Navbar";
import Projects from "./_components/Projects/Projects";
import Services from "./_components/Services/Services";
import Achievements from "./_components/Achievements/Achievements";
import Contact from "./_components/Contact/Contact";
import ScrollToTop from "./_components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <MySkills />
      <Projects />
      <Services />
      <Achievements />
      <Contact />
      <ScrollToTop />
    </>
  );
}
