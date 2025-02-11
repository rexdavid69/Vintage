import React from "react";
import Navbar from "../Comps/Navbar";
import Hero from "./Hero";
import Event from "./Event";
import Footer from "../Comps/Footer";
import Popup from "../Comps/Popup";


const App = () => {
  return (
    <div>
        <div className="bg-gray-800 bg-custom-bg bg-cover bg-center min-h-screen">
      <Popup />
      <Navbar />
      <Hero />
      <Event />
      <Footer />
      </div>
    </div>
  );
};

export default App;
