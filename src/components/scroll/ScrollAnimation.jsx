import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const ScrollAnimation = () => {
  const imagesRef = useRef([]);

  useGSAP(() => {
    const images = gsap.utils.toArray(imagesRef.current);

    images.forEach((panel, i) => {
      let scale = 1;

      if (i !== images.length - 1) {
        scale = 0.9 + 0.025 * i;
      }

      gsap.to(panel, {
        scale: scale,
        transformOrigin: "top center",
        ease: "none",

        scrollTrigger: {
          trigger: panel,

          start: "top " + (70 + 40 * i),
          end: "bottom +=650px",
          endTrigger: ".end",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    });
  }, []);

  const data = [
    {
      id: 1,
      title: "title 1",
      description: "description 1",
    },
    {
      id: 2,
      title: "title 2",
      description: "description 2",
    },
    {
      id: 3,
      title: "title 3",
      description: "description 3",
    },
    {
      id: 4,
      title: "title 4",
      description: "description 4",
    },
  ];

  return (
    <div className='flex z-20 relative min-h-svh px-2 bg-white flex-col gap-12 mx-auto w-full py-12'>
      {data.map((value, index) => (
        <div
          key={index}
          ref={(el) => (imagesRef.current[index] = el)}
          style={{
            background: index % 2 !== 0 ? "white" : "black",
            color: index % 2 !== 0 ? "black" : "white",
          }}
          className=' w-full h-svh shadow-lg border-2 flex-col border-yellow-200 rounded-t-[24px] flex justify-center items-center rounded-b-[24px] '
        >
          {" "}
          <h1>{value.title}</h1>
          <p>{value.description}</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
