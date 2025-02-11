import React, { useState } from "react";
import Navbar from "../Comps/Navbar";
import Footer from "../Comps/Footer";

const Drivers = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);

  const drivers = [
    {
      name: "William Davids",
      image: "/images/driver 1.jpg",
      bio: "William is known for his aggressive driving style and precision behind the wheel. With 5 years in the rally world, he’s a fan favorite.",
      stats: {
        wins: 12,
        podiums: 25,
        championships: 2,
      },
    },
    {
      name: "John McAuthur",
      image: "/images/driver 2.jpg",
      bio: "A seasoned rally veteran, John McAuthur has competed in numerous high-profile events. His cool-headedness and strategic mind are his strongest assets.",
      stats: {
        wins: 9,
        podiums: 18,
        championships: 1,
      },
    },
    {
      name: "Daniel Greg",
      image: "/images/driver 3.jpg",
      bio: "Daniel Greg brings a youthful, dynamic energy to the rally scene. His passion for the sport and his natural talent make him one to watch.",
      stats: {
        wins: 6,
        podiums: 15,
        championships: 9,
      },
    },
  ];

  const openModal = (driver) => {
    setSelectedDriver(driver);
  };

  const closeModal = () => {
    setSelectedDriver(null);
  };

  return (
    <div className="bg-cover bg-no-repeat bg-fixed bg-center relative" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
      <Navbar />
      <div className="text-white py-10 px-10 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="italic text-3xl">Meet</span> Our DRIVERS
        </h1>
        <p className="text-lg text-center mb-10">
          Meet our incredibly skilled driving team. Guiding you through your next rally experience or taking you on a thrilling hot lap of the Highlands circuit. The team is here to meet and deliver every adrenaline need.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {drivers.map((driver, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-64 cursor-pointer"
              onClick={() => openModal(driver)}
            >
              <img
                src={driver.image}
                alt={driver.name}
                className="h-64 w-64 rounded-full grayscale transition-all duration-300 hover:grayscale-0"
              />
              <h3 className="text-2xl text-[#eb2f06] mt-4">{driver.name}</h3>
            </div>
          ))}
        </div>
      </div>

{/* Modal */}
{selectedDriver && (
  <div className="modal fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300 opacity-0" style={{ opacity: 1 }}>
    <div className="bg-gradient-to-r from-black via-black to-gray-600 p-10 rounded-xl w-full max-w-lg shadow-xl transform transition-all duration-500 scale-95 opacity-100">
      <div className="relative">
        <h2 className="text-4xl font-semibold text-center text-white mb-4">{selectedDriver.name}</h2>
        <p className="text-lg text-white mb-6">{selectedDriver.bio}</p>

        <div className="text-white  text-center mb-6">
          <p className="font-medium"><strong>Wins:</strong> {selectedDriver.stats.wins}</p>
          <p className="font-medium"><strong>Podiums:</strong> {selectedDriver.stats.podiums}</p>
          <p className="font-medium"><strong>Championships:</strong> {selectedDriver.stats.championships}</p>
        </div>

        <button
          onClick={closeModal}
          className="absolute top-0 right-0 p-4 text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
)}


      <Footer />
    </div>
  );
};

export default Drivers;
