import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.to(headerRef.current, {
      opacity: 1,
      duration: 0.7,
      backgroundColor: "white",
      color: "black",
      scrollTrigger: {
        trigger: headerRef.current,
        start: () => `${window.innerHeight - 80}px top`,
        end: "bottom top",
        duration: 0.5,
        ease: "power1.out",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    // gsap.fromTo(
    //   iconsRef.current,
    //   {
    //     y: "0vh", // Start above the viewport
    //     opacity: 0, // Start with zero opacity
    //     x: () => Math.random() * 200 - 100, // Random horizontal starting position
    //   },
    //   {
    //     y: () => `${window.innerHeight - 80}px`, // End position at the bottom of the screen
    //     opacity: 1, // Fade in
    //     stagger: 0.2, // Delay between each icon's animation for staggered effect
    //     duration: 2, // Duration of the fall
    //     ease: "bounce.out", // Bounce easing for a "ball" effect
    //   }
    // );
  }, []);

  return (
    <div className='relative'>
      <header
        ref={headerRef}
        className={`h-20 flex fixed top-0 bg-black text-white w-full z-50 items-center transition-all duration-300`}
        style={{
          transition: "background-color 0.5s ease, color 0.5s ease", // Smooth transition for background and text color
        }}
      >
        <div className='responsiveWidth'>
          <h1 className='text-xl font-bold'>PROOH.AI</h1>
        </div>
      </header>
    </div>
  );
}
