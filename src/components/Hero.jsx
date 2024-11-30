import { useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Headphones } from "lucide-react";
import { useGSAP } from "@gsap/react";
import FallingIcons from "./BallFalling";

import doctor from "../assets/doctor.jpg";
import owl from "../assets/owl.jpg";
import oip from "../assets/OIP.jpg";

gsap.registerPlugin(TextPlugin);

export default function LandingPage() {
  const notificationRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const logosRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(() => {
    // Notification Banner Animation
    gsap.fromTo(
      notificationRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.2, duration: 0.5, ease: "power1.out" }
    );

    // Heading Typewriter Animation
    gsap.to(headingRef.current, {
      text: "Smarter, Digital <br/> Outdoor Advertising.",
      delay: 1.4,
      duration: 3, // Adjust for type speed
      ease: "none",
    });

    // Paragraph Animation
    gsap.fromTo(
      paragraphRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.6, duration: 0.5, ease: "power1.out" }
    );

    // Buttons Animation
    gsap.fromTo(
      buttonsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.8, duration: 0.5, ease: "power1.out" }
    );

    // Brand Logos Animation
    gsap.fromTo(
      logosRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 1, duration: 0.5, ease: "power1.out" }
    );

    // Cursor Movement
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.1,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='min-h-screen fixed top-20 z-0 inset-0 bg-black text-white'>
      {/* Custom Cursor */}
      <FallingIcons icons={icons} />
      {/* Icons falling from top */}
      {/* <div
        ref={cursorRef}
        className='fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none mix-blend-difference'
        style={{ transform: "translate(-50%, -50%)", zIndex: 9999 }}
      ></div> */}

      {/* Header */}
      <div className='flex responsiveWidth justify-center items-center flex-col h-full'>
        {/* Notification Banner */}
        <div ref={notificationRef} className='flex justify-center'>
          <div className='bg-zinc-800/50 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2'>
            <span className='text-amber-500'>🎉</span>
            <span className='text-sm'>Prooh Automations is now live!</span>
          </div>
        </div>

        {/* Main Content */}
        <main className='max-w-6xl font-bricolage mx-auto px-4 text-center'>
          <h2
            ref={headingRef}
            className='text-5xl md:text-7xl font-bold leading-[60px] md:leading-[89px] tracking-[-2px]'
          >
            Welcome in Prooh <br /> AI Technology
          </h2>
          {/* <span
          ref={cursorRef}
          className="text-white text-3xl inline-block ml-1"
          style={{ marginLeft: "5px" }}
        >
          |
        </span> */}

          <p
            ref={paragraphRef}
            className='mt-6 text-zinc-400 max-w-2xl mx-auto text-lg'
          >
            Harness the power of data-driven campaigns to create meaningful
            connections with your audience, leaving a lasting impression that
            drives results.
          </p>

          <div
            ref={buttonsRef}
            className='mt-10 flex items-center justify-center gap-4'
          >
            <button className='bg-white text-black px-6 py-2 border-none rounded-md hover:bg-zinc-200'>
              Plan Campaign
            </button>
            <button className='border-zinc-700'>
              <Headphones className='h-5 w-5' />
            </button>
          </div>
        </main>

        {/* Brand Logos */}
        <div ref={logosRef} className='max-w-6xl mx-auto px-4 mt-32'>
          <div className='grid grid-cols-4 md:grid-cols-8 gap-8 items-center opacity-50'>
            {[
              "/coca-cola-logo.svg",
              "/slack-logo.svg",
              "/walmart-logo.svg",
              "/plain-logo.svg",
              "/samsung-logo.svg",
              "/openai-logo.svg",
              "/asus-logo.svg",
              "/pallet-logo.svg",
            ].map((logo, index) => (
              <div key={index} className='h-8'>
                <img
                  src={logo}
                  alt='Brand Logo'
                  className='h-full w-full object-contain invert'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const icons = [owl, doctor, oip, owl, doctor, oip, owl, doctor, oip];
