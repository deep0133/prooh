import { useRef, useState } from "react";
import { SquarePlus, SquareMinus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import rightArrowIcon from "../assets/rightArrow.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      "Our payment gateway supports all major platforms including web, mobile, and desktop applications. We provide comprehensive integration support for various frameworks and technologies.",
  },
  {
    id: 3,
    question: "Does Instapay provide international payments support?",
    answer:
      "Yes, Instapay provides robust international payment support with multiple currency options and competitive exchange rates.",
  },
  {
    id: 4,
    question:
      "Is there any setup fee or annual maintainance fee that I need to pay regularly?",
    answer:
      "We maintain a transparent pricing structure with no hidden fees. Contact our sales team for detailed information about our pricing plans.",
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState(0);
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Initialize GSAP animations
    gsap.set(".faq-answer", { height: 0, opacity: 0 });
    gsap.set(".faq-card", { scale: 0, opacity: 0 });

    const cards = containerRef.current.querySelectorAll(".card");
    gsap.fromTo(
      cards,
      {
        y: 300, // Start 100px to the right
        opacity: 0, // Start with 0 opacity
      },
      {
        y: 0, // End at original position
        opacity: 1, // End fully visible
        duration: 0.8, // Animation duration
        ease: "bounce.out", // Bounce effect
        stagger: 0.2, // Delay between each card
        scrollTrigger: {
          trigger: containerRef.current, // Animate on scroll into view
          start: "top 40%", // When top of container is at 80% of viewport
          end: "bottom 20%", // When bottom of container is at 20% of viewport
          toggleActions: "play none none none", // Play animation on enter
        },
      }
    );
  }, []);

  const handleQuestionClick = (id) => {
    if (activeId === id) {
      // Close the active question
      gsap.to(".faq-card", {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      setActiveId(null);
    } else {
      // Open the clicked question
      setActiveId(id);
      gsap.to(".faq-card", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      className='min-h-screen bg-[#181818] border-t py-16 border-[#31313139] relative'
      ref={containerRef}
    >
      <div className='responsiveWidth'>
        {/* FAQ Header */}
        <div className=' mb-8'>
          <div className='h-[30px] text-[#8b8b8b] text-2xl mb-8 font-normal font-bricolage capitalize leading-[64px]'>
            <span className='text-yellow-500'>😊</span>
            <span>F.A.Q</span>
          </div>
          <div>
            <span className='text-white text-5xl font-bold font-bricolage capitalize leading-[51px]'>
              here are the some <br />
              common question about{" "}
            </span>
            <span className='text-[#808080] text-5xl font-bold font-bricolage capitalize leading-[51px]'>
              prooh
            </span>
          </div>
        </div>

        <div className='list-and-cta grid grid-cols-2 gap-28'>
          {/* FAQ List */}
          <div className='mx-auto relative'>
            {faqData.map((item) => (
              <div key={item.id} className='mb-4 card'>
                <button
                  onClick={() => handleQuestionClick(item.id)}
                  className={`w-full text-left py-4 rounded-lg relative flex items-center justify-between ${
                    activeId === item.id ? "" : ""
                  } transition-colors duration-200`}
                >
                  <span
                    className={`text-white font-semibold pr-10 font-inter leading-normal ${
                      activeId === item.id ? "text-xl" : ""
                    }`}
                  >
                    {item.question}
                  </span>
                  {activeId === item.id ? (
                    <SquareMinus
                      className={`size-6 ${
                        activeId === item.id ? "text-white" : "text-[#858585]"
                      } flex-shrink-0`}
                    />
                  ) : (
                    <SquarePlus className='size-6 text-blue-400 flex-shrink-0' />
                  )}
                </button>
                <hr className='border border-[#5b5b5b] h-0' />
              </div>
            ))}

            {/* Floating Answer Card */}
            {activeId && (
              <div
                ref={cardRef}
                className='faq-card block sm:hidden fixed md:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:top-0 md:right-0 md:left-auto bg-white rounded-2xl p-6 shadow-xl w-[90%] md:w-[400px] z-10'
              >
                <h3 className='text-gray-900 font-semibold mb-4'>
                  {faqData.find((item) => item.id === activeId)?.question}
                </h3>
                <p className='text-gray-600'>
                  {faqData.find((item) => item.id === activeId)?.answer}
                </p>
              </div>
            )}
          </div>

          <div className='list-data hidden sm:block'>
            <div
              ref={cardRef}
              className='faq-card bg-white rounded-2xl p-6 shadow-xl z-10'
            >
              <h3 className='text-black text-2xl font-semibold font-inter leading-normal'>
                {faqData.find((item) => item.id === activeId)?.question}
              </h3>
              <p className='text-black text-xl font-normal font-inter mt-3 leading-relaxed'>
                {faqData.find((item) => item.id === activeId)?.answer}
              </p>
            </div>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className='mx-auto mt-16 px-[52px] py-[41px] flex justify-between bg-[#202020] rounded-[34px] p-8 text-center'>
          <div>
            <div>
              <span className='text-white text-[32px] font-semibold font-bricolage capitalize leading-[41.38px]'>
                Ready to Stand Out
              </span>
              <span className='text-black text-[32px] font-semibold font-bricolage capitalize leading-[41.38px]'>
                {" "}
              </span>
              <span className='text-[#585858] text-[32px] font-semibold font-bricolage capitalize leading-[41.38px]'>
                With AI-Driven Approach?
              </span>
            </div>
          </div>
          <button className='flex px-6 py-3 gap-3 items-center rounded-full bg-white   transition-colors duration-200'>
            <span>
              <img src={rightArrowIcon} alt='' />
            </span>
            <span className='text-center text-black text-base font-bold font-inter capitalize leading-tight'>
              Try For Free
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
