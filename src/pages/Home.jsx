import About from "./sub-compnents/About";
import Contact from "./sub-compnents/Contact";
import Hero from "./sub-compnents/Hero";
import MyApps from "./sub-compnents/MyApps";
import Portfolio from "./sub-compnents/Portfolio";
import Skills from "./sub-compnents/Skills";
import Timeline from "./sub-compnents/Timeline";

const Home = () => {
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Portfolio />
      <MyApps />
      <Contact />
    </article>
  );
};

export default Home;
