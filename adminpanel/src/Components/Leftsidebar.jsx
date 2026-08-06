import React from "react";
import { assets } from "../assets/assets";

const Leftsidebar = () => {
  return (
    <div className="h-full w-75 bg-gradient-to-b from-yellow-650 to-yellow-400 px-4 py-3 flex flex-row items-center gap-1">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src={assets.img9}
          alt="SMIS Logo"
          className="w-30 h-30 object-contain"
        />
      </div>

      {/* Text */}
      <div className="text-white">
        <h1 className="text-lg font-bold">Iwawa</h1>{" "}
        <p className="text-sm font-sm mt-1">Rehabilitation Center</p>
        <p className="text-lg font-sm mt-2 ">SMIS Dashboard</p>
      </div>
    </div>
  );
};

export default Leftsidebar;
