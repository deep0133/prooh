import { useRef } from "react";
import { Fragment, useEffect } from "react";
// import BallFalling from "./components/BallFalling";
import Compaign from "./components/Campaign";
import ChooseUs from "./components/ChooseUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import FriendlyTeam from "./components/FriendlyTeam";
import FAQSection from "./components/FAQSesstion";
import { gsap } from "gsap";
import HorizontalScroll from "./components/HorizontalScroll";
export default function App() {
  const cursorRef = useRef(null);
  useEffect(() => {
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

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <Fragment className='min-w-[1300px] overflow-auto'>
      <Header />
      {/* <BallFalling /> */}
      <div className='min-h-screen'>
        <Hero />
      </div>
      <Compaign />
      <ChooseUs />
      <Testimonial />
      <FriendlyTeam />
      <HorizontalScroll />
      <FAQSection />
      <div
        ref={cursorRef}
        className='fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none mix-blend-difference'
        style={{ transform: "translate(-50%, -50%)", zIndex: 9999 }}
      ></div>
    </Fragment>
  );
}
