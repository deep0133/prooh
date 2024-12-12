// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ChevronDown } from "lucide-react";
// import { useRef, useState } from "react";

// export default function AnimatedFAQ() {
//   const containerRef = useRef(null);
//   const headerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(null);

//   useGSAP(() => {
//     // Initial animation for the entire section
//     gsap.from(containerRef.current, {
//       opacity: 0,
//       y: 100,
//       duration: 1,
//       ease: "power3.out",
//     });

//     // Header animation
//     gsap.from(headerRef.current, {
//       opacity: 0,
//       y: -50,
//       duration: 1,
//       delay: 0.5,
//       ease: "power3.out",
//     });

//     // Stagger animation for FAQ items
//     gsap.from(".faq-item", {
//       opacity: 0,
//       x: -50,
//       duration: 0.8,
//       stagger: 0.2,
//       delay: 1,
//       ease: "power3.out",
//     });
//   }, []);

//   const handleAccordionClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   useGSAP(() => {
//     gsap.to(".faq-content", {
//       height: 0,
//       duration: 0.5,
//       ease: "power3.out",
//     });

//     if (activeIndex !== null) {
//       gsap.to(`.faq-content-${activeIndex}`, {
//         height: "auto",
//         duration: 0.5,
//         ease: "power3.out",
//       });
//     }
//   }, [activeIndex]);

//   const faqItems = [
//     {
//       question:
//         "Do I need to pay to Instapay even when there is no transaction going on in my business?",
//       answer:
//         "DOOH campaigns should adapt creative content based on varying factors like location, time (day vs. night), or weather (sunny vs. rainy). This ensures that ads resonate with the audience in different contexts, driving higher engagement rates.",
//     },
//     {
//       question: "What platforms does Instapay payment gateway support?",
//       answer:
//         "Our payment gateway supports all major platforms including web, mobile, and desktop applications. We provide comprehensive SDK and API documentation for seamless integration.",
//     },
//     {
//       question: "Does Instapay provide international payments support?",
//       answer:
//         "Yes, Instapay supports international payments across multiple currencies with competitive exchange rates and secure transaction processing.",
//     },
//   ];

//   return (
//     <section
//       ref={containerRef}
//       data-bg='#181818'
//       data-color='white'
//       className='min-h-svh border-4 border-black z-10 relative bottom-0  bg-[#181818] p-6 text-white'
//     >
//       {/* Header Section */}
//       <div
//         ref={headerRef}
//         className='mx-auto mb-20 max-w-4xl rounded-2xl relative bg-[#181818] p-8'
//       >
//         <div className='flex items-center justify-between'>
//           <div>
//             <h1 className='text-2xl font-bold sm:text-3xl'>
//               Ready To Stand Out
//             </h1>
//             <h2 className='text-xl text-gray-400 sm:text-2xl'>
//               With AI-Driven Approach?
//             </h2>
//             <p className='mt-2 text-sm text-gray-500'>
//               It Started With Our AI-Driven Tool And Unlock The Competitive
//               Advantage Of Real-Time Audience Insights.
//             </p>
//           </div>
//           <button className='rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95'>
//             Try For Free
//           </button>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className='mx-auto max-w-4xl'>
//         <div className='mb-8 flex items-center gap-3'>
//           <div className='h-2 w-2 rounded-full bg-yellow-400' />
//           <h3 className='text-gray-400'>F.A.Q</h3>
//         </div>
//         <h2 className='mb-12 text-4xl font-bold'>Most Asked Questions</h2>

//         {/* FAQ Items */}
//         <div className='space-y-4'>
//           {faqItems.map((item, index) => (
//             <div
//               key={index}
//               className='faq-item overflow-hidden rounded-lg bg-zinc-900'
//             >
//               <div
//                 className='flex cursor-pointer items-center justify-between p-6'
//                 onClick={() => handleAccordionClick(index)}
//               >
//                 <h3 className='text-lg font-medium'>{item.question}</h3>
//                 <ChevronDown
//                   className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
//                     activeIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </div>
//               <div
//                 className={`faq-content faq-content-${index} overflow-hidden bg-white`}
//               >
//                 <p className='p-6 text-black'>{item.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import gsap from "gsap";
import smileIcon from "../assets/emoji.png";
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

  useEffect(() => {
    // Initialize GSAP context
    const ctx = gsap.context(() => {}, containerRef);
    return () => ctx.revert();
  }, []);

  const handleClick = (id) => {
    if (activeId === id) {
      // Close current item
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
      // Hide clicked question
      gsap.to(questionsRef.current[id - 1], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      });
      // Close previous content if any
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
      // Open new content
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
      className='min-h-svh z-10 relative bg-black text-white p-8'
      ref={containerRef}
    >
      <div className='responsiveWidth mx-auto grid md:grid-cols-2 gap-5'>
        <div>
          <div className='flex items-center gap-2'>
            <span>
              <img src={smileIcon} className='w-6 h-6' />
            </span>
            <span className='text-center text-[#8b8b8b] text-2xl font-normal font-bricolage  capitalize leading-[64px]'>
              F.A.Q
            </span>
          </div>
          <h1 className='text-white text-[64px] font-bold font-bricolage capitalize leading-[62px]'>
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
  );
}
