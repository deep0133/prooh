import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { BarChart3, FileSpreadsheet, MapPin, Target } from "lucide-react";
import { useRef } from "react";

export default function AudienceMeasurement() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Animate heading
    gsap.from(".heading-container", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate cards
    gsap.from(cardsRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const cards = [
    {
      icon: Target,
      title: `Data-Driven Targeting`,
      description:
        "PDOOH's Media Planning Tool uses geospatial, POI, and traffic data to estimate audience impressions at specific locations",
      bgColor: "bg-[#ffeeee]",
      iconColor: "text-pink-500",
    },
    {
      icon: MapPin,
      title: "Location Insights",
      description:
        "Brands can target locations with the best audience reach using DOOH options, LTS scoring, historical site data, and direct pricing",
      bgColor: "bg-[#f1eeff]",
      iconColor: "text-purple-500",
    },
    {
      icon: BarChart3,
      title: "Programmatic Deployment",
      description:
        "Creatives are deployed on DOOH screens via a programmatic SSP, ensuring efficient and effective advertising",
      bgColor: "bg-[#f1ffaf]",
      iconColor: "text-yellow-500",
    },
    {
      icon: FileSpreadsheet,
      title: "Planning To Deployment",
      description:
        "Is tracked live on a client-accessible dashboard, measuring actual impressions against predictions",
      bgColor: "bg-[#e8f5ff]",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <section className='relative bg-white z-20 flex justify-center items-center min-h-svh'>
      <div ref={containerRef} className='responsiveWidth'>
        <div className='heading-container responsiveWidth mx-auto text-center mb-16'>
          <h1 className='text-4xl md:text-5xl text-[#232323] font-bold mb-4 leading-[51px] font-bricolage'>
            Audience Measurement
            <br />
            Through <span className='text-[#bababa]'>iot Device</span>
          </h1>

          {/* <p className='text-[#605d5d] text-base font-normal font-inter leading-loose'>
            Harness the power of data-driven campaigns to create meaningful
            connections with your audience, leaving
          </p> */}
          <p>
            <span className="text-[#605d5d] text-base font-normal font-['Inter'] leading-loose">
              Harness the power of data-driven campaig
            </span>
            <span className="text-[#605c5c] text-base font-normal font-['Inter'] leading-loose">
              ns to create meaningful connections with your audience, leaving{" "}
            </span>
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto'>
          {cards.map((card, index) => {
            return (
              <Card
                key={card.title}
                index={index}
                card={card}
                cardsRef={cardsRef}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Card = ({ card, cardsRef, index }) => {
  return (
    <div
      key={card.title}
      ref={(el) => el && (cardsRef.current[index] = el)}
      className={`${card.bgColor} rounded-[30px] h-72 hover:translate-y-2 translate-y-0 py-6 px-8 transition-shadow duration-300 shadow-${card.bgColor} hover:shadow-xl`}
    >
      <div className={card.iconColor}>
        <card.icon size={32} className='text-black' />
      </div>
      <h3 className='mb-3 mt-5 text-black text-2xl font-bold font-inter leading-7'>
        {card.title}
      </h3>
      <p className='text-black text-base font-normal font-inter leading-snug'>
        {card.description}
      </p>
    </div>
  );
};
