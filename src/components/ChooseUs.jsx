import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function ChooseUs() {
  const [showText, setShowText] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the component is fully in view (at the top of the viewport)
        setShowText(entry.isIntersecting && entry.boundingClientRect.top === 0);
      },
      {
        root: null, // Use the viewport as the root
        threshold: 1.0, // Trigger only when fully in view
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className='min-h-svh font-bricolage relative bg-white'
      style={{
        zIndex: 9999,
      }}
    >
      {/* Fixed "PROOH.AI" text */}
      {showText && (
        <div className='fixed top-0 left-0 w-full bg-white z-50'>
          <p className='text-left font-medium responsiveWidth  text-lg py-2'>
            PROOH.AI
          </p>
        </div>
      )}

      <div className='pt-20 responsiveWidth'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-12'>
          {/* Left Content */}
          <div className='flex-1 space-y-6'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='text-6xl font-bold leading-tight'
            >
              Why
              <br />
              Choose Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className='text-gray-600 max-w-xl'
            >
              Harness the power of data-driven campaigns to create meaningful
              connections with your audience, leaving a lasting impression that
              drives results
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='flex items-center gap-2 px-6 py-3 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors'
            >
              <span>Share Your Thoughts</span>
              {/* <FiShare2 className='w-4 h-4' /> */}
            </motion.button>
          </div>

          {/* Right Content - Stacked Cards */}
          <div className='flex-1 relative h-[400px] w-full'>
            {/* Blue Card */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 15 }}
              whileInView={{ opacity: 1, x: 0, rotate: 15 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className='absolute right-0 top-10 w-[300px] h-[350px] bg-blue-600 rounded-3xl'
            />
            {/* Yellow Card */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 7 }}
              whileInView={{ opacity: 1, x: 0, rotate: 7 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='absolute right-4 top-5 w-[300px] h-[350px] bg-yellow-400 rounded-3xl'
            />
            {/* Green Card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className='absolute right-8 top-0 w-[300px] h-[350px] bg-emerald-400 rounded-3xl p-8'
            >
              <div className='space-y-4'>
                <h3 className='text-3xl font-bold'>Free For Everyone</h3>
                <p className='text-sm'>
                  Harness the power of data-driven campaigns to create
                  meaningful connections with your audience, leaving a lasting
                  impression that drives results
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
