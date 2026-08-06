import React from "react";
import { FaHome } from "react-icons/fa";
import { assets } from "../assets/assets";

const Leftsidebar = () => {
  return (
    <div className="w-72 min-h-screen bg-gradient-to-b from-yellow-700 to-yellow-500 p-5">
      {/* ================= Logo Section ================= */}
      <div className="flex items-center gap-4">
        <div className="w-30 h-30 flex items-center justify-center">
          <img
            src={assets.img9}
            alt="SMIS Logo"
            className="w-30 h-30 object-contain"
          />
        </div>

        <div className="text-white">
          <h1 className="text-xl font-bold leading-none">Iwawa</h1>

          <p className="text-md mt-2">Rehabilitation Center</p>

          <p className="text-md font-semibold mt-4">SMIS Dashboard</p>
        </div>
      </div>

      {/* ================= Navigation ================= */}
      <div className="mt-8">
        <button
          className="
            w-full
            bg-white
            rounded-full
            shadow-lg
            overflow-hidden
            flex
            items-center
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          {/* Red Left Part */}
          <div className="bg-red-600 px-6 py-2">
            <FaHome className="text-white text-xl" />
          </div>

          {/* Text */}
          <span className="ml-5 text-yellow-700 font-semibold text-lg">
            Dashboard
          </span>
        </button>
      </div>
    </div>
  );
};

export default Leftsidebar;
