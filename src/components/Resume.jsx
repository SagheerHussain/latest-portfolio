import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const Resume = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.8, 1]), {
    stiffness: 120,
    damping: 20,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="min-h-[70vh] flex items-center justify-center px-8 md:px-20 py-24 bg-dark text-white"
    >
      <motion.div
        style={{ scale, opacity }}
        className="bg-glass backdrop-blur-lg p-10 rounded-3xl shadow-neo w-full md:w-2/3 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Download <span className="text-purple-500">My Resume</span>
        </h2>
        <p className="text-gray-300 mb-8">
          Want to know more about my journey and work experience?
        </p>
        <a
          href="/resume-sagheer-hussain.pdf"
          download
          className="inline-block px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition-all duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;
