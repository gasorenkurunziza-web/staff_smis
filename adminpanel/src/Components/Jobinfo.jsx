import React from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaTransgender,
  FaIdCard,
  FaPhoneAlt,
  FaCalendarAlt,
  FaSuitcase,
  FaLaptop,
  FaCheck,
} from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";

const Jobinfo = ({ employee, setEmployee }) => {
  const handleEveryChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="rounded-[2em] bg-white p-5 m-5 shadow-xl">
      {/* main div with shadow*/}
      <div className="flex items-center gap-3 mb-5">
        {/*div that will hold personal info title and icon*/}
        <div className="w-11 h-11 rounded-xl bg-yellow-200 flex items-center justify-center">
          {/*div for personal info icon*/}
          <FaSuitcase size={20} className="text-[#d89b17]" />
        </div>
        <h1 className="text-[#d89b17] font-semibold text-2xl">
          Job Information
        </h1>
      </div>
      {/*content*/}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 items-center justify-center">
        <div className="xl:col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {/* inputs*/}
            <div className="flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold text-gray">
                Date of Employement
              </label>
              <div className="flex items-center bg-white rounded-[1em] shadow-lg mb-2">
                <FaCalendarAlt
                  size={20}
                  className="text-[#D89D1E] ml-5 flex-shrink-0"
                />
                <input
                  type="date"
                  placeholder="Enter First Name"
                  className="outline-none py-6 px-3 text-xl"
                  name="empldate"
                  onChange={handleEveryChange}
                  value={employee.empldate}
                />
              </div>
            </div>
            <div className=" flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold">Job Title</label>
              <div className="flex  flex-row items-center shadow-xl p-4 rounded-[1em]">
                <FaSuitcase size={20} className="text-[#d89b17]" />
                <select
                  className="flex-1 p-[12px] min-w-0 text-gray-700 font-medium outline-none"
                  value={employee.jobtitle}
                  onChange={handleEveryChange}
                  name="jobtitle"
                >
                  <option value="">Select Position</option>
                  <option value="Coordinator">Coordinator</option>
                  <option value="Director of Health and Social Rehabilitation">
                    Director of Health and Social Rehabilitation
                  </option>
                  <option value="Director of Vocational Training">
                    Director of Vocational Training
                  </option>
                  <option value="Clinical Psychology">
                    Clinical Psychology
                  </option>
                  <option value="Trainer">Trainer</option>
                  <option value="Assistant Trainer">Assistant Trainer</option>
                  <option value="Mental Nurse Officer">
                    Mental Nurse Officer
                  </option>
                  <option value="Community Environmental Health Officer">
                    Community Environmental Health Officer
                  </option>
                  <option value="Database and ICT">Database and ICT</option>
                  <option value="Chief Cook">Chief Cook</option>
                  <option value="Cook">Cook</option>
                  <option value="Nurse">Nurse</option>
                  <option value="Laboratory Technician">
                    Laboratory Technician
                  </option>
                  <option value="Electrician">Electrician</option>
                  <option value="Logistic Officer">Logistic Officer</option>
                  <option value="Production Officer">Production Officer</option>
                  <option value="Navigator">Navigator</option>
                  <option value="Patient Attendant">Patient Attendant</option>
                </select>
              </div>
            </div>
            <div className=" flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold">
                Unit/Department
              </label>
              <div className="flex  flex-row items-center shadow-xl p-4 rounded-[1em]">
                <FcDepartment size={20} className="text-[#d89b17]" />
                <select
                  className="flex-1 min-w-0 p-[12px] text-gray-700 font-medium outline-none"
                  value={employee.unit}
                  name="unit"
                  onChange={handleEveryChange}
                >
                  <option value="">Select Unit</option>
                  <option value="Administration">Administration</option>
                  <option value="Health and Social Rehabilitation">
                    Health and Social Rehabilitation
                  </option>
                  <option value="Vocational Training">
                    Vocational Training
                  </option>
                </select>
              </div>
            </div>
            {/*gender field*/}
            <div className=" flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold">
                Employement Status
              </label>
              <div className="flex  flex-row items-center shadow-xl p-4 rounded-[1em]">
                <FaCheck size={20} className="text-[#d89b17]" />
                <select
                  className="flex-1 p-[12px] text-gray-700 font-medium outline-none"
                  name="empstatus"
                  onChange={handleEveryChange}
                  value={employee.empstatus}
                >
                  <option value="">Select</option>
                  <option value="Active">Active</option>
                  <option value="Not Active">Not Active</option>
                </select>
              </div>
            </div>
            {/*NID field*/}
            <div className=" flex flex-col p-3">
              <label className="block text-sm mb-2 font-bold">
                Computer Assigned
              </label>
              <div className="flex  flex-row items-center shadow-xl p-4 rounded-[1em]">
                <FaLaptop size={20} className="text-[#d89b17]" />
                <select
                  className="flex-1 p-[12px] text-gray-700 font-medium outline-none"
                  value={employee.compassign}
                  name="compassign"
                  onChange={handleEveryChange}
                  id=""
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobinfo;
