import Career from "./components/Career/Career";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ShowCase from "./components/ShowCase/ShowCase";
import Steps from "./components/Steps/Steps";
import WorkCus from "./components/WorkCus/WorkCus";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // اضافه کردن استایل‌های AOS

function App() {

  useEffect(() => {
    Aos.init({duration: 2500});
  },[]);


  return (
    <div className='container mx-auto'>
      <Navbar />
      <Hero  />
      <WorkCus/>
      <hr className='opacity-10 w-full' />
      <ShowCase/>
      <Career/>
      <hr className="opacity-10 w-full" />
      <Steps/>
      <hr className="opacity-10 w-full" />
      <CaseStudy/>
      <hr className="opacity-10 w-full" />
      <Footer/>
    </div>
  );
}

export default App;
