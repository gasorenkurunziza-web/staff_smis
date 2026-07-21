import React, { useContext, useState } from "react";
import {
  FaUser,
  FaCamera,
  FaPhoneAlt,
  Fa500Px,
  FaUserAlt,
  FaEnvelope,
  FaIdCard,
  FaTransgender,
} from "react-icons/fa";
import { adminContext } from "../../Context/adminContext";

const PersonalInfo = ({ employee, setEmployee, onChange }) => {
  const [preview, setpreview] = useState(null);
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee({
        ...employee,
        photo: file,
      });
      setpreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="rounded-[2em] bg-white p-5 m-5 shadow-xl">
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
          <label
            htmlFor="photo"
            className="cursor-pointer h-[260px] w-[220px] border-2 border-dashed border-yellow-300 flex flex-col items-center justify-center overflow-hidden"
          >
            {preview ? (
              <img
                src={preview}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <>
                <div className="w-20 h-20 rounded-full bg-yellow-200 flex items-center justify-center">
                  <FaCamera size={28} className="text-[#d89b17]" />
                </div>
                <p className="mt-5 font-semibold"> Upload Photo</p>
                <span className="text-gray-400 text-sm">JPG,PNG up to 5MB</span>
              </>
            )}
            <input
              type="file"
              id="photo"
              accept="photo/*"
              hidden
              onChange={handlePhotoChange}
            />
          </label>
          {}
        </div>
        <div className="xl:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
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
                  name="firstname"
                  value={employee.firstname}
                  onChange={onChange}
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
                  name="lastname"
                  value={employee.lastname}
                  onChange={onChange}
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
                  name="email"
                  value={employee.email}
                  onChange={onChange}
                />
              </div>
            </div>
            {/*gender field*/}
            <div className=" flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold">Gender</label>
              <div className="flex  flex-row items-center shadow-xl p-4 rounded-[1em]">
                <FaTransgender size={20} className="text-[#d89b17]" />
                <select
                  className="flex-1 p-[12px] text-gray-700 font-medium outline-none"
                  name="gender"
                  value={employee.gender}
                  onChange={onChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
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
                  name="nid"
                  placeholder="Enter your NID"
                  className="outline-none py-6 px-3 text-xl"
                  value={employee.nid}
                  onChange={onChange}
                />
              </div>
            </div>
            {/* Phone Field*/}
            <div className="flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold text-gray">
                Telephone
              </label>
              <div className="flex items-center bg-white rounded-[1em] shadow-lg mb-2">
                <FaPhoneAlt
                  size={20}
                  className="text-[#D89D1E] ml-5 flex-shrink-0"
                />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="outline-none py-6 px-3 text-xl"
                  value={employee.phone}
                  onChange={onChange}
                  name="phone"
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
