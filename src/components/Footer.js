import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-6">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full lg:w-1/4 p-4">
            <h3 className="text-lg font-bold mb-2">Build With Urban Nest</h3>
            <p className="text-sm mb-2">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
            <p className="text-sm">Mon - Sat 8:00 - 17:30<br />Sunday - CLOSED</p>
          </div>

          {/* Column 2 */}
          <div className="w-full lg:w-1/4 p-4">
            <h3 className="text-lg font-bold mb-2">Our Services</h3>
            <ul className="list-none">
              {["Chemical Engineering Projects", "Mining Engineering Construction", "Engineering Welding Engineering", "Welding Engineering", "Space Program XYZ"].map((service, index) => (
                <li key={index} className="text-sm">{service}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full lg:w-1/4 p-4">
            <h3 className="text-lg font-bold mb-2">Office in Canada</h3>
            <p className="text-sm mb-1">7300-7398 Colonial Rd,<br />Brooklyn, NY 11209</p>
            <p className="text-sm mb-1">(123) 1234-567-8901<br />(123) 1234-567-8902</p>
            <p className="text-sm">office@example.com<br />contact@example.com</p>
          </div>

          {/* Column 4 */}
          <div className="w-full lg:w-1/4 p-4">
            <h3 className="text-lg font-bold mb-2">Our Locations</h3>
            <ul className="list-none">
              {["United States", "Australia", "Canada", "Europe"].map((location, index) => (
                <li key={index} className="text-sm">{location}</li>
              ))}
            </ul>
            <div className="flex justify-start mt-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                <a href="#" key={platform} className="mr-4">
                  <img src={`path/to/your/${platform}-icon.png`} alt={platform} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-center mt-6">Copyright &copy; 2024 Alibaba Product Posting</p>
      </div>
    </footer>
  );
};

export default Footer;
