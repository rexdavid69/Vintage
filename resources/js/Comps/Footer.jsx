import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-10">
      <div className="contentfoot flex flex-wrap justify-between px-6 md:px-20">
        {/* Left Box */}
        <div className="left box w-full sm:w-1/2 md:w-1/3 mb-8 sm:mb-0">
          <div className="upper mb-4">
            <div className="topic text-lg font-semibold text-white">About us</div>
            <p className="text-sm text-gray-200">Vintage Car Rally.</p>
          </div>
          <div className="lower">
            <div className="topic text-lg font-semibold text-white">Contact us</div>
            <div className="phone mt-2">
              <a href="tel:00390811916878" className="text-sm text-gray-200 hover:text-yellow-400">
                <i className="fa fa-phone"></i> Tel: 0039 081 1916878
              </a>
            </div>
            <div className="email mt-2">
              <a href="mailto:vintagecarrally@gmail.com" className="text-sm text-gray-200 hover:text-yellow-400">
                <i className="fa fa-envelope"></i> vintagecarrally@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="right-box w-full sm:w-1/2 md:w-1/3 mb-8 sm:mb-0">
          <div className="topic text-lg font-semibold text-white">Subscribe us</div>
          <form action="#" className="mt-4">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 mb-4 rounded-md text-gray-900"
            />
            <input
              type="submit"
              value="Send"
              className="w-full py-2 px-6  border-4 border-[#060605] bg-gradient-to-r from-yellow-600 via-yellow-200 to-gray-600] text-black rounded-full shadow-lg hover:bg-[#b72e2e]"
            />
          </form>
          <div className="media-icons mt-4 flex space-x-4">
            <a href="#" className="text-lg hover:text-yellow-400">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="#" className="text-lg hover:text-yellow-400">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="text-lg hover:text-yellow-400">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom text-center py-4 bg-transparent">
        <p className="text-gray-200 font-extrabold text-1xl">
          Copyright © 2022 <a href="#" className="hover:text-yellow-400">VINTAGE</a> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
