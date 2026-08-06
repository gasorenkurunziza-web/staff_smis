import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { employees } from "../assets/assets";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const MiddleComponents = () => {
  return (
    <div>
      {/* middle component*/}
      <div className="min-h-screen p-6">
        <div className="space-y-8">
          {/* heading section*/}
          <div>
            <h2 className="text-3xl font-bold text-yellow-500">
              All employees
            </h2>
            <p className="text-gray-500 mt-1">
              Manage and view all Registered Employees
            </p>
          </div>
          {/* search and filter*/}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-1">
              {/*search bar*/}
              <div className="relative w-full">
                <input
                  type="text"
                  name=""
                  className="w-full pl-4 pr-10 py-2.5 bg-white border border-yellow-500 rounded-lg focus:outline-none shadow-lg"
                  placeholder="Search by Email,Name,Job Title,Phone number"
                />
                <FaSearch className="absolute text-yellow-500 w-6 h-6 right-3 top-3" />
              </div>
              {/*search by unit*/}
              <div className="relative w-full">
                <select className="w-full appearance-none pl-4 pr-10 py-2.5 bg-white border text-gray-600 border-yellow-500 rounded-lg focus:outline-none shadow-lg">
                  <option value="">Select Unit</option>
                  <option value="unit1">Administration</option>
                  <option value="unit2">Health</option>
                  <option value="unit3">Vocational</option>
                </select>
                <IoMdArrowDropdownCircle className="absolute h-6 w-6 right-3 top-3 text-yellow-500" />
              </div>
              {/* search by status */}
              <div className="relative w-full">
                <select className="w-full appearance-none pl-4 pr-10 py-2.5 bg-white border text-gray-600 border-yellow-500 rounded-lg focus:outline-none shadow-lg">
                  <option value="">Select Employee Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <IoMdArrowDropdownCircle className="absolute h-6 w-6 right-3 top-3 text-yellow-500" />
              </div>
            </div>
            {/*Add Employee Button*/}
            <button className="flex items-center justify-center gap-2 px-5 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
              <GoPlus />
              <span>Add Employee</span>
            </button>
          </div>
          {/* table section for employees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className=" relative bg-white p-4 border border-yellow-500 rounded-xl shadow-lg flex flex-col text-center items-center gap-2 overflow-hidden"
              >
                <div className="absolute top-2 right-2 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-xs text-green-500">
                    {employee.status}
                  </span>
                </div>
                {/*profile image*/}
                <div className="mt-2 mb-4 rounded-full object-cover overflow-hidden w-24 h-24">
                  <img
                    src={employee.image[0]}
                    alt={employee.name}
                    className="w-24 h-24"
                  />
                </div>
                {/* employee info*/}
                <h2 className="text-lg text-black font-semibold">
                  {employee.name}
                </h2>

                <p className="text-sm text-gray-400">{employee.jobtitle}</p>
                <div className="mt-2 bg-yellow-100">
                  <p className="text-sm text-yellow-700">{employee.unit}</p>
                </div>
                <div className="w-full pt-4 space-y-2 text-left border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div>
                      <IoMdMail className="text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-600">
                      {employee.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className=" text-gray-500 " />
                    <span className="text-sm text-gray-600">
                      {employee.phone}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleComponents;
