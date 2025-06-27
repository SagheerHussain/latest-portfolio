import React, { Suspense } from "react";
import SceneCanvas from "./SceneCanvas";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-20 md:pt-24">
      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 text-left"
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-purple-500">Sagheer Hussain</span>
        </h1>
        <h2 className="text-base md:text-3xl mb-3 text-gray-400">
          Full Stack Developer with 10+ Years Experience
        </h2>
        <p className="text-base text-gray-400 mb-6">
          I specialize in Website Development, Website Design, and Mobile App
          Development for businesses and startups.
        </p>
        <div className="flex flex-row flex-wrap items-center gap-3">
          <WhatsAppButton />

          <a
            href="https://www.linkedin.com/in/sagheer-hussain/"
            className="flex items-center px-4 py-2 md:px-6 md:py-3 rounded-xl bg-purple-600 text-white shadow-glass hover:bg-glass transition duration-300 text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mr-2" size={18} />
            LinkedIn Profile
          </a>
        </div>
      </motion.div>

      {/* 3D Canvas */}
      <div className="flex-1 w-full flex items-center justify-center py-10 md:py-16">
        <Suspense fallback={null}>
          <SceneCanvas />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
