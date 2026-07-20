import React from "react";
import { FaGraduationCap, FaBookReader } from "react-icons/fa";

const Educationinfo = ({ employee, setEmployee }) => {
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
          <FaGraduationCap size={20} className="text-[#D89D1E]" />
        </div>

        <h1 className="text-[#D89D1E] font-semibold text-2xl">
          Education Information
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Education Level */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-bold">Education Level</label>

          <div className="flex items-center bg-white shadow-lg rounded-2xl px-5 py-4">
            <FaGraduationCap
              size={20}
              className="text-[#D89D1E] mr-3 flex-shrink-0"
            />

            <select
              name="edlevel"
              defaultValue=""
              className="flex-1 min-w-0 bg-transparent outline-none text-gray-700 font-medium"
              onChange={handleEveryChange}
            >
              <option value="" disabled>
                Select Education Level
              </option>
              <option value="Advanced Diploma (S6)">
                Advanced Diploma (S6)
              </option>
              <option value="Bachelor (A1)">Bachelor (A1)</option>
              <option value="Bachelor (A0)">Bachelor (A0)</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
        </div>

        {/* Specialization */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-bold">Specialization</label>

          <div className="flex items-center bg-white shadow-lg rounded-2xl px-5 py-4">
            <FaBookReader
              size={20}
              className="text-[#D89D1E] mr-3 flex-shrink-0"
            />

            <input
              type="text"
              placeholder="Enter Specialization"
              className="flex-1 bg-transparent outline-none text-gray-700"
              name="spec"
              onChange={handleEveryChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educationinfo;
