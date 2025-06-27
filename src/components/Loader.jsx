import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <motion.div
        className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      ></motion.div>
      <p className="mt-4 text-purple-300 text-sm">Loading 3D Experience...</p>
    </div>
  );
};

export default Loader;
