import About from "./_components/About/About";
import Headline from "./_components/Headline/Headline";
import Projects from "./_components/Projects/Projects";
import SocialMedia from "./_components/SocialMedia/SocialMedia";
import MySkills from "./_components/MySkills/MySkills";
import Contact from "./_components/Contact/Contact";
import Footer from "./_components/Footer/Footer";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 gap-x-12">
      {/* Left Sticky Column */}
      <section className="py-[100px] catalogue flex flex-col gap-10 lg:justify-between lg:h-screen lg:sticky top-0 px-5 lg:px-0">
        <Headline />
        <SocialMedia />
      </section>

      {/* Right Content */}
      <div className="content lg:py-[100px] pb-[100px] lg:px-0 max-w-3xl space-y-32">
        <About />
        <Projects />
        <MySkills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
