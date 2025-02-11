import React from "react";
import Navbar from "../Comps/Navbar";
import Footer from "../Comps/Footer";

const AboutUs = () => {
  return (
    <div className="bg-gray-800 bg-custom-bg bg-cover bg-center min-h-screen text-white">
      <Navbar />

      {/* About Us Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            Welcome to the world of vintage car rallies! At <strong>Vintage Rally</strong>, we are passionate about the art and culture of classic cars and the thrill of racing them through picturesque landscapes. Our events celebrate the history, heritage, and craftsmanship of automotive legends.
          </p>

          <p className="text-lg leading-relaxed">
            Our journey started with a simple mission: to bring together enthusiasts, collectors, and drivers from around the globe to share their love for classic cars. Over the years, we’ve organized some of the most iconic rallies, connecting people and creating unforgettable memories.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-4">What Makes Our Rallies Unique?</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              **Breathtaking Routes**: Our events take you through stunning locations, from winding mountain roads to serene countryside.
            </li>
            <li>
              **Passionate Community**: Join a global network of classic car enthusiasts and make lifelong friends.
            </li>
            <li>
              **Unmatched Experiences**: Enjoy the perfect blend of competition, camaraderie, and cultural exploration.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold mt-12 mb-4">Iconic Events</h2>
          <p className="text-lg leading-relaxed">
            From the thrilling <strong>Mongol Rally</strong> to the glamorous <strong>Mille Miglia</strong>, our events have gained worldwide recognition for their unique character and charm. Each rally is designed to offer an authentic and exhilarating experience for drivers and spectators alike.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-4">Join the Adventure</h2>
          <p className="text-lg leading-relaxed">
            Whether you’re a seasoned racer or a first-time participant, there’s a place for you in the world of vintage car rallies. Join us as we celebrate the spirit of adventure, the beauty of classic automobiles, and the joy of driving.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
