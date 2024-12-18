import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Search, BarChart2, HelpCircle, Activity } from "lucide-react";

export default function ScrollScaleCard() {
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Initialize scroll-based animation
    const animation = gsap.to(card, {
      scale: 1.5, // Maximum scale when scrolling up
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 0.5, // Smooth animation that follows scroll
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      data-bg='black'
      data-color='white'
      className='min-h-svh h-auto z-20 bg-white  w-auto mx-[8px] relative'
    >
      {/* Hero Section */}
      <div className='relative rounded-b-[24px] bg-black text-white h-full pb-20 flex flex-col items-center justify-center px-4'>
        <h1 className='text-center mb-16'>
          <span className='block text-5xl md:text-6xl font-light mb-4 font-bricolage'>
            <span className='text-gray-500'>AI-first</span> social media
          </span>
          <span className='block text-5xl md:text-6xl '>
            analysis & listening
          </span>
        </h1>

        {/* Navigation Pills */}
        <div className='flex items-center sm:flex-row flex-col font-inter  gap-2 p-1 bg-zinc-900 space-y-2 sm:rounded-full '>
          <button className='flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full'>
            <Search className='w-4 h-4' />
            Search
          </button>
          <button className='flex items-center gap-2 px-6 py-2 text-gray-400 hover:text-white transition-colors'>
            <BarChart2 className='w-4 h-4' />
            Analyse
          </button>
          <button className='flex items-center gap-2 px-6 py-2 text-gray-400 hover:text-white transition-colors'>
            <HelpCircle className='w-4 h-4' />
            Ask
          </button>
          <button className='flex items-center gap-2 px-6 py-2 text-gray-400 hover:text-white transition-colors'>
            <Activity className='w-4 h-4' />
            Track
          </button>
        </div>

        {/* Card with scroll-based scaling */}
        <div
          ref={cardRef}
          className='w-full max-w-[60%] mt-20 md:max-w-2xl flex justify-center items-center bg-white text-black rounded-2xl shadow-2xl relative overflow-hidden'
        >
          <div className='p-8'>
            <h2 className='text-2xl font-semibold mb-2'>
              Hello, Viktor Surkov
            </h2>
            <p className='text-gray-500'>What are you researching today?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
