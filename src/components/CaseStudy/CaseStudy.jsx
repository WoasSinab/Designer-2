const CaseStudy = () => {
  return (
    <div className="flex flex-col gap-16 lg:mx-24 mx-4 lg:my-24 my-16">
      <div className='w-full xl:text-6xl sm:text-3xl lg:text-5xl md:text-4xl text-3xl flex md:flex-row flex-col gap-6 items-center justify-center'>
        <h1>WORK</h1>
        <img src='https://s6.uupload.ir/files/subtract_yw6o.png' alt='' className='w-[50px] h-[50px]' />
        <h1>RESOURCES</h1>
        <img src='https://s6.uupload.ir/files/subtract_yw6o.png' alt='' className='w-[50px] h-[50px]' />
        <h1>ILLUSTRATIONS</h1>
      </div>

      <div>
        <p className="xl:mx-56 my-6 text-gray-500">Discover My Product Case Studies on Zomato, Deloitte, Freelance Projects, and Download Stunning UI Resources such as Illustrations, Design Systems, Icons, and More – All for Free!</p>
        <p className="text-center mb-16 text-gray-500">Unleash Your Creativity Today!</p>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 xl:mx-56'>
          <span>
            <img src='https://s6.uupload.ir/files/atlas-design-system_f2wj.png' alt='' />
          </span>
          <span>
            <img src='https://s6.uupload.ir/files/case-studies_0dz0.png' alt='' />
          </span>
          <span>
            <img src='https://s6.uupload.ir/files/dribbble-shots_qqqt.png' alt='' />
          </span>
          <span>
            <img src='https://s6.uupload.ir/files/figma-community_li2v.png' alt='' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
