// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { useGSAP } from "@gsap/react";

// export default function ChooseUs() {
//   const componentRef = useRef(null);

//   useGSAP(() => {}, []);

//   return (
//     <section
//       ref={componentRef}
//       data-bg='white'
//       data-color='black'
//       className='font-bricolage border z-10 min-h-svh flex justify-center items-center border-e-gray-600  relative text-black bg-white'
//     >
//       {/* Main Content */}
//       <div className=' responsiveWidth flex flex-col lg:flex-row justify-between items-start gap-12'>
//         {/* Left Content */}
//         <div className='flex-1 space-y-6'>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className='text-6xl font-bold leading-tight'
//           >
//             Why
//             <br />
//             Choose Us
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className='text-gray-600 max-w-xl'
//           >
//             Harness the power of data-driven campaigns to create meaningful
//             connections with your audience, leaving a lasting impression that
//             drives results
//           </motion.p>
//           <motion.button
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className='flex items-center gap-2 px-6 py-3 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors'
//           >
//             <span>Share Your Thoughts</span>
//           </motion.button>
//         </div>

//         {/* Right Content - Stacked Cards */}
//         <div className='flex-1 relative h-[400px] w-full'>
//           {/* Blue Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 100, rotate: 15 }}
//             whileInView={{ opacity: 1, x: 0, rotate: 15 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             className='absolute right-0 top-10 w-[300px] h-[350px] bg-blue-600 rounded-3xl'
//           />
//           {/* Yellow Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 100, rotate: 7 }}
//             whileInView={{ opacity: 1, x: 0, rotate: 7 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className='absolute right-4 top-5 w-[300px] h-[350px] bg-yellow-400 rounded-3xl'
//           />
//           {/* Green Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className='absolute right-8 top-0 w-[300px] h-[350px] bg-emerald-400 rounded-3xl p-8'
//           >
//             <div className='space-y-4'>
//               <h3 className='text-3xl font-bold'>Free For Everyone</h3>
//               <p className='text-sm'>
//                 Harness the power of data-driven campaigns to create meaningful
//                 connections with your audience, leaving a lasting impression
//                 that drives results
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ChooseUs() {
  const componentRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const blueCardRef = useRef(null);
  const yellowCardRef = useRef(null);
  const greenCardRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: { opacity: 0, ease: "power3.out" },
    });

    timeline
      .from(titleRef.current, { y: 30, duration: 1 })
      .from(paragraphRef.current, { y: 20, duration: 1 }, "-=0.8")
      .from(buttonRef.current, { y: 20, duration: 0.5 }, "-=0.6")
      .from(greenCardRef.current, { x: 100, duration: 0.7 }, "-=0.4")
      .from(
        yellowCardRef.current,
        { x: 100, rotate: 7, duration: 0.7 },
        "-=0.5"
      )
      .from(
        blueCardRef.current,
        { x: 100, rotate: 15, duration: 0.7 },
        "-=0.6"
      );
  }, []);

  return (
    <section
      ref={componentRef}
      data-bg='white'
      data-color='black'
      className='font-bricolage border z-10 min-h-svh flex justify-center items-center border-e-gray-600 relative text-black bg-white'
    >
      {/* Main Content */}
      <div className='responsiveWidth relative flex flex-col lg:flex-row justify-between items-start gap-12'>
        {/* Left Content */}
        <div className='flex-1 space-y-6'>
          <h1
            ref={titleRef}
            className=' text-[40px] sm:text-[50px] md:text-6xl font-bold leading-tight'
          >
            Why
            <br />
            Choose Us
          </h1>
          <p ref={paragraphRef} className='text-gray-600 max-w-xl'>
            Harness the power of data-driven campaigns to create meaningful
            connections with your audience, leaving a lasting impression that
            drives results
          </p>
          <button
            ref={buttonRef}
            className='flex items-center gap-2 px-6 py-3 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors'
          >
            <span>Share Your Thoughts</span>
          </button>
        </div>

        {/* Right Content - Stacked Cards */}
        <div className='flex-1 relative h-full bg-red-500 border-4 border-red-500 w-full'>
          {/* Blue Card */}
          <div
            ref={blueCardRef}
            className='absolute right-0 top-10 w-[300px] min-h-[350px] bg-blue-600 rounded-3xl'
          />
          {/* Yellow Card */}
          <div
            ref={yellowCardRef}
            className='absolute right-4 top-5 w-[300px] h-[350px] bg-yellow-400 rounded-3xl'
          />
          {/* Green Card */}
          <div
            ref={greenCardRef}
            className='absolute right-8 top-0 w-[300px] h-[350px] bg-emerald-400 rounded-3xl p-8'
          >
            <div className='space-y-4'>
              <h3 className='text-3xl font-bold'>Free For Everyone</h3>
              <p className='text-sm'>
                Harness the power of data-driven campaigns to create meaningful
                connections with your audience, leaving a lasting impression
                that drives results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
