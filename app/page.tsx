import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About Me/AboutMe";
import Technologies from "@/components/Technologies/Technologies";
import Experince from "@/components/Experince/Experince";
import Projects2 from "@/components/Projects/Projects2";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Experince />
      <div id="technologies" className="">
        <Technologies />
      </div>
      <Projects2 />
    </>
  );
}
