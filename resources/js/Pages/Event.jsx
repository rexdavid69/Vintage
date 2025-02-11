import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const events = [
  {
    title: "Mongol Rally",
    image: "Images/mongol rally.jpg",
    description: "An epic journey from the Czech Republic to Eastern Siberia with a twist: tiny, one-litre cars.",
    tags: ["Adventure", "Off-road", "Classic"],
  },
  {
    title: "La Carrera Panamericana",
    image: "Images/la-carera.jpg",
    description: "Experience Mexico's roads with adrenaline-fueled racing in classic pre-1972 cars.",
    tags: ["Mexico", "High-speed", "Vintage"],
  },
  {
    title: "Mille Miglia",
    image: "Images/mille.jpg",
    description: "A legendary route through Italy, featuring the most glamorous classic cars and cheering locals.",
    tags: ["Italy", "Luxury", "Heritage"],
  },
];

const Event = () => {
  useEffect(() => {
    AOS.init({
      duration: 100000, // Animation duration
      once: false,    // Allow animations to trigger every time the element comes into view
      offset: 500,    // Start the animation 100px before the element is visible
      debounceDelay: 90, // Helps with mobile performance
    });
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Featured Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            data-aos="fade-left" // AOS fade effect from the left
            className="border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover"
              loading= "lazy"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-center text-white mb-2">
                {event.title}
              </h3>
              <p className="text-white mb-4">{event.description}</p>
              <div className="flex flex-wrap items-end gap-5 mb-4">
                {event.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-sky-900  text-sky-100 py-1 px-3 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full bg-red-700 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Event;
