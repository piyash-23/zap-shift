import React from "react";
import SwipeHero from "../../Utilities/Swiper/SwipeHero";
import Howit from "../../Utilities/Howit/Howit";
import OurSer from "../../Utilities/OurSer/OurSer";
import Brands from "../../Utilities/Brands/Brands";
import Facilities from "../../Utilities/Facilities/Facilities";

const Home = () => {
  return (
    <>
      <div>
        <SwipeHero></SwipeHero>
        <Howit></Howit>
        <OurSer></OurSer>
        <Brands />
        <div>
          <div className="divider py-10"></div>
        </div>
        <Facilities></Facilities>
        <div>
          <div className="divider py-10"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
