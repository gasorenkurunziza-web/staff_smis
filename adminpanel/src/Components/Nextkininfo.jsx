import React from "react";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";
import { FaHome, FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { ImUsers } from "react-icons/im";

const Nextkininfo = ({ employee, onChange }) => {
  return (
    <div className="rounded-[2em] bg-white p-5 m-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-xl bg-yellow-200 flex items-center justify-center">
          <ImUsers size={20} className="text-[#D89D1E]" />
        </div>

        <h1 className="text-[#D89D1E] font-semibold text-2xl">
          Next of Kin Information
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* District */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-bold text-gray-700">
            Full Name
          </label>

          <div className="flex items-center bg-white rounded-2xl shadow-lg px-4 py-4">
            <FaUserAlt
              size={20}
              className="text-[#D89D1E] mr-3 flex-shrink-0"
            />

            <input
              type="text"
              placeholder="Enter Full Name"
              className="flex-1 w-full min-w-0 bg-transparent outline-none text-base md:text-lg text-gray-700"
              name="nextofkin"
              onChange={onChange}
            />
          </div>
        </div>

        {/* Sector */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-bold text-gray-700">
            Relationship
          </label>

          <div className="flex items-center bg-white rounded-2xl shadow-lg px-4 py-4">
            <ImUsers size={20} className="text-[#D89D1E] mr-3 flex-shrink-0" />

            <input
              type="text"
              placeholder="Enter Relationship"
              className="flex-1 w-full min-w-0 bg-transparent outline-none text-base md:text-lg text-gray-700"
              name="nextofkinrelation"
              onChange={onChange}
            />
          </div>
        </div>

        {/* Cell */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-bold text-gray-700">Phone</label>

          <div className="flex items-center bg-white rounded-2xl shadow-lg px-4 py-4">
            <FaPhoneAlt
              size={20}
              className="text-[#D89D1E] mr-3 flex-shrink-0"
            />

            <input
              type="text"
              placeholder="Enter Telephone"
              className="flex-1 w-full min-w-0 bg-transparent outline-none text-base md:text-lg text-gray-700"
              name="nextofkinphone"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nextkininfo;
