import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsScrolled(true); // If scrolled past 100vh
      } else {
        setIsScrolled(false); // Before 100vh
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <header
      className={`h-20 flex fixed top-0 w-full z-50 items-center transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-black text-white"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='responsiveWidth'
      >
        <h1 className='text-xl font-bold'>PROOH.AI</h1>
      </motion.div>
    </header>
  );
}
