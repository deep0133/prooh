// import { useRef } from "react";
// import { gsap } from "gsap";
// import { Search, ArrowRight, Clock } from "lucide-react";
// import { useGSAP } from "@gsap/react";

// export default function AnimatedSearch() {
//   const containerRef = useRef(null);
//   const searchRef = useRef(null);

//   useGSAP(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".heading", {
//         y: -50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".heading",
//           start: "top 60%", // Trigger when the top of .heading is 90% into the viewport
//           toggleActions: "play none none reset", // Re-triggers animation on scroll
//         },
//       });

//       // Animate social links
//       gsap.from(".social-link", {
//         y: 50,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".social-link",
//           start: "top 70%",
//           toggleActions: "play none none reset",
//         },
//       });

//       // Animate search container
//       gsap.from(searchRef.current, {
//         scale: 0.8,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: searchRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reset",
//         },
//       });

//       // Animate tags
//       gsap.from(".tag", {
//         y: 50,
//         opacity: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".tag",
//           start: "top 80%",
//           toggleActions: "play none none reset",
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       data-bg='white'
//       data-color='black'
//       className='min-h-screen z-10 w-full relative bg-neutral-50 text-black flex flex-col justify-center items-center px-4 py-16'
//     >
//       <h1 className='heading text-[26px] sm:text-[36px] text-5xl font-inter font-bold mb-12'>
//         Try it now
//       </h1>

//       <div className='social-links flex gap-8 mb-12'>
//         <a
//           href='#'
//           className='social-link flex items-center gap-2 text-gray-600 hover:text-gray-900'
//         >
//           <div className='w-6 h-6 rounded-full bg-[#FF4500]' />
//           Reddit
//         </a>
//         <a
//           href='#'
//           className='social-link flex items-center gap-2 text-gray-600 hover:text-gray-900'
//         >
//           <div className='w-6 h-6 rounded-full bg-[#000000]' />
//           Tiktok
//         </a>
//         <a
//           href='#'
//           className='social-link flex items-center gap-2 text-gray-600 hover:text-gray-900'
//         >
//           <div className='w-6 h-6 rounded-full bg-[#FF0000]' />
//           Youtube
//         </a>
//       </div>

//       <div
//         ref={searchRef}
//         className='w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden mb-8'
//       >
//         <div className='flex items-center px-4 py-2  md:p-4 gap-3'>
//           <Search className='w-5 h-5 text-gray-400' />
//           <input
//             type='text'
//             placeholder='Ask anything...'
//             className='flex-1 outline-none text-lg'
//           />
//           <button className='flex items-center gap-2 text-gray-500 hover:text-gray-700'>
//             <Clock className='w-4 h-4' />
//             All time
//           </button>
//           <button className='p-2 hover:bg-gray-100 rounded-lg'>
//             <ArrowRight className='w-5 h-5' />
//           </button>
//         </div>
//       </div>

//       <div className='flex flex-wrap gap-3 justify-center'>
//         <button className='tag px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700'>
//           Best film camera
//         </button>
//         <button className='tag px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700'>
//           News aggregation apps
//         </button>
//         <button className='tag px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700'>
//           Electric bikes
//         </button>
//       </div>
//     </div>
//   );
// }

import { useRef } from "react";
import { gsap } from "gsap";
import { Search, ArrowRight, Clock } from "lucide-react";
import { useGSAP } from "@gsap/react";

export default function AnimatedSearch() {
  const containerRef = useRef(null);
  const searchRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heading", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".heading",
          start: "top 60%", // Trigger when the top of .heading is 90% into the viewport
          toggleActions: "play none none reset", // Re-triggers animation on scroll
        },
      });

      // Animate social links
      gsap.from(".social-link", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".social-link",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });

      // Animate search container
      gsap.from(searchRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: searchRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      // Animate tags
      gsap.from(".tag", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tag",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      data-bg='white'
      data-color='black'
      className='min-h-screen z-10 w-full relative bg-white text-black flex flex-col justify-center items-center px-4 py-16'
    >
      <h1 className='heading text-5xl font-bold mb-12'>Try it now</h1>

      <div className='social-links flex flex-col md:flex-row gap-8 mb-12'>
        <a
          href='#'
          className='social-link flex items-center gap-2 text-gray-600 hover:text-gray-900'
        >
          <div className='w-6 h-6 rounded-full bg-[#FF4500]' />
          Reddit
        </a>
        <a
          href='#'
          className='social-link flex items-center gap-2 text-gray-600 hover:text-gray-900'
        >
          <div className='w-6 h-6 rounded-full bg-[#000000]' />
          Tiktok
        </a>
        <a
          href='#'
          className='social-link flex items-center gap-2 text-gray-600 hover:text-gray-900'
        >
          <div className='w-6 h-6 rounded-full bg-[#FF0000]' />
          Youtube
        </a>
      </div>

      <div
        ref={searchRef}
        className='w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden mb-8'
      >
        <div className='flex items-center p-4 gap-3'>
          <Search className='w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Ask anything...'
            className='flex-1 outline-none text-lg'
          />
          <button className='items-center hidden md:flex gap-2 text-gray-500 hover:text-gray-700'>
            <Clock className='w-4 h-4' />
            All time
          </button>
          <button className='p-2 hover:bg-gray-100 rounded-lg'>
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>
      </div>

      <div className='flex flex-wrap gap-3 justify-center'>
        <button className='tag px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700'>
          Best film camera
        </button>
        <button className='tag px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700'>
          News aggregation apps
        </button>
        <button className='tag px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700'>
          Electric bikes
        </button>
      </div>
    </div>
  );
}
