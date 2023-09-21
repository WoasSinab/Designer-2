import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const ShowCase = () => {
  
  useEffect(() => {
    Aos.init({duration: 2000});
  },[]);

  return (
    // Main container for showcasing images and text
    <div className='flex flex-col items-center gap-y-24 text-white mt-32'>
      {/* Title for the showcase */}
      <h1 data-aos="fade-in" className='font-semibold text-5xl sm:text-6xl lg:text-7xl'>SHOWCASE</h1>
      {/* Flex container for displaying images */}
      <div className='flex lg:flex-row flex-col'>
        {/* Image 1 */}
        <span data-aos="fade-in" className='relative md:left-16 z-10 transform md:-translate-x-8 -rotate-12'>
          <img className='sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] rounded-lg   transform ' src='https://s6.uupload.ir/files/neelesh-aloha_m2r.png' alt='' />
        </span>
        {/* Image 2 */}
        <span data-aos="fade-in" className='relative md:left-4 -top-16 lg:top-0 z-20 transform md:-translate-x-4 shadow-2xl'>
          <img className=' sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] rounded-lg   transform rotate-12' src='https://s6.uupload.ir/files/instagram_post_-_41_r6pr.png' alt='' />
        </span>
        {/* Image 3 */}
        <span data-aos="fade-in" className='relative md:right-4 -top-24 lg:top-0 z-30 transform md:-translate-x-2 shadow-2xl'>
          <img className='sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] rounded-lg shadow-2xl transform -rotate-12' src='https://s6.uupload.ir/files/instagram_post_-_17_brt8.png' alt='' />
        </span>
        {/* Image 4 */}
        <span data-aos="fade-in" className='relative md:right-16 -top-32 lg:top-0 z-40 shadow-2xl'>
          <img className='sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] rounded-lg  shadow-2xl transform rotate-12' src='https://s6.uupload.ir/files/instagram_post_-_55_vh3v.png' alt='' />
        </span>
      </div>
      <hr className="opacity-10 w-full"/>
    </div>
  );
};

export default ShowCase;
