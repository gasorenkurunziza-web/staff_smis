import React from "react";
import MiddleComponents from "../Components/MiddleComponents.jsx";
import EmployeeDetails from "../Components/EmployeeDetails.jsx";
import Leftsidebar from "../Components/Leftsidebar.jsx";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <div className="">
        <Leftsidebar />
      </div>
      <div className="grid grid-cols-[3fr_1fr] gap-6">
        <MiddleComponents />
        <EmployeeDetails />
      </div>
    </div>
  );
};

export default Dashboard;
