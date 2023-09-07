import Hero from "./components/Hero/Hero";
import ShowCase from "./components/ShowCase/ShowCase";
import Customers from "./components/customers/Customers";

function App() {
  return (
    <div className='container mx-auto '>
      <Hero />
      <Customers />
      <ShowCase />
    </div>
  );
}

export default App;
