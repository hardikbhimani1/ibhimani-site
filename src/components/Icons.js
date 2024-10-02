import React from "react";
import client from "../images/Clients.png";
import client1 from "../images/Clients1.png";
import client2 from "../images/Clients2.png";
import client3 from "../images/Clients3.png";
import client4 from "../images/Clients4.png";

const clients = [client, client1, client2, client3, client4];

const Icons = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="text-center font-bold">
        <h2 className="text-black">Our Amazing Clients</h2>
      </div>
      <div className="whitespace-nowrap animate-marquee">
        {[...clients].map((src, index) => (
          <span key={index} className="mx-4">
            <a href={src} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={`Client ${index + 1}`}
                className="inline transition duration-300 ease-in-out transform hover:scale-110"
              />
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Icons;

