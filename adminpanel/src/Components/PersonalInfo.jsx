import React from "react";
import { FaUser, FaCamera, FaPhoneAlt } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div className="shadow-xl border border-yellow-600 rounded-[1em] bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center p-">
          <FaUser size={20} className="text-[#d89b17]" />
        </div>
        <h1 className="text-[#d89b17] text-xl font-semibold">
          Personal Information
        </h1>
      </div>
    </div>
  );
};

export default PersonalInfo;
