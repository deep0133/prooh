import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import rightDoubleArrow from "../assets/rightDoubleArrow.png";
import bagIcon from "../assets/bag.png";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Sample card data
const cardData = [
  {
    title: "Event-based ad triggering",
    linkg: bagIcon,
    description:
      "We enable contextual targeting in DOOH and OOH, ensuring ads reach the right audience by aligning messaging with relevant events and locations.",
  },
  {
    title: "Real-time optimization",
    linkg: bagIcon,
    description:
      "Optimize your ad campaigns in real-time based on performance metrics and audience engagement.",
  },
  {
    title: "Advanced targeting",
    linkg: bagIcon,
    description:
      "Leverage advanced targeting capabilities to reach your ideal audience with precision.",
  },
  {
    title: "Cross-channel integration",
    linkg: bagIcon,
    description:
      "Seamlessly integrate your DOOH and OOH campaigns with other digital marketing channels.",
  },
  {
    title: "Analytics and reporting",
    linkg: bagIcon,
    description:
      "Get comprehensive insights into your campaign performance with detailed analytics and reporting.",
  },
  {
    title: "Advanced targeting",
    linkg: bagIcon,
    description:
      "Leverage advanced targeting capabilities to reach your ideal audience with precision.",
  },
  {
    title: "Cross-channel integration",
    linkg: bagIcon,
    description:
      "Seamlessly integrate your DOOH and OOH campaigns with other digital marketing channels.",
  },
  {
    title: "Analytics and reporting",
    linkg: bagIcon,
    description:
      "Get comprehensive insights into your campaign performance with detailed analytics and reporting.",
  },
  {
    title: "Advanced targeting",
    linkg: bagIcon,
    description:
      "Leverage advanced targeting capabilities to reach your ideal audience with precision.",
  },
  {
    title: "Cross-channel integration",
    linkg: bagIcon,
    description:
      "Seamlessly integrate your DOOH and OOH campaigns with other digital marketing channels.",
  },
  {
    title: "Analytics and reporting",
    linkg: bagIcon,
    description:
      "Get comprehensive insights into your campaign performance with detailed analytics and reporting.",
  },
];

export default function HorizontalScrollCards() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const trigger = triggerRef.current;

    if (!container || !trigger) return;

    ScrollTrigger.defaults({
      scroller: document.documentElement,
    });

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (container) {
            container.scrollTo(
              (container.scrollWidth - window.innerWidth) * progress,
              0
            );
          }
        },
        start: "top 30vh",
        end: () => `+=${container?.scrollWidth ?? 0 - window.innerWidth}`,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={triggerRef}
      data-bg='white'
      data-color='black'
      className='min-h-svh pt-28 relative z-10 text-black bg-white'
    >
      <div
        data-bg='white'
        data-color='black'
        className='mx-auto py-12 w-full overflow-x-hidden'
      >
        <div
          ref={containerRef}
          data-bg='white'
          data-color='black'
          className='flex overflow-x-hidden pt-8 items-center bg-white text-black  space-x-6 pb-6'
        >
          <div className='space-y-6 min-w-[606px] ml-[10%] mr-6 font-bricolage'>
            <h2 className='text-[#252525] text-[64px] font-bold leading-[68px]'>
              Contextual targeting in{" "}
              <span className='text-muted-foreground text-[#a0a0a0] lowercase'>
                dooh & ooh
              </span>
            </h2>
            <p className='text-[#8a8a8a] text-xl font-normal font-inter leading-[30px]'>
              We enable contextual targeting in DOOH and OOH, ensuring ads reach
              the right audience by aligning messaging with relevant events and
              locations.
            </p>
            <button className='w-[151px] text-nowrap h-[61px] px-[58px] text-black text-xl font-semibold font-inter capitalize py-5 rounded-[54px] border-2 border-[#c9c9c9] justify-center items-center gap-2.5 inline-flex'>
              plan now
            </button>
          </div>

          <div className='w-[37px] h-[37px] relative mt-7 flex-shrink-0 justify-start items-start inline-flex'>
            <img src={rightDoubleArrow} alt='' />
          </div>
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className='flex-shrink-0 relative overflow-visible w-[453px] h-[412px] bg-white rounded-[14px] border-4 border-black'>
      <div className='space-y-4 px-8 py-16'>
        <h3 className='text-[#252525] text-[32px] font-bold font-bricolage  lowercase leading-[38px]'>
          {title}
        </h3>
        <p className='text-black text-xl pt-3 font-normal font-inter leading-[30px]s'>
          {description}
        </p>
        <div className='flex absolute bottom-10 w-[391px] justify-between items-start'>
          <button size='text-black text-xl font-normal font-inter leading-[30px]'>
            Know more
          </button>
          <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
            <ArrowRight className='size-6 text-primary' />
          </div>
        </div>
      </div>
      <img src={bagIcon} className='absolute left-8 -top-10 z-50' alt='' />
    </div>
  );
}
