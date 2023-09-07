import Career from "./components/Career/Career";
import Hero from "./components/Hero/Hero";
import ShowCase from "./components/ShowCase/ShowCase";
import WorkCus from "./components/WorkCus/WorkCus";


function App() {
  return (
    <div className='container mx-auto '>
      <Hero />
      <WorkCus />
      <ShowCase />
      <Career />
    </div>
  );
}

export default App;
