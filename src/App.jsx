import { Fragment } from "react";
// import BallFalling from "./components/BallFalling";
import Compaign from "./components/Campaign";
import ChooseUs from "./components/ChooseUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import FriendlyTeam from "./components/FriendlyTeam";

export default function App() {
  return (
    <Fragment className='min-w-[1300px] overflow-auto'>
      <Header />
      {/* <BallFalling /> */}
      <div className='min-h-screen'>
        <Hero />
      </div>
      <Compaign />
      <ChooseUs />
      <Testimonial />
      <FriendlyTeam />
    </Fragment>
  );
}
