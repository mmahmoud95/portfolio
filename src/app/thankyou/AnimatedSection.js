"use client";
import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  return (
    <motion.section
      className="box"
      initial={{ transform: "translateY(-100px)" }}
      animate={{ transform: "translateX(0px)" }}
      transition={{
        type: "linear", opacity: { ease: "linear" }
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;