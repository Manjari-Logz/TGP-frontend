import React from "react";
import truck from "../assets/truck-bg.png";

const Shipment = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col justify-end"
      style={{
        backgroundImage: `url(${truck})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="relative z-10 p-6 w-full rounded-t-3xl bg-black bg-opacity-60 backdrop-blur-md">
        <h1 className="text-yellow-400 text-3xl font-bold leading-tight mb-3">
          SMART SHIPPING<br />MADE SIMPLE
        </h1>
        <p className="text-white text-sm mb-6">
          Stay updated every step of the way with live shipment tracking.
        </p>
        <button className="w-full border border-yellow-400 text-yellow-400 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Shipment;
