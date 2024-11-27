import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import LandingPage from "./LandingPage";
import ChooseUs from "./ChooseUs";

export default function ParallaxLayout() {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  const y = useTransform(scrollY, [0, contentHeight], [0, -contentHeight]);

  return (
    <>
      <LandingPage />
      <ChooseUs />
    </>
  );
}
