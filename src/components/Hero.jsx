import React, { Suspense } from "react";
import SceneCanvas from "./SceneCanvas";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-10">
      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-purple-500">Sagheer Hussain</span>
        </h1>
        <h2 className="text-xl md:text-3xl mb-6 text-gray-400">
          Full Stack Developer with 10+ Years Experience
        </h2>

        <div className="flex ">
          <WhatsAppButton />

          <a
            href="https://www.linkedin.com/in/sagheer-hussain/"
            className="px-6 py-3 mx-3 flex rounded-xl bg-purple-600 text-white shadow-glass hover:bg-glass transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mr-2 flex self-center" size={18} />
            linkedin Profile
          </a>
        </div>
      </motion.div>

      {/* 3D Canvas */}
      <div className="flex-1 h-[400px] md:h-[500px] w-full mt-10 md:mt-0">
        <Suspense fallback={null}>
          <SceneCanvas />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
