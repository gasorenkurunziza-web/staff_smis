import React from "react";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { MdLocationCity } from "react-icons/md";

const Addressinfo = ({ employee, setEmployee }) => {
  const handleEveryChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="rounded-[2em] bg-white p-5 m-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-xl bg-yellow-200 flex items-center justify-center">
          <FaLocationDot size={20} className="text-[#D89D1E]" />
        </div>

        <h1 className="text-[#D89D1E] font-semibold text-2xl">
          Address Information
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
        {/* District */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-bold text-gray-700">
            District
          </label>

          <div className="flex items-center bg-white rounded-2xl shadow-lg px-4 py-4">
            <FaMapLocation
              size={20}
              className="text-[#D89D1E] mr-3 flex-shrink-0"
            />

            <input
              type="text"
              placeholder="Enter District"
              className="flex-1 w-full min-w-0 bg-transparent outline-none text-base md:text-lg text-gray-700"
              name="district"
              onChange={handleEveryChange}
              value={employee.district}
            />
          </div>
        </div>

        {/* Sector */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-bold text-gray-700">Sector</label>

          <div className="flex items-center bg-white rounded-2xl shadow-lg px-4 py-4">
            <MdLocationCity
              size={20}
              className="text-[#D89D1E] mr-3 flex-shrink-0"
            />

            <input
              type="text"
              placeholder="Enter Sector"
              className="flex-1 w-full min-w-0 bg-transparent outline-none text-base md:text-lg text-gray-700"
              name="sector"
              onChange={handleEveryChange}
              value={employee.sector}
            />
          </div>
        </div>

        {/* Cell */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-bold text-gray-700">Cell</label>

          <div className="flex items-center bg-white rounded-2xl shadow-lg px-4 py-4">
            <TbGridDots
              size={20}
              className="text-[#D89D1E] mr-3 flex-shrink-0"
            />

            <input
              type="text"
              placeholder="Enter Cell"
              className="flex-1 w-full min-w-0 bg-transparent outline-none text-base md:text-lg text-gray-700"
              name="cell"
              onChange={handleEveryChange}
              value={employee.cell}
            />
          </div>
        </div>

        {/* Village */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-bold text-gray-700">
            Village
          </label>

          <div className="flex items-center bg-white rounded-2xl shadow-lg px-4 py-4">
            <FaHome size={20} className="text-[#D89D1E] mr-3 flex-shrink-0" />

            <input
              type="text"
              placeholder="Enter Village"
              className="flex-1 w-full min-w-0 bg-transparent outline-none text-base md:text-lg text-gray-700"
              name="village"
              onChange={handleEveryChange}
              value={employee.village}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addressinfo;
