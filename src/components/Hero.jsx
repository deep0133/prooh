import { useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import FallingIcons from "./BallFalling";

import advertising from "../assets/fallingIcons/advertising.png";
import contract from "../assets/fallingIcons/contract.png";
import earth from "../assets/fallingIcons/earth.png";
import gift from "../assets/fallingIcons/gift.png";
import map from "../assets/fallingIcons/google-maps.png";
import hotdeal from "../assets/fallingIcons/hot-deal.png";
import like from "../assets/fallingIcons/like.png";
import pdf from "../assets/fallingIcons/pdf.png";
import target from "../assets/fallingIcons/target.png";
import tickmark from "../assets/fallingIcons/tick-mark.png";
import handIcon from "../assets/svgs/hand.svg";
import { Headphones } from "lucide-react";
gsap.registerPlugin(TextPlugin);

export default function LandingPage() {
  const notificationRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const logosRef = useRef(null);

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
  }, []);

  return (
    <div className='black-section fixed top-20 z-0 inset-0 bg-black text-white'>
      {/* Custom Cursor */}
      <FallingIcons icons={icons} />
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
            className='text-5xl flex gap-3 md:text-7xl font-bold leading-[60px] md:leading-[89px] tracking-[-2px]'
          >
            <img src={handIcon} className='size-[71px]' alt='' />
            Welcome in Prooh <br /> AI Technologies
          </h2>
          <p
            ref={paragraphRef}
            className=' text-zinc-400 max-w-2xl mx-auto text-lg'
          >
            Harness the power of data-driven campaigns to create meaningful
            connections with your audience, leaving a lasting impression that
            drives results.
          </p>

          <div
            ref={buttonsRef}
            className='mt-10 flex items-center justify-center gap-4'
          >
            <button className=' w-[279px] h-[67px] rounded-[20px] bg-white text-center text-black text-2xl font-semibold font-inter capitalize leading-[31.03px] tracking-tight border-none hover:bg-zinc-200'>
              Plan Campaign
            </button>
            <button className='w-[77px] h-[67px] flex justify-center items-center rounded-[20px] border border-[#696969]'>
              <Headphones className='h-6 w-6' />
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

const icons = [
  advertising,
  contract,
  earth,
  gift,
  map,
  hotdeal,
  like,
  pdf,
  target,
  tickmark,
];
