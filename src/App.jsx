import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import { Element } from "react-scroll";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Helmet>
        <title>
          Sagheer Hussain | Full Stack Developer, Website & Mobile App
          Development
        </title>

        <meta
          name="description"
          content="Sagheer Hussain is a Full Stack Developer with 10+ years of experience specializing in website development, website design, and mobile app development for businesses and startups. Expert in React, Node.js, MongoDB, and modern web technologies."
        />

        <meta
          name="keywords"
          content="Sagheer Hussain, Full Stack Developer, Website Development, Website Design, Mobile App Development, MERN Stack Developer, React Developer, Node.js Developer, Web Applications, Android Apps, iOS Apps, Freelance Developer Pakistan, Custom Web Development"
        />

        <link rel="canonical" href="https://sagheer.skynetsilicon.com/" />
      </Helmet>

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
