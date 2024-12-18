import { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {
  const headerRef = useRef(null);

  // useGSAP(() => {
  //   const sections = gsap.utils.toArray("section");

  //   console.log(sections);
  //   sections?.forEach((section) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top 50px",
  //       end: "bottom 20%",
  //       onEnter: () => updateHeaderColors(section),
  //       onEnterBack: () => updateHeaderColors(section),
  //     });
  //   });

  //   function updateHeaderColors(section) {
  //     const bgColor = section.getAttribute("data-bg");
  //     const textColor = section.getAttribute("data-color");

  //     gsap.to(headerRef.current, {
  //       backgroundColor: bgColor,
  //       color: textColor,
  //       duration: 0.3,
  //       ease: "power1.out",
  //     });
  //   }
  // }, []);

  return (
    <div className='h-20  z-50 w-full bg-transparent   fixed top-0 '>
      <header
        ref={headerRef}
        className={`h-20 flex top-0  w-auto mx-2  backdrop-blur-lg bg-blue-300/50 rounded-b-[24px] text-white z-50 items-center transition-all duration-300`}
      >
        <div className='responsiveWidth flex justify-between items-center'>
          <h1 className='text-xl font-bold'>PROOH.AI</h1>
          <ul className='flex gap-5 items-center'>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className='text-center text-[#878787] text-base font-normal font-switzer capitalize leading-tight tracking-tight'
              >
                {link}
              </li>
            ))}
            <li className="text-center border-2 rounded-full px-8 py-2 text-white text-base font-normal font-['Switzer'] capitalize leading-tight tracking-tight">
              Login
            </li>
            {/* <li className="text-center text-[#878787] text-base font-normal font-['Switzer'] capitalize leading-tight tracking-tight">
                Home
              </li>
              <li className="text-center text-white text-sm font-bold font-['Switzer'] capitalize leading-[18.10px] tracking-tight">
                Research
              </li> */}
          </ul>

          {/* <div className='w-[118px] h-5 text-center text-white text-base font-semibold font-inter capitalize leading-tight tracking-tight'>
              plan campaign
            </div>
            <div className='w-[123px] h-11 px-[39.76px] py-[8.98px] bg-white rounded-[71px] justify-center items-center gap-[12.83px] inline-flex'>
              <div className="w-10 text-center text-black text-sm font-semibold font-['Inter'] capitalize leading-[18.10px] tracking-tight">
                login
              </div>
            </div> */}
        </div>
      </header>
    </div>
  );
}

const navLinks = ["Home", "Research", "About Us", "Contact Us", "Help"];
