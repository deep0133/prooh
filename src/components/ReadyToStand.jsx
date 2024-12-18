import { ArrowRight } from "lucide-react";

export default function ReadyToStand() {
  return (
    <div className='relative z-20 w-auto mx-[8px] pb-3 bg-white'>
      <div className='bg-black rounded-t-[24px] rounded-b-[24px]  py-12 '>
        <div className='responsiveWidth  flex md:flex-row flex-col md:justify-between md:gap-0 gap-5 md:items-center bg-white py-5 min-h-[174px] px-[52px] rounded-[34px]'>
          <div className=''>
            <div>
              <span className='text-black text-[32px] font-semibold font-bricolage capitalize leading-[41.38px]'>
                Ready to Stand Out{" "}
              </span>
              <span className='text-[#585858] text-[32px] font-semibold font-bricolage capitalize leading-[41.38px]'>
                With AI-Driven Approach?
              </span>
            </div>
            <div className=' text-[#919191] text-base font-normal font-bricolage capitalize leading-tight'>
              et started with our AI-driven tool and unlock the competitive
              advantage of real-time audience insights.
            </div>
          </div>
          <div className='w-[185px] h-[57px] flex-shrink-0 px-[21px] py-2.5 bg-[#181818] rounded-[44px] flex-col justify-start items-start gap-2.5 inline-flex'>
            <div className='justify-start items-center gap-[9px] inline-flex'>
              <ArrowRight className='size-[34px] p-1.5 text-black bg-white rounded-full' />
              <div className='text-center text-white text-base font-bold font-inter capitalize leading-tight'>
                try for free
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
