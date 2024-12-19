import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Building2 } from "lucide-react";

export default function LogoMarquee() {
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  useEffect(() => {
    const marqueeInner = marqueeInnerRef.current;
    if (!marqueeInner) return;

    // Clone the content for seamless loop
    const clone = marqueeInner.cloneNode(true);
    marqueeRef.current?.appendChild(clone);

    // Create infinite horizontal scroll animation
    gsap.to(marqueeRef.current?.children, {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: "linear",
      // Ensure smooth looping
      modifiers: {
        xPercent: gsap.utils.unitize((x) => parseFloat(x) % 100),
      },
    });
  }, []);

  return (
    <section
      data-bg='black'
      data-color='white'
      className='z-20 w-full relative bg-black text-white py-16 overflow-hidden'
    >
      <div className='container mx-auto px-4 mb-8'>
        <h2 className='text-2xl font-[100] font-bricolage  text-center text-gray-300/40'>
          Trusted by 10,000 users from
        </h2>
      </div>

      {/* Marquee container */}
      <div className='relative w-full'>
        <div ref={marqueeRef} className='flex whitespace-nowrap'>
          <div ref={marqueeInnerRef} className='flex items-center gap-16 px-8'>
            {/* Using Building2 icon as placeholder - replace with actual company logos */}
            {iconsData.map((company, index) => (
              <div
                key={index}
                className='flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-300'
              >
                <Building2 className='w-8 h-8' />
                <span className='text-xl font-medium'>{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className='absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent' />
        <div className='absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent' />
      </div>
    </section>
  );
}

const iconsData = [
  "Klarna",
  "Framer",
  "L'OREAL",
  "BOSE",
  "Deloitte",
  "dentsu",
  "Google",
  "Microsoft",
];
