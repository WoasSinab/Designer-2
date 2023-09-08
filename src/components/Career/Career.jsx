const Career = () => {
  return (
    <div className='flex md:flex-row flex-col justify-start text-white lg:mx-24 mx-4 lg:my-24 my-16 gap-y-16'>
      <div className='md:w-1/2 text-center md:text-left'>
        <h1 className='text-3xl font-semibold my-8'>Career SO FAR</h1>
        <p className='text-base text-gray-500 xl:pr-40 md:pr-20 leading-10'>I'm a Head of Design at Kenko Health with over 7 years of IT industry experience. I began as a Visual Designer at Chromeinfotech in 2018 and later worked as a UX and Visual Designer at Nickefox. My experience also includes roles as a Product Designer at Zomato and a UX Designer at Deloitte.</p>
      </div>
      <div className='md:w-1/2 text-center md:pl-8'>
        <h1 className='text-3xl font-semibold my-8'>Skills</h1>
        <div className='flex flex-col  gap-y-12 gap-x-4 mx-4'>
          <div className='flex flex-row justify-between  items-center '>
            <span>
              <h1 className='md:text-2xl text-xl'>User Interface</h1>
            </span>
            <div className='radial-progress' style={{ "--value": 85 }}>
              85%
            </div>
          </div>
          <hr className="opacity-10 w-full"/>
          <div className='flex flex-row justify-between  items-center '>
            <span>
              <h1 className='md:text-2xl text-xl'>User Experience</h1>
            </span>
            <div className='radial-progress' style={{ "--value": 75 }}>
              65%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
