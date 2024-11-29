import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Slider.css"; // Add styles for your slider

const AnimatedSlider = () => {
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 }); // Infinite loop
      tl.to(slidesRef.current, {
        xPercent: -100 * (slidesRef.current.length - 1), // Move through all slides
        ease: "Power2.easeInOut", // Smooth easing
        duration: 10, // Duration for the full animation
        stagger: 0,
      });
    }, sliderRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div className='slider' ref={sliderRef}>
      <div className='slides'>
        {[1, 2, 3, 4].map((slide, index) => (
          <div
            className='slide'
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
          >
            Slide {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSlider;
