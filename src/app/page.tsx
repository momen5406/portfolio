import About from "./_components/About/About";
import Headline from "./_components/Headline/Headline";
import Projects from "./_components/Projects/Projects";
import SocialMedia from "./_components/SocialMedia/SocialMedia";
import MySkills from "./_components/MySkills/MySkills";
import Contact from "./_components/Contact/Contact";
import Footer from "./_components/Footer/Footer";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2">
      <section className="py-[100px] catalogue flex flex-col lg:gap-0 gap-5 lg:justify-between lg:h-screen lg:sticky top-0 lg:px-0 px-5">
        <Headline />
        <SocialMedia />
      </section>

      <div className="content lg:py-[100px] pb-[100px]">
        <About />
        <Projects />
        <MySkills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
