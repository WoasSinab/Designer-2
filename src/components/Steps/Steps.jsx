import { stepData, imgdata } from "./data";

const Steps = () => {
  return (
    <div className='flex flex-col gap-16 lg:mx-24 mx-4 lg:my-24 my-16'>
      {/* Section Title */}
      <h1 className='font-semibold text-center md:text-2xl text-xl'>MY 4 STEPS CREATIVE PROCESS AND TOOLS I USED 🚀</h1>
      {/* Steps Grid */}
      <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
        {stepData.map((item) => (
          <div className='bg-[#0B0B0B] px-8 pb-8 pt-6' key={item.id}>
            {/* Step Image */}
            <div>
              <img src={item.img} alt='' className='w-[70px] h-[70px]' />
            </div>
            {/* Step Title */}
            <h1 className='text-2xl mt-12 mb-8'>{item.title}</h1>
            {/* Step Description */}
            <p className='text-sm text-gray-500 leading-loose'>{item.des}</p>
          </div>
        ))}
      </div>
      {/* Tool Icons Grid */}
      <div className='grid xl:grid-cols-8 sm:grid-cols-4 grid-cols-4 gap-8 sm:gap-16'>
        {imgdata.map((item) => (
          <div className="flex items-center justify-center" key={item.id}>
            {/* Tool Icon */}
            <img src={item.img} alt='' className="w-[35px] h-[40px]"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
