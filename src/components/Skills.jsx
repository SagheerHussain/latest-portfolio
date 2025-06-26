import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiGit,
  SiTailwindcss,
  SiDart,
  SiAndroid,
  SiApple,
  SiPython,
  SiShopify,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="white" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "Express", icon: <SiExpress color="white" /> },
  { name: "Android", icon: <SiAndroid color="#47A248" /> },
  { name: "IOS", icon: <SiApple color="#fff" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "Dart", icon: <SiDart color="#1572B6" /> },
  { name: "Python", icon: <SiPython color="#FFC107" /> },
  { name: "Shopify", icon: <SiShopify color="#47A248" /> },
  { name: "Git", icon: <SiGit color="#F1502F" /> },
];

const Skills = () => {
  return (
    <section className="min-h-screen px-8 md:px-20 py-16 bg-dark text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-purple-500">Technologies</span> i use
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-glass rounded-2xl shadow-neo p-6 hover:scale-110 transition-transform duration-300 cursor-pointer w-28 h-28 flex flex-col items-center justify-center"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
