import React from "react";
import bgImage from "../images/hero-bg.jpg";
import bgProfile from "../images/hero.png";
const Home = () => {
  return (
    <section
      className="bg-blue-100 h-screen text-white relative h-auto"
    //   style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10 flex items-center">
        <div className="w-1/2 text-left">
          <h2 className="text-[24px] text-black">Build Your Digital space With</h2>
          <h2 className="text-black text-[60px] md:text-[60px] lg:text-[60px] font-bold mb-4 leading-tight uppercase">
            thriving innovation
          </h2>

          <p className=" text-black mt-8 text-lg md:text-xl max-w-xl">
            ibhimani Inc. facilitates the digital place for your organization
            and provides an innovative solution that puts your organization to
            new heights in the 21st century.
          </p>
          <button className="bg-red-500 px-6 py-3 rounded-md text-white font-bold mt-8">
            Discover Our Services
          </button>
        </div>
        {/* right side show      */}
        {/* <img className="w" src={bgProfile}/> */}
      </div>
    </section>
  );
};

export default Home;
