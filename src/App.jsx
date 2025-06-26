import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <Element name="intro">
        <Hero />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      {/* <Element name="resume">
        <Resume />
      </Element> */}
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
