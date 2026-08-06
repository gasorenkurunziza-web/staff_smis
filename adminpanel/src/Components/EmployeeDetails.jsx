import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLocationArrow,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { detailemp, employees } from "../assets/assets";
import { FaLocationDot } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuPencilLine } from "react-icons/lu";

const EmployeeDetails = () => {
  return (
    <div className=" bg-white flex items-start justify-center p-4 border. border-yellow-500">
      <div className="w-full  h-auto relative overflow-hidden shadow-2xl rounded-xl">
        {/*closing button*/}
        <button className="absolute text-gray-600 top-1 right-3">x</button>
        {/*Employee Details*/}
        <div className="flex p-3 mt-4 gap-2 items-center">
          <FaUser className="text-yellow-500 text-xs lg:text-[20px]" />
          <h2 className="text-yellow-500 font-bold text-xs md:text-[12px] xl:text-lg">
            Employee Details
          </h2>
        </div>
        {detailemp.map((employee) => (
          <div>
            <div className="flex flex-row gap-2 md:gap-6 lg:m-5 shadow-xl p-4">
              <div className="flex flex-col gap-4 rounded-full">
                <img
                  src={employee.image}
                  alt=""
                  srcset=""
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <div>
                <div className="flex gap-1 items-center justify-start w-full">
                  <span className="w-2 h-2 mt-1 rounded-full bg-green-500"></span>
                  <span className="text-xs text-green-500">
                    {employee.status}
                  </span>
                </div>
                <h3 className="text-xs mt-1 md:text-lg lg:text-xl">
                  {employee.firstname} {employee.lastname}
                </h3>
                <p className="text-sm md:text-md mt-1 text-yellow-500">
                  {employee.jobtitle}
                </p>
                <div className="bg-yellow-100">
                  <p className="  text-sm md:text-md mt-1 text-yellow-700">
                    {employee.unit}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Title icon={<FaUser size={14} />} title="Personal Information">
                <Personinfo label="First Name: " value={employee.firstname} />
                <Personinfo label="Last Name: " value={employee.lastname} />
                <Personinfo label="Gender: " value={employee.gender} />
                <Personinfo label="E-mail: " value={employee.email} />
                <Personinfo label="Phone Number: " value={employee.phone} />
                <Personinfo label="National ID: " value={employee.nid} />
                <Personinfo
                  label="Computer Assignment: "
                  value={employee.compassign}
                />
              </Title>
              <Title icon={<FaBriefcase size={14} />} title="Job Information">
                <Personinfo label="Position: " value={employee.jobtitle} />
                <Personinfo label="Unit: " value={employee.unit} />
                <Personinfo label="Status : " value={employee.status} />
                <Personinfo
                  label="Employment Date: "
                  value={employee.empldate}
                />
              </Title>
              <Title
                icon={<FaGraduationCap size={14} />}
                title="Education Information"
              >
                <Personinfo label="Qualification: " value={employee.edlevel} />
                <Personinfo label="Specialization: " value={employee.spec} />
              </Title>
              <Title
                icon={<FaLocationDot size={14} />}
                title="Location Information"
              >
                <Personinfo label="District: " value={employee.district} />
                <Personinfo label="Sector: " value={employee.sector} />
                <Personinfo label="Cell: " value={employee.cell} />
                <Personinfo label="Village: " value={employee.village} />
              </Title>
              <Title
                icon={<FiUsers size={14} />}
                title="Next of Kin Information"
              >
                <Personinfo
                  label="Next of Kin Name: "
                  value={employee.nextofkin}
                />
                <Personinfo
                  label="Next of Kin Phone: "
                  value={employee.nextofkinphone}
                />
                <Personinfo
                  label="Relationship: "
                  value={employee.nextofkinrelation}
                />
              </Title>

              <div className=" flex w-full items-center justify-center">
                <button className="mt-6 w-4/5 mb-8 py-1 rounded-md flex items-center justify-center gap-2 bg-yellow-500 text-white">
                  <LuPencilLine className="text-white" /> Edit Employee
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
function Personinfo({ label, value }) {
  return (
    <div className="grid grid-cols-2 text-sm pl-3 pt-1">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-500">{value}</span>
    </div>
  );
}
export function Title({ icon, title, children }) {
  return (
    <div className="mt-6">
      <div className="text-yellow-500 text-xs flex items-center gap-2 pl-3">
        {icon}
        <span className="text-lg">{title}</span>
      </div>
      {children}
    </div>
  );
}
export default EmployeeDetails;
