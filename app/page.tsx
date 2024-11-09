import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About Me/AboutMe";
import Technologies from "@/components/Technologies/Technologies";
import Experince from "@/components/Experince/Experince";
import Projects2 from "@/components/Projects/Projects2";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="lg:hidden">
        <Technologies />
      </div>
      <AboutMe />
      <div id="technologies" className="hidden lg:block">
        <Technologies />
      </div>
      <Experince />
      <Projects2 />
    </>
  );
}
