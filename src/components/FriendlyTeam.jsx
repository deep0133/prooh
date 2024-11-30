import chat from "../assets/comment.png";
import marker from "../assets/marker.png";
import phone from "../assets/phonecall.png";
import comments from "../assets/comments.png";

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

  return (
    <>
      <div
        style={{ zIndex: 9 }}
        className='min-h-svh relative pt-20 bg-black flex flex-col justify-center gap-6'
      >
        <div className='text-white responsiveWidth flex flex-col text-center gap-1 '>
          <span className='font-bricolage'>
            <span className=''>PROOH.AI</span>
          </span>
          <div className='text-center font-bricolage leading-[51px] capitalize font-bold text-5xl'>
            <span className='text-white'>Contact our friendly</span>
            <span className='text-[#b2b2b2] '> team</span>
          </div>
          <span className='text-center text-[#a4a4a4] text-xl font-normal font-inter'>
            Let us know how we can help.
          </span>
        </div>

        <div className='grid responsiveWidth lg:grid-cols-4 gap-4 md:w-4/5 mx-auto sm:grid-cols-2 grid-cols-1 '>
          {cardData.map((val, index) => {
            return (
              <>
                <Card
                  bg={val.bg}
                  title={val.title}
                  desc={val.desc}
                  buttonText={val.buttonText}
                  index={index}
                  icon={val.icon}
                  key={index}
                  email={val.email}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FriendlyTeam;

function Card({ icon, title, desc, buttonText, index, email }) {
  return (
    <div
      className={`${
        index === 3 ? "bg-white text-black" : "bg-[#2A2A2A]"
      } flex flex-col py-8 px-6 rounded-[23px]`}
    >
      <div className='p-2'>
        <div className=' flex flex-col gap-3 md:px-2'>
          <div className='mb-3'>
            <img src={icon} alt='' className='size-[23px]' />
          </div>
          <span
            className={`${
              index === 3 ? "text-black bg-inherit" : "text-white bg-inherit"
            } text-2xl font-bold font-inter`}
          >
            {title}
          </span>
          <span
            className={` ${
              index === 3 ? "text-black bg-inherit" : "text-white bg-inherit"
            } text-[15px] font-normal font-inter`}
          >
            {desc}
            <br />
            {email}
          </span>
        </div>

        <button
          className={`h-[42px] mt-7 w-full ${
            index === 3 ? "bg-black text-white" : "bg-[#2A2A2A] text-white"
          } py-3 rounded-[36px] border border-[#464646] text-[15px] text-nowrap font-bold font-inter capitalize justify-center items-center gap-2.5 inline-flex`}
        >
          {buttonText}
        </button>
        {/* <div
          className={`text-center border rounded-full  mx-auto flex justify-center items-center text-[12px] py-2 mt-14 ${
            index === 3 ? "bg-black text-white" : "bg-[#2A2A2A] text-white"
          }`}
        >
          <span>{buttonText}</span>
        </div> */}
      </div>
    </div>
  );
}
