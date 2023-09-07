const Career = () => {
  return (
    <div className='flex md:flex-row flex-col justify-start text-white lg:mx-24 mx-4 lg:my-24'>
      <div className='md:w-1/2 text-center md:text-left'>
        <h1 className='text-3xl font-semibold my-8'>🚀 Career SO FAR</h1>
        <p className='text-base text-gray-500 lg:pr-40 md:pr-20 leading-relaxed'>I'm a Head of Design at Kenko Health with over 7 years of IT industry experience. I began as a Visual Designer at Chromeinfotech in 2018 and later worked as a UX and Visual Designer at Nickefox. My experience also includes roles as a Product Designer at Zomato and a UX Designer at Deloitte.</p>
      </div>
      <div className='md:w-1/2 text-center md:pl-8'>
        <h1 className='text-3xl font-semibold my-8'>🛠️ Skills</h1>
        <div className='grid grid-cols-2 gap-4 text-sm'>
          {["UX Research", "UI Design", "Product Design", "Design System", "Information Architecture", "Branding", "Prototyping", "Wireframing", "Icons"].map((skill, index) => (
            <div key={index} className='py-2 px-4 bg-[#0B0B0B] rounded-xl items-center flex'>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
