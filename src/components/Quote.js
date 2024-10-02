import React from "react";
import cta from "../images/cta.png";

const Quote = () => {
  return (
    <div className="container mx-auto px-4 py-20 relative z-10 flex items-center">
      <img className="" src={cta} />
      <div className="w-1/2 text-left ">
        <h2 className="text-[24px] text-black">
          Stay Connected With Cutting Edge IT
        </h2>
        <button className="bg-blue-500 px-6 py-3 rounded-md text-white font-bold mt-8">
          get A Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
