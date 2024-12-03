import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { ChevronsLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { gsap } from "gsap";
import quoteIcon from "../assets/quote.png";
import testimonialArrow from "../assets/testimonialArrow.png";
import imojiIcon from "../assets/emoji.png";
import TestimonialImage1 from "../assets/testimonial1.png";
import TestimonialImage2 from "../assets/testimonial2.png";
import TestimonialImage3 from "../assets/testimonial3.png";
import { useGSAP } from "@gsap/react";

const testimonials = [
  {
    id: 1,
    name: "Akshay",
    company: "goodfeed.ai",
    message:
      "Harness the power of data-driven campaigns to create meaningful connections with your audience, leaving a lasting impression.",
    img: TestimonialImage1,
  },
  {
    id: 2,
    name: "John Doe",
    company: "example.com",
    message:
      "Our platform ensures your data is secure and that campaigns deliver measurable results that resonate with your customers.",
    img: TestimonialImage2,
  },
  {
    id: 3,
    name: "Jane Smith",
    company: "smithtech.io",
    message:
      "Empowering brands with the insights they need to outperform the competition and achieve remarkable growth.",
    img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg",
  },
  {
    id: 4,
    name: "David Patel",
    company: "innovate.ai",
    message:
      "From analytics to action, our campaigns are designed to maximize your brand’s potential and generate long-term value.",
    img: TestimonialImage3,
  },
  {
    id: 5,
    name: "Jane Smith",
    company: "smithtech.io",
    message:
      "Empowering brands with the insights they need to outperform the competition and achieve remarkable growth.",
    img: TestimonialImage1,
  },
  {
    id: 6,
    name: "David Patel",
    company: "innovate.ai",
    message:
      "From analytics to action, our campaigns are designed to maximize your brand’s potential and generate long-term value.",
    img: TestimonialImage2,
  },
];

const TestimonialSlider = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  const [activeIndex, setActiveIndex] = useState(0);
  const textRef = useRef(null);

  useGSAP(() => {
    const textElement = textRef.current;
    const text = activeTestimonial.message;

    textElement.innerHTML =
      text
        .split("")
        .map((char) =>
          char === " "
            ? `<span style="display: inline-block; width: 0.3em; opacity: 0;">&nbsp;</span>` // Add space as a span
            : `<span style="display: inline-block; opacity: 0;">${char}</span>`
        )
        .join("") +
      `<span style="display: flex; width:100%; justify-content :center; margin-top:10px; opacity: 0;"> <br/> <img style="width:34px; height:34px;" src=${imojiIcon} alt='' /></span>`;

    // Select all the spans
    const characters = textElement.querySelectorAll("span");

    gsap.to(characters, {
      color: "#000000", // End color
      opacity: 1, // Make it visible
      duration: 0.5, // Animation duration per character
      ease: "power2.out",
      stagger: 0.03, // Delay between each character animation
    });
  }, [activeTestimonial]);

  const handleSlideChange = (swiper) => {
    setActiveTestimonial(testimonials[swiper.realIndex]);
  };

  return (
    <section
      data-bg='white'
      data-color='black'
      className='testimonial-slider rounded-b-[58px] py-16 relative text-black bg-white mx-auto'
      style={{ minHeight: "calc(100vh - 80px)", zIndex: 9 }}
    >
      <div
        data-bg='white'
        data-color='black'
        className='responsiveWidth relative bg-white'
      >
        <center>
          <div className='flex gap-5 justify-center items-baseline'>
            <img src={imojiIcon} alt='' className='' />
            <p className='text-center text-[#8b8b8b] text-2xl font-normal capitalize leading-[64px]'>
              feedbacks
            </p>
          </div>
          <h2 className='text-center font-bricolage mb-6'>
            <span className='text-[#232323] text-5xl font-bold capitalize leading-[51px]'>
              bringing the value across <br /> different{" "}
            </span>
            <span className='text-[#b8b8b8] text-5xl font-bold capitalize leading-[51px]'>
              brands
            </span>
          </h2>
        </center>
        <div className='flex gap-5 py-3 max-w-[1030px] mx-auto justify-center items-center'>
          {/* Left Arrow */}
          <div className='arrow relative -left-6'>
            <ChevronsLeft className='cursor-pointer stroke-black  swiper-button-prev ' />
          </div>

          {/* Swiper Component */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            spaceBetween={20}
            initialSlide={0}
            // centeredSlides={true}
            slidesPerView={4}
            onSlideChange={handleSlideChange}
            onActiveIndexChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className='card-container relative min-h-[250px] gap-5'
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              return (
                <SwiperSlide
                  key={testimonial.id}
                  className={`duration-200 transition-all pt-2 ease-out ${
                    index === activeIndex
                      ? " custome-scaled"
                      : "custome-without-scale"
                  }`} // Apply blur to first and last slide
                  style={{
                    filter: isActive ? "none" : "grayscale(100%)",
                    transition: "filter 0.3s ease",
                  }}
                >
                  <Card
                    testimonial={testimonial}
                    index={index || 0}
                    activeIndex={activeIndex}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Right Arrow */}
          <div className='arrow relative left-6'>
            <ChevronsLeft className='rotate-180 stroke-black cursor-pointer swiper-button-next' />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className='card-with-shape content mx-auto col-span-full relative items-center gap-3 bg-white flex flex-col testimonial-shadow py-6'>
          <div className='absolute -top-2.5 left-36 bg-white'>
            <img src={testimonialArrow} alt='' />
          </div>
          <div className='absolute top-2 left-14'>
            <img src={quoteIcon} className='size-16' alt='Quote Icon' />
          </div>
          <p
            ref={textRef}
            className='max-w-[762px] text-center text-black text-2xl font-normal font-inter'
          >
            {activeTestimonial.message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

const Card = ({ testimonial, index, activeIndex }) => {
  const cardRef = useRef(null);
  const nameRef = useRef(null);
  const companyRef = useRef(null);

  useEffect(() => {
    // Apply the effect to the active card automatically when the active index changes
    if (index === activeIndex) {
      gsap.to(cardRef.current, {
        border: "0.2px solid rgb(128, 125, 125)",
        boxShadow: "6px 8px 0px black",
        scale: 1,
        borderRadius: "30px",
        duration: 0.3,
        ease: "ease-out",
      });

      gsap.to([nameRef.current, companyRef.current], {
        color: "#353535",
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      // Reset active card effect if it's not the active card
      gsap.to(cardRef.current, {
        border: "0.2px solid transparent",
        boxShadow: "none",
        scale: 0.8,
        borderRadius: "10px",
        duration: 0.3,
        ease: "ease-out",
      });

      gsap.to([nameRef.current, companyRef.current], {
        color: "#9b9393", // Default color
        duration: 0.3,
        ease: "power3.out",
      });
    }
  }, [activeIndex, index]);

  return (
    <div
      ref={cardRef}
      className={`flex-col flex-shrink-0 font-bricolage cursor-pointer rounded-[46px] border-0 bg-neutral-50 flex justify-center items-center px-8 py-6`}
    >
      <img
        src={testimonial?.img}
        className='size-[74px] rounded-full object-cover'
        alt='Demo-User'
      />
      <div>
        <h3
          ref={nameRef}
          className='text-[#7a7a7a] mt-2 text-xl font-bold capitalize text-center'
        >
          {testimonial?.name}
        </h3>
        <p
          ref={companyRef}
          className='text-[#9b9393] text-center text-base font-normal font-inter leading-[38px]'
        >
          {testimonial?.company}
        </p>
      </div>
    </div>
  );
};
