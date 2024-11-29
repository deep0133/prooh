import { ChevronsLeft, Quote, Smile } from "lucide-react";
export default function Testimonial() {
  return (
    <section
      className='testimonial font-bricolage relative py-20 bg-white z-30 min-h-svh border'
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className='responsiveWidth'>
        <center>
          {" "}
          <p className='text-[#78bbad]'>Feedbacks</p>
          <h2 className='text-5xl font-bold leading-tight'>
            Bringing The Value Across <br /> Different{" "}
            <span className='text-[#78bbad]'>Brands</span>
          </h2>
        </center>
        <div className='testimonial-slider max-w-4xl mx-auto'>
          <div className=' flex gap-5 mt-5 justify-center items-center'>
            <div className='arrow'>
              <ChevronsLeft className='cursor-pointer' />
            </div>
            <div className='card-container relative p-6 grid grid-cols-4 justify-center gap-5'>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className='arrow'>
              <ChevronsLeft className='rotate-180 cursor-pointer' />
            </div>
          </div>

          <div className='content col-span-full relative items-center gap-3 flex flex-col testimonial-shadow py-6'>
            <div className='absolute top-2 left-14'>
              <Quote className='size-16 opacity-20 fill-black rotate-[-145deg]' />
            </div>
            <p className='text-center px-24'>
              Harness the power of data-driven campaigns to create meaningful
              connections with your audience, leaving
            </p>
            <i>
              <Smile />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = () => {
  return (
    <div className=' flex-col group flex-shrink-0 cursor-pointer bg-neutral-100 image-container rounded-lg flex justify-center items-center px-8 py-6'>
      <img
        src='https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg'
        className='size-16 rounded-full object-cover'
        alt='Demo-User'
      />
      <div>
        <h3 className='text-[#305850] text-center font-medium '>Akshay Raaz</h3>
        <p className='text-[#6fb6a7]'>goodfeed.ai</p>
      </div>
    </div>
  );
};
