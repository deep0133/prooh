import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import AnimatedSearch from "./components/AnimatedSearch";
import Compaign from "./components/Campaign";
// import ChooseUs from "./components/ChooseUs";
import FAQSection from "./components/FAQSesstion";
import FriendlyTeam from "./components/FriendlyTeam";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HorizontalScroll from "./components/HorizontalScroll";
import LogoMarquee from "./components/LogoMarquee";
import ScrollScaleCard from "./components/scroll/ScrollScaleCard";
import { AnimatedFooter } from "./components/AnimatedFooter";
import Testimonial from "./components/Testimonial";
import AudienceMeasurement from "./components/AudienceMeasurement";
gsap.registerPlugin(ScrollTrigger, TextPlugin);
export default function App() {
  const cursorRef = useRef(null);
  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Mobile width threshold

    // Hide cursor on mobile
    if (isMobile) {
      cursorRef.current.style.display = "none";
      return; // Skip adding listeners for mobile
    }

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.1,
        ease: "power1.out",
      });
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;

      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.1,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
  return (
    <div className='w-full overflow-y-auto overflow-x-hidden'>
      <Header />
      <Hero />

      <Compaign />
      <LogoMarquee />
      <ScrollScaleCard />
      <AudienceMeasurement />
      <AnimatedSearch />
      {/* <ChooseUs /> */}
      <HorizontalScroll />
      <FriendlyTeam />
      <Testimonial />
      <FAQSection />
      <AnimatedFooter />

      <div
        ref={cursorRef}
        className='fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none mix-blend-difference'
        style={{ transform: "translate(-50%, -50%)", zIndex: 9999 }}
      ></div>
    </div>
  );
}
