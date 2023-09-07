const ShowCase = () => {
  return (
    // Main container for showcasing images and text
    <div className='flex flex-col items-center gap-y-24 text-white my-32'>
      {/* Title for the showcase */}
      <h1 className='font-semibold text-7xl'>SHOWCASE</h1>
      {/* Flex container for displaying images */}
      <div className='flex lg:flex-row flex-col'>
        {/* Image 1 */}
        <span className='relative md:left-16 z-10 transform md:-translate-x-8'>
          <img className='w-[300px] h-[300px] rounded-lg  shadow-2xl' src='https://s6.uupload.ir/files/neelesh-aloha_d4rb.png' alt='' />
        </span>
        {/* Image 2 */}
        <span className='relative md:left-4 -top-16 lg:top-0 z-20 transform md:-translate-x-4'>
          <img className=' w-[300px] h-[300px] rounded-lg  shadow-2xl' src='https://s6.uupload.ir/files/instagram_post_-_41_9evq.png' alt='' />
        </span>
        {/* Image 3 */}
        <span className='relative md:right-4 -top-24 lg:top-0 z-30 transform md:-translate-x-2'>
          <img className='w-[300px] h-[300px] rounded-lg shadow-2xl' src='https://s6.uupload.ir/files/instagram_post_-_17_1r3i.png' alt='' />
        </span>
        {/* Image 4 */}
        <span className='relative md:right-16 -top-32 lg:top-0 z-40'>
          <img className='w-[300px] h-[300px] rounded-lg  shadow-2xl' src='https://s6.uupload.ir/files/instagram_post_-_55_i32q.png' alt='' />
        </span>
      </div>
    </div>
  );
};

export default ShowCase;
