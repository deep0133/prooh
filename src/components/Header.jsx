import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {
  const headerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray("section");

    console.log(sections);
    sections?.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50px",
        end: "bottom 20%",
        onEnter: () => updateHeaderColors(section),
        onEnterBack: () => updateHeaderColors(section),
      });
    });

    function updateHeaderColors(section) {
      const bgColor = section.getAttribute("data-bg");
      const textColor = section.getAttribute("data-color");

      gsap.to(headerRef.current, {
        backgroundColor: bgColor,
        color: textColor,
        duration: 0.3,
        ease: "power1.out",
      });
    }
  }, []);

  return (
    <div className='relative h-20 z-50'>
      <header
        ref={headerRef}
        className={`h-20 flex fixed top-0 w-full z-50 items-center transition-all duration-300`}
      >
        <div className='responsiveWidth'>
          <h1 className='text-xl font-bold'>PROOH.AI</h1>
        </div>
      </header>
    </div>
  );
}
