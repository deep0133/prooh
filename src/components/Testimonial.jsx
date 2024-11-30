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

const testimonials = [
  {
    id: 1,
    name: "Akshay",
    company: "goodfeed.ai",
    message:
      "Harness the power of data-driven campaigns to create meaningful connections with your audience, leaving a lasting impression.",
    img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    company: "example.com",
    message:
      "Our platform ensures your data is secure and that campaigns deliver measurable results that resonate with your customers.",
    img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg",
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
    img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg",
  },
  {
    id: 5,
    name: "Jane Smith",
    company: "smithtech.io",
    message:
      "Empowering brands with the insights they need to outperform the competition and achieve remarkable growth.",
    img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg",
  },
  {
    id: 6,
    name: "David Patel",
    company: "innovate.ai",
    message:
      "From analytics to action, our campaigns are designed to maximize your brand’s potential and generate long-term value.",
    img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg",
  },
];

const TestimonialSlider = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveTestimonial(testimonials[swiper.realIndex]);
  };

  return (
    <div
      className='testimonial-slider py-16 relative border bg-white mx-auto'
      style={{ minHeight: "calc(100vh - 80px)", zIndex: 9 }}
    >
      <div className='responsiveWidth'>
        <center>
          <div className='flex gap-5 justify-center items-center'>
            <img src={imojiIcon} alt='' />
            <p className='text-center text-[#8b8b8b] text-2xl font-normal capitalize leading-[64px]'>
              feedbacks
            </p>
          </div>
          <h2 className='text-center'>
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
          <div className='arrow relative -top-12 -left-6'>
            <ChevronsLeft className='cursor-pointer  swiper-button-prev ' />
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
            centeredSlides={true}
            slidesPerView={5}
            onSlideChange={handleSlideChange}
            onActiveIndexChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className='card-container relative px-8 min-h-[300px] h-auto gap-5'
          >
            {testimonials.map((testimonial, index) => {
              // let isBeforeTwo = Math.abs(activeIndex - 2) % testimonials.length;
              // let isAfterTwo = Math.abs(activeIndex + 2) % testimonials.length;
              return (
                <SwiperSlide
                  key={testimonial.id}
                  className={`duration-200 border-2 rounded-lg transition-all ease-out ${
                    index === activeIndex ? " custome-scale blur-0" : ""
                  }`} // Apply blur to first and last slide
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
          <div className='arrow relative -top-12 left-6'>
            <ChevronsLeft className='rotate-180 cursor-pointer swiper-button-next' />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className='card-with-shape max-w-[1030px] content mx-auto col-span-full relative items-center gap-3 bg-white flex flex-col testimonial-shadow py-6'>
          <div className='absolute -top-2.5 inset-auto bg-white'>
            <img src={testimonialArrow} alt='' />
          </div>
          <div className='absolute top-2 left-14'>
            <img src={quoteIcon} className='size-16' alt='Quote Icon' />
          </div>
          <p className='max-w-[762px] text-center'>
            <span className='text-black text-2xl font-normal font-inter'>
              {activeTestimonial.message}
            </span>
          </p>
          <i>
            <img src={imojiIcon} alt='' />
          </i>
        </div>
      </div>
    </div>
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
        scale: 1.15,
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
        scale: 1,
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
  }, [activeIndex, index]); // Reapply when activeIndex changes

  return (
    <div
      ref={cardRef}
      className={`flex-col flex-shrink-0 cursor-pointer rounded-[46px] border-0 bg-neutral-50 flex justify-center items-center px-8 py-6`}
    >
      <img
        src={testimonial?.img}
        className='size-[74px] rounded-full object-cover'
        alt='Demo-User'
      />
      <div>
        <h3
          ref={nameRef}
          className='text-[#7a7a7a] mt-2  font-bricolage text-xl font-bold capitalize text-center'
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
