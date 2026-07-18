import React from "react";
import {
  FaUser,
  FaCamera,
  FaPhoneAlt,
  Fa500Px,
  FaUserAlt,
  FaEnvelope,
  FaIdCard,
} from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div className="rounded-[2em] border border-yellow-400 bg-white p-5 shadow-xl">
      {/* main div with shadow*/}
      <div className="flex items-center gap-3 mb-5">
        {/*div that will hold personal info title and icon*/}
        <div className="w-11 h-11 rounded-xl bg-yellow-200 flex items-center justify-center">
          {/*div for personal info icon*/}
          <FaUserAlt size={20} className="text-[#d89b17]" />
        </div>
        <h1 className="text-[#d89b17] font-semibold text-2xl">
          Personal Information
        </h1>
      </div>
      {/*content*/}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-3">
        {/*profile picture*/}
        <div className="">
          <label className=" block text-sm font-bold text-gray-700 mb-3">
            Photo
          </label>
          <div className="cursor-point h-[250px] w-[230px] rounded-[1em] border-2 border-dashed border-yellow-300 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-yellow-200">
              <FaCamera size={20} className="text-[#d89b17]" />
            </div>
            <p className="text-gray-500 mt-4 font-semibold">Upload Photo</p>
            <span className="text-gray-400 text-small">
              jpg,png up to 200MB
            </span>
          </div>
        </div>
        <div className="xl:col-span-3">
          <div className="grid grid-cols- md:grid-2 xl:grid-cols-3 gap-2">
            {/* inputs*/}
            <div className="flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold text-gray">
                First Name
              </label>
              <div className="flex items-center bg-white rounded-[1em] shadow-lg mb-2">
                <FaUserAlt
                  size={20}
                  className="text-[#D89D1E] ml-5 flex-shrink-0"
                />
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="outline-none py-6 px-3 text-xl"
                />
              </div>
            </div>
            <div className="flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold text-gray">
                Last Name
              </label>
              <div className="flex items-center bg-white rounded-[1em] shadow-lg mb-2">
                <FaUserAlt
                  size={20}
                  className="text-[#D89D1E] ml-5 flex-shrink-0"
                />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="outline-none py-6 px-3 text-xl"
                />
              </div>
            </div>
            <div className="flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold text-gray">
                E-mail
              </label>
              <div className="flex items-center bg-white rounded-[1em] shadow-lg mb-2">
                <FaEnvelope
                  size={20}
                  className="text-[#D89D1E] ml-5 flex-shrink-0"
                />
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="outline-none py-6 px-3 text-xl"
                />
              </div>
            </div>
            {/*gender field*/}
            <div className=" flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold">Gender</label>
              <div className="flex flex-row items-center shadow-xl p-4 rounded-[1em]">
                <FaUserAlt size={20} className="text-[#d89b17]" />
                <select
                  className="p-[12px] rounded-[1em] text-gray-700 font-medium outline-none"
                  value={""}
                  name="gender"
                  id=""
                >
                  <option value="">Select Gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
            </div>
            {/*NID field*/}
            <div className="flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold text-gray">
                National ID
              </label>
              <div className="flex items-center bg-white rounded-[1em] shadow-lg mb-2">
                <FaIdCard
                  size={20}
                  className="text-[#D89D1E] ml-5 flex-shrink-0"
                />
                <input
                  type="text"
                  placeholder="Enter your NID"
                  className="outline-none py-6 px-3 text-xl"
                />
              </div>
            </div>
            {/* Phone Field*/}
            <div className="flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold text-gray">
                National ID
              </label>
              <div className="flex items-center bg-white rounded-[1em] shadow-lg mb-2">
                <FaPhoneAlt
                  size={20}
                  className="text-[#D89D1E] ml-5 flex-shrink-0"
                />
                <input
                  type="text"
                  placeholder="Enter your NID"
                  className="outline-none py-6 px-3 text-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
