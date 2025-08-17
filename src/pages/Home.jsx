import About from "./sub-compnents/About";
import Contact from "./sub-compnents/Contact";
import Hero from "./sub-compnents/Hero";
import MyApps from "./sub-compnents/MyApps";
import Portfolio from "./sub-compnents/Portfolio";
import Skills from "./sub-compnents/Skills";
import Timeline from "./sub-compnents/Timeline";

const Home = () => {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Timeline Section */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Portfolio Section */}
      <section id="projects">
        <Portfolio />
      </section>

      {/* Apps Section */}
      <section id="apps">
        <MyApps />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
