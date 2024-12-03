// // import { useRef } from "react";
// // import { gsap } from "gsap";
// // import { useGSAP } from "@gsap/react";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // gsap.registerPlugin(ScrollTrigger);

// // export default function Header() {
// //   const headerRef = useRef(null);

// //   useGSAP(() => {
// //     gsap.to(headerRef.current, {
// //       opacity: 1,
// //       duration: 0.7,
// //       backgroundColor: "white",
// //       color: "black",
// //       scrollTrigger: {
// //         trigger: headerRef.current,
// //         start: () => `${window.innerHeight - 80}px top`,
// //         end: "bottom top",
// //         duration: 0.5,
// //         ease: "power1.out",
// //         scrub: true,
// //         toggleActions: "play none none reverse",
// //       },
// //     });
// //   }, []);

// //   return (
// //     <div className='relative'>
// //       <header
// //         ref={headerRef}
// //         className={`h-20 flex fixed top-0 bg-black text-white w-full z-50 items-center transition-all duration-300`}
// //         style={{
// //           transition: "background-color 0.5s ease, color 0.5s ease", // Smooth transition for background and text color
// //         }}
// //       >
// //         <div className='responsiveWidth text-inherit'>
// //           <h1 className='text-xl font-bold'>PROOH.AI</h1>
// //         </div>
// //       </header>
// //     </div>
// //   );
// // }

// import { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Header() {
//   const headerRef = useRef(null);

//   useGSAP(() => {
//     const sections = gsap.utils.toArray("section");
//     console.info("-----background color-----:", sections);

//     sections.forEach((section) => {
//       const sectionBgColor = getComputedStyle(section).backgroundColor;
//       const sectionTextColor = getComputedStyle(section).color;

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 80px", // Adjust based on your header height
//         end: "bottom 20px",
//         onEnter: () => updateHeaderColors(sectionBgColor, sectionTextColor),
//         onEnterBack: () => updateHeaderColors(sectionBgColor, sectionTextColor),

//       });
//     });

//     // Initial header state
//     gsap.set(headerRef.current, { backgroundColor: "white", color: "black" });
//   }, []);

//   const updateHeaderColors = (bgColor, textColor) => {
//     gsap.to(headerRef.current, {
//       backgroundColor: bgColor,
//       color: textColor,
//       duration: 0.5,
//       ease: "power2.out",
//       marker: true,
//     });
//   };

//   return (
//     <div className='relative'>
//       <header
//         ref={headerRef}
//         className={`h-20 flex fixed top-0 w-full z-50 items-center transition-all duration-300`}
//       >
//         <div className='responsiveWidth'>
//           <h1 className='text-xl font-bold'>PROOH.AI</h1>
//         </div>
//       </header>
//     </div>
//   );
// }

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray("section");

    // sections.forEach((section, index) => {
    //   const sectionBgColor = getComputedStyle(section).backgroundColor;
    //   const sectionTextColor = getComputedStyle(section).color;

    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: `top-=100px top`, // Adjust based on your header height
    //     end: "bottom bottom-=120px",
    //     markers: true,
    //     onEnter: (self) => {
    //       if (self.direction === 1)
    //         return updateHeaderColors(sectionBgColor, sectionTextColor);
    //     },
    //     onEnterBack: () => (self) => {
    //       if (self.direction === -1)
    //         return updateHeaderColors(sectionBgColor, sectionTextColor);
    //     },
    //     onLeave: () => {
    //       // When leaving a section going down, update to the next section's colors
    //       const nextSection = sections[index + 1];
    //       if (nextSection) {
    //         const nextBgColor = getComputedStyle(nextSection).backgroundColor;
    //         const nextTextColor = getComputedStyle(nextSection).color;
    //         updateHeaderColors(nextBgColor, nextTextColor);
    //       }
    //     },
    //     onLeaveBack: () => {
    //       // When leaving a section going up, update to the previous section's colors
    //       const prevSection = sections[index - 1];
    //       if (prevSection) {
    //         const prevBgColor = getComputedStyle(prevSection).backgroundColor;
    //         const prevTextColor = getComputedStyle(prevSection).color;
    //         updateHeaderColors(prevBgColor, prevTextColor);
    //       }
    //     },
    //   });
    // });

    // // Initial header state
    // const firstSection = sections[0];
    // const initialBgColor = getComputedStyle(firstSection).backgroundColor;
    // const initialTextColor = getComputedStyle(firstSection).color;
    // gsap.set(headerRef.current, {
    //   backgroundColor: initialBgColor,
    //   color: initialTextColor,
    // });
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 20%",
        end: "bottom 20%",
        markers: true,
        onEnter: () => updateHeaderColors(section),
        onEnterBack: () => updateHeaderColors(section),
      });
    });

    function updateHeaderColors(section) {
      const bgColor = section.getAttribute("data-bg");
      const textColor = section.getAttribute("data-color");

      gsap.to(headerRef.current, {
        backgroundColor: bgColor,
        color: textColor,
        duration: 0.3,
        ease: "power1.out",
      });
    }
  }, []);

  const updateHeaderColors = (bgColor, textColor) => {
    gsap.to(headerRef.current, {
      backgroundColor: bgColor,
      color: textColor,
      duration: 0.4,
      ease: "power3.in",
    });
  };

  return (
    <div className='relative h-20 z-50'>
      <header
        ref={headerRef}
        className={`h-20 flex fixed top-0 w-full z-50 items-center transition-all duration-300`}
      >
        <div className='responsiveWidth'>
          <h1 className='text-xl font-bold'>PROOH.AI</h1>
        </div>
      </header>
    </div>
  );
}
