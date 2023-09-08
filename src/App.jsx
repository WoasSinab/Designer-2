import Career from "./components/Career/Career";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ShowCase from "./components/ShowCase/ShowCase";
import Steps from "./components/Steps/Steps";
import WorkCus from "./components/WorkCus/WorkCus";

function App() {
  return (
    <div className='container mx-auto '>
      <Hero />
      <WorkCus />
      <hr className='opacity-10 w-full' />
      <ShowCase />
      <Career />
      <hr className="opacity-10 w-full"/>
      <Steps />
      <hr className="opacity-10 w-full"/>
      <CaseStudy />
      <hr className="opacity-10 w-full"/>
      <Footer />
    </div>
  );
}

export default App;
