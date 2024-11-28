import { ChevronsLeft } from "lucide-react";

export default function Testimonial() {
  return (
    <section className='testimonial font-bricolage bg-white py-16'>
      <div className='responsiveWidth'>
        <center>
          {" "}
          <p className='text-[#78bbad]'>Feedbacks</p>
          <h2 className='text-5xl font-bold leading-tight'>
            Bringing The Value Across <br /> Different{" "}
            <span className='text-[#78bbad]'>Brands</span>
          </h2>
        </center>
        <div className='flex gap-5 mt-5 justify-center items-center'>
          <div className='arrow'>
            <ChevronsLeft />
          </div>
          <div className='card-container grid grid-cols-4 gap-6'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className='arrow'>
            <ChevronsLeft className='rotate-180' />
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = () => {
  return (
    <div className='card flex-col group bg-neutral-100 image-container rounded-lg flex justify-center items-center px-8 py-6'>
      <img
        src='https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg'
        className='size-16 rounded-full object-cover'
        alt='Demo-User'
      />
      <div>
        <h3 className='text-[#305850] font-medium '>Akshay Raaz</h3>
        <p className='text-[#6fb6a7]'>goodfeed.ai</p>
      </div>
    </div>
  );
};
