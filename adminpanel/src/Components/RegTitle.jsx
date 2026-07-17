import React from "react";
import { Lock, UserPlus, UsersRound, UserRound } from "lucide-react";
import { FaUserPlus } from "react-icons/fa";

const RegTitle = () => {
  return (
    <div className="mb-8">
      {/* Register Title*/}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <FaUserPlus size={30} className="text-[#d89b17] text-xl font-bold" />
        </div>
        <h1 className="text-4xl font-bold text-[#d89b17]"> Add new Employee</h1>
      </div>
      <p className="text-gray-400 mt-2 ml-2 text-xl">
        Fill in the information below to Register a new Employee
      </p>
    </div>
  );
};

export default RegTitle;
