import React, { useState } from "react";
import Header from "../components/page/Header";
import { FaHotel, FaPlane } from "react-icons/fa";
import { MdOutlineAttractions } from "react-icons/md";
import Hotels from "../components/page/Hotels";
import Flights from "../components/page/Flights";
import Attractions from "../components/page/Attractions";

const App = () => {
  const [activeTab, setActiveTab] = useState("Hotels");

  const renderComponent = () => {
    switch (activeTab) {
      case "Hotels":
        return <Hotels />;
      case "Flights":
        return <Flights />;
      case "Attractions":
        return <Attractions />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#c9efff] min-h-screen">
      <Header />
      <div className="flex gap-5 justify-center mt-5">
        <button
          className="flex flex-col items-center justify-center"
          onClick={() => setActiveTab("Hotels")}
        >
          <FaHotel className="h-7 w-7" />
          <span>Hotels</span>
        </button>
        <button
          className="flex flex-col items-center justify-center"
          onClick={() => setActiveTab("Flights")}
        >
          <FaPlane className="h-7 w-7" />
          <span>Flights</span>
        </button>
        <button
          className="flex flex-col items-center justify-center"
          onClick={() => setActiveTab("Attractions")}
        >
          <MdOutlineAttractions className="h-7 w-7" />
          <span>Attractions</span>
        </button>
      </div>
      <div className="mt-5">{renderComponent()}</div>
    </div>
  );
};

export default App;
