import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Slider.css";

const AnimatedSlider = () => {
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(slidesRef.current, {
        xPercent: -100 * (slidesRef.current.length - 1),
        ease: "Power2.easeInOut",
        duration: 10,
        stagger: 0,
      });
    }, sliderRef);

    return () => ctx.revert();
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
