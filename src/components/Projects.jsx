import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

// const categories = ["All", "Websites", "Android", "iOS", "WebApp"];

const projects = [
  {
    title: "TAefficienthomes",
    description:
      "Custom solar panel installations that reduce electricity bills and carbon footprint using high‑efficiency panels and flexible financing.",
    tech: ["Wordpress", "CMS", "PHP"],
    live: "https://taefficienthomes.com/",
    image: "/images/taefficienthomes.png",
    category: ["Website"],
  },
  {
    title: "Unitedremodeling",
    description:
      "Lower your electricity costs and go green with tailored solar panel systems using high-efficiency technology and easy financing.",
    tech: ["PHP", "Wordpress", "CMS"],
    live: "https://unitedremodelingca.com/",
    image: "/images/unitedremodeling.png",
    category: ["Website"],
  },
  {
    title: "Progressiveti",
    description:
      "Personalized solar solutions designed to minimize power bills and environmental impact, backed by affordable financing plans.",
    tech: ["Wordpress", "CMS", "PHP"],
    live: "https://progressiveti.com/",
    // image: "/images/Dashboard.png",
    category: ["Website"],
  },
  {
    title: "Condesenterprise",
    description:
      "High-performance solar installations built to save you money and protect the environment, with customizable payment options.",
    tech: ["Wordpress", "CMS", "PHP"],
    live: "https://condesenterprise.com/",
    // image: "/images/Dashboard.png",
    category: ["Website"],
  },
  {
    title: "Remodelabuilders",
    description:
      "Smart solar systems tailored to your home—save on energy and reduce emissions with flexible financing.",
    tech: ["CMS", "Wordpress", "PHP"],
    live: "https://remodelabuilders.com/",
    image: "/images/remodela.png",
    category: ["Website"],
  },
  {
    title: "Dstarconstructions",
    description:
      "Solar systems built for top performance, saving you money and protecting the planet, with flexible payment options.",
    tech: ["Wordpress", "CMS", "PHP"],
    live: "https://solar.dstarconstructions.com/",
    // image: "/images/Dashboard.png",
    category: ["Website"],
  },
  {
    title: "Reelevatehome",
    description:
      "Eco-friendly, cost-saving solar installations featuring payment options tailored to your needs.",
    tech: ["Wordpress", "CMS", "PHP"],
    live: "https://reelevatehome.com/",
    // image: "/images/Dashboard.png",
    category: ["Website"],
  },
  {
    title: "Artista Digitals",
    description:
      "A user-friendly sales management web app enabling all users to add, edit, and update their sales records efficiently in real-time.",
    tech: ["Html", "CSS", "TailwindCss", "Node.js", "Next.js", "MongoDB"],
    live: "https://artista.skynetsilicon.com/",
    image: "/images/Artista.png",
    category: ["iOS", "Android", "Web Application"],
  },
  {
    title: "Library Management System",
    description:
      "A streamlined library management web app allowing users to easily add, edit, and update book records and manage borrowing activities efficiently.",
    tech: ["Html", "CSS", "TailwindCss", "Node.js", "Next.js", "MongoDB"],
    live: "https://library.skynetsilicon.com/",
    image: "/images/lms.png",
    category: ["iOS", "Android", "Web Application"],
  },
  {
    title: "SNS Cars",
    description:
      "A dynamic online car sales platform enabling users to list, manage, and update vehicle listings seamlessly for buyers and sellers.",
    tech: ["Html", "CSS", "TailwindCss", "Node.js", "Next.js", "MongoDB"],
    live: "https://snscar.skynetsilicon.com",
    image: "/images/sns.png",
    category: ["Website"],
  },
  {
    title: "Florida Tours",
    description:
      "Personalized Hebrew-speaking guided tours showcasing Florida’s culture, heritage, and landmarks",
    tech: [
      "Html",
      "CSS",
      "Bootstrap",
      "Multilanguage",
      "Wordpress",
      "MySQL",
      "CMS",
      "PHP",
    ],
    live: "https://floridahebrewtours.com/",
    image: "/images/florida.png",
    category: ["Website"],
  },
];

const getCategoryCounts = (projects) => {
  const counts = { All: projects.length };
  projects.forEach((p) => {
    (p.category || []).forEach((cat) => {
      counts[cat] = (counts[cat] || 0) + 1;
    });
  });
  return counts;
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  const categoryCounts = getCategoryCounts(projects);
  const categories = Object.keys(categoryCounts);

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) =>
          activeTab === "All" ? true : (p.category || []).includes(activeTab)
        );

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-dark text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
        My <span className="text-purple-500">Projects</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10 gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
              activeTab === cat
                ? "bg-purple-600 text-white"
                : "bg-transparent border-purple-600 text-purple-400 hover:bg-purple-700 hover:text-white"
            }`}
          >
            {cat} ({categoryCounts[cat]})
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div
        layout
        className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
      >
        <AnimatePresence>
          {filtered.map((proj, index) => (
            <motion.div
              key={proj.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group bg-glass p-6 rounded-2xl shadow-neo hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
              onClick={() => setModalProject(proj)}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{proj.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-purple-300 mb-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/10 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-purple-400 text-sm underline">
                  Click to preview
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
          >
            <motion.div
              className="bg-dark rounded-2xl p-6 max-w-lg w-full relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-3 right-3 text-white text-xl"
              >
                &times;
              </button>

              {modalProject.image && (
                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  className="w-full h-52 object-cover rounded-lg mb-4"
                />
              )}

              <h3 className="text-2xl font-bold mb-2">{modalProject.title}</h3>
              <p className="text-sm text-gray-300 mb-4">
                {modalProject.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-purple-300 mb-4">
                {modalProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500/10 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={modalProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 text-sm"
              >
                Visit Live Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center mt-12">
        <WhatsAppButton />
      </div>
    </section>
  );
};

export default Projects;
