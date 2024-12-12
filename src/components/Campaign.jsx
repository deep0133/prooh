import { useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";

export default function Compaign() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const barsRef = useRef(null);

  useGSAP(() => {
    gsap.context(() => {
      // Initial setup
      gsap.set(
        [
          headingRef.current,
          subtitleRef.current,
          taglineRef.current,
          buttonRef.current,
        ],
        {
          opacity: 0,
          y: 20,
        }
      );

      gsap.set(circleRef.current, {
        scale: 0.8,
        opacity: 0,
      });

      gsap.set(barsRef.current?.children, {
        width: 0,
        opacity: 0,
      });

      // Animation timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
          once: true,
        },
      });

      tl.to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .to(
          circleRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(1, 0.75)",
          },
          "-=0.4"
        )
        .to(
          barsRef.current?.children,
          {
            width: "100%",
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
          },
          "+=0.1"
        );
    }, containerRef);
  }, []);

  return (
    <section
      ref={containerRef}
      data-bg='white'
      data-color='black'
      className='min-h-svh z-20 font-bricolage rounded-t-[36px] md:rounded-t-[58px] relative bg-white text-black flex items-center'
    >
      <div className='responsiveWidth bg-white mx-auto flex justify-between items-center'>
        <div className='max-w-2xl mx-auto md:mx-0'>
          <div
            ref={taglineRef}
            className='text-start mb-2  md:mb-4 text-[#565656] text-xl md:text-2xl font-normal font-inter capitalize leading-[31.03px] tracking-tight'
          >
            outdoor campaign{" "}
          </div>

          <h1
            ref={headingRef}
            className='max-w-[595px] text-black text-[46px] sm:text-[56px] md:text-[64px] font-bold capitalize leading-[45px] sm:leading-[54px] md:leading-[69px]'
          >
            Save 30+ hours on every research
          </h1>

          <p
            ref={subtitleRef}
            className='max-w-[754px] text-[#090909] mb-8 mt-2 text-[16px] md:text-xl font-normal font-inter leading-relaxed'
          >
            Harness the power of data-driven campaigns to create meaningful
            connections with your audience, leaving a lasting impression that
            drives results
          </p>

          <button
            ref={buttonRef}
            className='md:w-[231px] md:h-[72px] h-[52px] w-[170px] bg-neutral-50 rounded-lg border border-black justify-center items-center inline-flex text-black text-xl font-normal font-inter capitalize leading-relaxed tracking-tight'
          >
            create plan
            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
          </button>
        </div>

        <div
          ref={circleRef}
          className='hidden lg:block relative w-[400px] h-[400px] bg-zinc-50 rounded-full'
        >
          <div
            ref={barsRef}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 space-y-4'
          >
            <div className='h-3 bg-zinc-200 rounded-full'></div>
            <div className='h-3 bg-zinc-200 rounded-full'></div>
            <div className='h-3 bg-zinc-200 rounded-full'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
