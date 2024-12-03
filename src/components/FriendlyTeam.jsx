import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import chat from "../assets/svgs/comment.svg";
import marker from "../assets/svgs/marker.svg";
import phone from "../assets/svgs/phonecall.svg";
import comments from "../assets/svgs/comments.svg";
import logo from "../assets/logo.png";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function FriendlyTeam() {
  const cardData = [
    {
      icon: chat,
      title: "Chat to sales",
      desc: "Speak to our friendly team.",
      email: "sales@prooh.ai",
      buttonText: "Mail Now",
    },
    {
      icon: phone,
      title: "Call us",
      desc: "Speak to our friendly team.",
      email: "sales@prooh.ai",
      buttonText: "Call Now",
    },
    {
      icon: comments,

      title: "Chat to support",
      desc: "Speak to our friendly team.",
      email: "sales@prooh.ai",
      buttonText: "Chat Now",
    },
    {
      icon: marker,
      title: "Visit us",
      desc: "Speak to our friendly team.",
      email: "googlemap/prooh.ai",
      buttonText: "Get Direction",
      isLight: true,
    },
  ];
  useGSAP(() => {
    const cards = friendlyTeamRef.current.querySelectorAll(".card");

    gsap.fromTo(
      cards,
      {
        x: 500, // Start 100px to the right
        opacity: 0, // Start with 0 opacity
      },
      {
        x: 0, // End at original position
        opacity: 1, // End fully visible
        duration: 0.8, // Animation duration
        ease: "bounce.out", // Bounce effect
        stagger: 0.2, // Delay between each card
        scrollTrigger: {
          trigger: friendlyTeamRef.current, // Animate on scroll into view
          start: "top 40%", // When top of container is at 80% of viewport
          end: "bottom 20%", // When bottom of container is at 20% of viewport
          toggleActions: "play none none reverse", // Play animation on enter
        },
      }
    );
  }, []);

  const friendlyTeamRef = useRef(null);

  return (
    <>
      <section
        ref={friendlyTeamRef}
        data-bg='#181818'
        data-color='white'
        style={{ zIndex: 9 }}
        className='min-h-svh relative bg-[#181818]  text-white flex flex-col justify-center gap-6'
      >
        <div className='bg-[#181818] min-h-svh relative text-white flex flex-col justify-center gap-6'>
          <div className='text-white responsiveWidth flex flex-col text-center gap-1 '>
            <div className='text-center justify-center flex'>
              <img src={logo} alt='' className='h-[26px]' />
            </div>
            <div className='text-center font-bricolage leading-[51px] capitalize font-bold text-5xl'>
              <span className='text-white'>Contact our friendly</span>
              <span className='text-[#b2b2b2] '> team</span>
            </div>
            <span className='text-center text-[#a4a4a4] mt-2 text-xl font-normal font-inter'>
              Let us know how we can help.
            </span>
          </div>

          <div className='grid responsiveWidth lg:grid-cols-4 gap-4 md:w-4/5 mx-auto sm:grid-cols-2 grid-cols-1 mt-5 '>
            {cardData.map((val, index) => {
              return (
                <>
                  <Card
                    key={index}
                    title={val.title}
                    desc={val.desc}
                    buttonText={val.buttonText}
                    index={index}
                    icon={val.icon}
                    email={val.email}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default FriendlyTeam;

// function Card({ icon, title, desc, buttonText, index, email }) {
//   return (
//     <div
//       className={`${
//         index === 3 ? "bg-white text-black" : "bg-[#2A2A2A]"
//       } flex flex-col py-8 px-6 rounded-[23px] card`}
//     >
//       <div className='p-2'>
//         <div className=' flex flex-col gap-3 md:px-2'>
//           <div className='mb-3'>
//             <img src={icon} alt='' className='size-[23px]' />
//           </div>
//           <span
//             className={`${
//               index === 3 ? "text-black bg-inherit" : "text-white bg-inherit"
//             } text-2xl font-bold font-inter`}
//           >
//             {title}
//           </span>
//           <span
//             className={` ${
//               index === 3 ? "text-black bg-inherit" : "text-white bg-inherit"
//             } text-[15px] font-normal font-inter`}
//           >
//             {desc}
//             <br />
//             <span className='font-medium'> {email}</span>
//           </span>
//         </div>

//         <a
//           href={`mailto:${email}`}
//           className={`h-[42px] mt-7 w-full ${
//             index === 3 ? "bg-black text-white" : "bg-[#2A2A2A] text-white"
//           } py-3 rounded-[36px] border border-[#464646] text-[15px] text-nowrap font-bold font-inter capitalize justify-center items-center gap-2.5 inline-flex`}
//         >
//           {buttonText}
//         </a>
//       </div>
//     </div>
//   );
// }

function Card({ icon, title, desc, buttonText, email }) {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      backgroundColor: "white", // Hover background color
      color: "#2A2A2A", // Text color on hover
      duration: 0.3, // Animation duration
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      backgroundColor: "#2A2A2A", // Original background color for all cards
      color: "white", // Original text color
      duration: 0.3, // Animation duration
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='flex flex-col py-8 px-6 bg-[#2A2A2A] rounded-[23px] group card' // Default background for all cards
    >
      <div className='p-2'>
        <div className='flex flex-col gap-3 md:px-2'>
          <div className='mb-3'>
            <img src={icon} alt='' className='size-[23px] group-hover:invert' />
          </div>
          <span className='text-2xl font-bold font-inter'>{title}</span>
          <span className='text-[15px] font-normal font-inter'>
            {desc}
            <br />
            <span className='font-medium'>{email}</span>
          </span>
        </div>

        <a
          href={`mailto:${email}`}
          className='h-[42px] mt-7 w-full py-3 rounded-[36px] group-hover:text-[#FFFFFF] group-hover:bg-[#181818] border border-[#464646] text-[15px] text-nowrap font-bold font-inter capitalize justify-center items-center gap-2.5 inline-flex'
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
