import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import smileIcon from "../assets/emoji.png";
import { X } from "lucide-react";
import { useGSAP } from "@gsap/react";
const faqData = [
  {
    id: 1,
    question:
      "Do I need to pay to Instapay even when there is no transaction going on in my business?",
    answer:
      "DOOH campaigns should adapt creative content based on varying factors like location, time (day vs. night), or weather (sunny vs. rainy). This ensures that ads resonate with the audience in different contexts, driving higher engagement rates.",
  },
  {
    id: 2,
    question: "What platforms does Instapay payment gateway support?",
    answer:
      "Instapay supports a wide range of platforms including web, mobile, and desktop applications. It integrates seamlessly with most e-commerce platforms and content management systems.",
  },
  {
    id: 3,
    question: "Does Instapay provide international payments support?",
    answer:
      "Yes, Instapay offers comprehensive international payment support with multiple currency options and competitive exchange rates for global transactions.",
  },
  {
    id: 4,
    question:
      "Is there any setup fee or annual maintainance fee that I need to pay regularly?",
    answer:
      "There are no hidden setup fees or annual maintenance charges. You only pay for the transactions processed through the platform based on your chosen plan.",
  },
];

export default function AnimatedFAQ() {
  const [activeId, setActiveId] = useState(null);
  const questionsRef = useRef([]);
  const contentRef = useRef([]);
  const containerRef = useRef(null);

  const textRefFaq = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {}, containerRef);
    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    gsap.from(textRefFaq.current.children, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRefFaq.current,
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const handleClick = (id) => {
    if (activeId === id) {
      gsap.to(contentRef.current[id - 1], {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(questionsRef.current[id - 1], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      setActiveId(null);
    } else {
      gsap.to(questionsRef.current[id - 1], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      });

      if (activeId) {
        gsap.to(contentRef.current[activeId - 1], {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(questionsRef.current[activeId - 1], {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      gsap.to(contentRef.current[id - 1], {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        background: "white",
        color: "black",
        borderRadius: "24px",
        ease: "power2.out",
      });
      setActiveId(id);
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 12px)",
      }}
      className='z-20 relative bg-white'
      ref={containerRef}
    >
      <div
        style={{
          minHeight: "calc(100vh - 12px)",
        }}
        className='bg-black text-white -mt-1 flex-col p-8 flex justify-center items-center'
      >
        <div className='responsiveWidth mx-auto grid md:grid-cols-2 place-items-center gap-5'>
          <div ref={textRefFaq}>
            <div className='flex items-center gap-2'>
              <span>
                <img src={smileIcon} className='w-6 h-6' />
              </span>
              <span className='text-center text-[#8b8b8b] text-2xl font-normal font-bricolage  capitalize leading-[64px]'>
                F.A.Q
              </span>
            </div>
            <h1 className='text-white text-[46px] md:text-[56px] lg:text-[64px] font-bold font-bricolage capitalize leading-[62px]'>
              Most Asked Questions
            </h1>
            <div className='max-w-[440px] mt-5 text-white text-base font-normal font-inter leading-relaxed'>
              DOOH campaigns should adapt creative content based on varying
              factors like location, time (day vs. night), or{" "}
            </div>
          </div>
          <div className='space-y-4'>
            {faqData.map((item) => (
              <div key={item.id} className='relative'>
                <div
                  ref={(el) => (questionsRef.current[item.id - 1] = el)}
                  className={`bg-neutral-800/50 rounded-lg transition-colors hover:bg-neutral-800 ${
                    activeId === item.id ? "hidden" : ""
                  }`}
                >
                  <button
                    onClick={() => handleClick(item.id)}
                    className='w-full p-6 flex items-center justify-between text-left'
                  >
                    <span className='text-lg'>{item.question}</span>
                    {/* <Plus className='w-6 h-6 flex-shrink-0 ml-4' /> */}
                  </button>
                </div>
                <div
                  ref={(el) => (contentRef.current[item.id - 1] = el)}
                  className='overflow-hidden'
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className='p-6 bg-white/10 rounded-lg mt-2'>
                    <div className='flex justify-between items-center mb-4'>
                      <h3
                        className={`text-xl font-medium font-inter leading-normal`}
                      >
                        {item.question}
                      </h3>
                      <button onClick={() => handleClick(item.id)}>
                        <X className='w-6 h-6' />
                      </button>
                    </div>
                    <p
                      className={`${
                        activeId === item.id && "text-[#424242]"
                      } text-base font-normal font-inter leading-relaxed`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
