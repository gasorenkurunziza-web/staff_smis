import React from "react";

const MiddleComponents = () => {
  return (
    <div>
      {/* middle component*/}
      <div className="min-h-screen">
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
            <div className="flex flex-col sm:flex-row items-center gap-3 flex -1">
              {/*search bar*/}
              <div className="relative w-full">
                <input
                  type="text"
                  name=""
                  placeholder="Search by Email,name,jobtitle,phone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleComponents;
