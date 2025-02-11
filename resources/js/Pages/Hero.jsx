import React from "react";
import Slider from "react-slick";
import { FaCar } from "react-icons/fa";

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section>
            <div className="hero w-full">
                <div className="row flex flex-col sm:flex-row w-full justify-between items-start py-8 px-6 sm:px-12">
                    {/* Left Section */}
                    <div className="left-sec w-full sm:w-full md:w-1/2 lg:w-1/2 mt-0 sm:mt-8 ml-0 sm:ml-10">
                        <div className="content pt-11">
                            <h2 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-8xl text-shadow-lg">
                                <br />
                                <span className="text-white">Classic</span>
                                <br />
                                Vintage Cars
                                <br />
                                Touring
                                <br />
                                Rally
                            </h2>
                        </div>
                        <button className="discover-btn flex items-center py-2 px-6 mt-8 sm:mt-12 border-4 border-[#ffa938] bg-[#d43242] text-white rounded-full shadow-lg hover:bg-[#b72e2e]">
                            <a
                                href="#"
                                className="text-xl sm:text-2xl font-semibold tracking-wide mr-4 capitalize"
                            >
                                Discover
                            </a>
                            <span className="text-3xl sm:text-4xl">
                                <FaCar />
                            </span>
                        </button>
                    </div>

                    {/* Right Section - Slideshow */}
                    <div className="right-sec w-full sm:w-1/2 md:w-3/5 pt-8 sm:pt-12 pr-6 sm:pr-12">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="Images/2.jpg"
                                    alt="Car 1"
                                    className="w-full h-auto rounded"
                                />
                            </div>
                            <div>
                                <img
                                    src="Images/3.jpg"
                                    alt="Car 2"
                                    className="w-full h-auto rounded"
                                />
                            </div>
                            <div>
                                <img
                                    src="Images/4.jpg"
                                    alt="Car 3"
                                    className="w-full h-auto rounded"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
