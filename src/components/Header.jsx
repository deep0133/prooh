// import { useRef } from "react";
// export default function Header() {
//   const headerRef = useRef(null);

//   return (
//     <div className='h-20  z-50 w-full bg-transparent   fixed top-0 '>
//       <header
//         ref={headerRef}
//         className={`h-20 flex top-0  w-auto mx-2  backdrop-blur-sm bg-black/60 rounded-b-[24px] text-white z-50 items-center transition-all duration-300`}
//       >
//         <div className='responsiveWidth flex justify-between items-center'>
//           <h1 className='text-xl font-bold'>PROOH.AI</h1>
//           <ul className='flex gap-5 items-center font-inter'>
//             {navLinks.map((link, index) => (
//               <li
//                 key={index}
//                 className='text-center text-base font-normal font-switzer capitalize leading-tight tracking-tight'
//               >
//                 {link}
//               </li>
//             ))}
//             <li className="text-center border-2 rounded-full px-8 py-2 text-white text-base font-normal font-['Switzer'] capitalize leading-tight tracking-tight">
//               Login
//             </li>
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// }

// const navLinks = ["Home", "Research", "About Us", "Contact Us", "Help"];

"use client";
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const navLinks = ["Home", "Research", "About Us", "Contact Us", "Help"];

export default function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 724; // Add this line
    if (menuRef.current && menuItemsRef.current.length && isMobile) {
      // Modify this line
      const menuBg = menuRef.current;
      const menuItems = menuItemsRef.current;

      if (menuOpen) {
        // Open menu animation (only for mobile)
        gsap.to(menuBg, {
          height: "auto",
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.fromTo(
          menuItems,
          {
            y: 50,
            opacity: 0,
            rotation: -180,
            scale: 0.5,
          },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          }
        );
      } else {
        // Close menu animation (only for mobile)
        gsap.to(menuItems, {
          y: 50,
          opacity: 0,
          rotation: -180,
          scale: 0.5,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.in(1.7)",
          onComplete: () => {
            gsap.to(menuBg, {
              height: 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
          },
        });
      }
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      if (!isMobile && menuRef.current) {
        gsap.set(menuRef.current, { clearProps: "all" });
        gsap.set(menuItemsRef.current, { clearProps: "all" });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='h-20 z-50 w-full bg-transparent fixed top-0'>
      <header
        ref={headerRef}
        className={`h-20 flex top-0 w-full bg-black text-white z-50 items-center transition-all duration-300`}
      >
        <div className='responsiveWidth flex justify-between items-center w-full px-4 sm:px-6 lg:px-8'>
          <h1 className='text-xl font-bold'>PROOH.AI</h1>

          {/* Hamburger Menu for Mobile */}
          <button
            className='lg:hidden p-2 text-white focus:outline-none'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon
                    : "M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5" // Hamburger icon
                }
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            ref={menuRef}
            className={`lg:flex flex-col lg:flex-row gap-5 items-center lg:gap-5 font-inter absolute lg:static top-full lg:top-auto left-0 w-full lg:w-auto bg-black/90 lg:bg-transparent p-4 lg:p-0 rounded-b-lg transition-all duration-300 ${
              menuOpen ? "flex" : "hidden lg:flex"
            }`}
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                ref={(el) => (menuItemsRef.current[index] = el)}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className='text-center text-base font-normal font-switzer capitalize leading-tight tracking-tight hover:text-gray-300 transition-colors duration-200'
              >
                {link}
              </a>
            ))}
            <a
              ref={(el) => (menuItemsRef.current[navLinks.length] = el)}
              href='#login'
              className="text-center border-2 rounded-full px-8 py-2 text-white text-base font-normal font-['Switzer'] capitalize leading-tight tracking-tight hover:bg-white hover:text-black transition-all duration-200"
            >
              Login
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
