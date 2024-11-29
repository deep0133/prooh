import ChooseUs from "./components/ChooseUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <>
      <Header />
      <div className='min-h-screen'>
        <Hero />
      </div>
      <ChooseUs />
      <Testimonial />
    </>
  );
}
