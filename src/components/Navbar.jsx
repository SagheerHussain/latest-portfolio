import React from "react";
import { Link } from "react-scroll";

const sections = ["Intro", "Projects", "Skills", "Contact"];

const Navbar = () => {
  return (
    <nav className="fixed top-6 right-6 z-50 flex gap-4 text-sm bg-dark/50 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
      {sections.map((sec) => (
        <Link
          key={sec}
          to={sec.toLowerCase()}
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer text-gray-300 hover:text-purple-400 transition"
        >
          {sec}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
