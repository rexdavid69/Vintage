import React, { useState } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false); // Dismiss the popup
  };

  if (!isVisible) {
    return null; // Don't render anything if the popup is not visible
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-xl w-96"
        style={{
          backgroundImage: `url('https://via.placeholder.com/500x300')`, // Replace with your preferred image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white bg-gray-800 bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition"
        >
          &times;
        </button>

        {/* Popup Content */}
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-gray-200 mb-6">
          Stay updated with our latest events, offers, and news!
        </p>
        <div className="flex space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="bg-sky-800 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
