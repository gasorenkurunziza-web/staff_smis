import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { backend_url } from "../App";
import { adminContext } from "../../Context/adminContext";
import { FaUsers, FaUserCheck, FaUserSlash, FaBuilding } from "react-icons/fa";
import Spinner from "../Components/Spinner";

const StatCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 bg-white rounded-[1.5em] shadow-lg p-5">
    <div className="w-12 h-12 rounded-xl bg-yellow-200 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const { admin, logout } = useContext(adminContext);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(backend_url + "/api/employee/all");
        setEmployees(response.data);
      } catch (error) {
        const message =
          error.response?.data?.message || "Could not load employees";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  // Derive the summary stats from whatever employee list we already have,
  // instead of asking the backend for separate count endpoints.
  const stats = useMemo(() => {
    const total = employees.length;
    const active = employees.filter((e) => e.empstatus === "Active").length;
    const notActive = total - active;

    const byUnit = employees.reduce((acc, e) => {
      acc[e.unit] = (acc[e.unit] || 0) + 1;
      return acc;
    }, {});

    return { total, active, notActive, byUnit };
  }, [employees]);

  return (
    <div className="mx-5 p-5">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#d89b17]">Dashboard</h1>
          {admin && (
            <p className="text-gray-400 mt-2 ml-1">Welcome back, {admin.name}</p>
          )}
        </div>
        <button
          onClick={logout}
          className="text-[#d89b17] border-2 border-[#d89b17] rounded-[1em] px-6 py-2 font-semibold hover:bg-[#d89b17] hover:text-white transition"
        >
          Logout
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<FaUsers size={20} className="text-[#d89b17]" />}
          label="Total Employees"
          value={stats.total}
        />
        <StatCard
          icon={<FaUserCheck size={20} className="text-[#d89b17]" />}
          label="Active"
          value={stats.active}
        />
        <StatCard
          icon={<FaUserSlash size={20} className="text-[#d89b17]" />}
          label="Not Active"
          value={stats.notActive}
        />
        <StatCard
          icon={<FaBuilding size={20} className="text-[#d89b17]" />}
          label="Units"
          value={Object.keys(stats.byUnit).length}
        />
      </div>

      {/* Breakdown by unit */}
      <div className="bg-white rounded-[1.5em] shadow-lg p-5 mb-8">
        <h2 className="text-xl font-semibold text-[#d89b17] mb-4">
          Employees by Unit
        </h2>
        {Object.keys(stats.byUnit).length === 0 ? (
          <p className="text-gray-400">No data yet</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {Object.entries(stats.byUnit).map(([unit, count]) => (
              <div
                key={unit}
                className="flex justify-between items-center bg-yellow-50 rounded-[1em] px-4 py-3"
              >
                <span className="text-gray-700">{unit}</span>
                <span className="font-bold text-[#d89b17]">{count}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Employee table */}
      <div className="bg-white rounded-[1.5em] shadow-lg p-5 overflow-x-auto">
        <h2 className="text-xl font-semibold text-[#d89b17] mb-4">
          All Employees
        </h2>
        {loading ? (
          <div className="flex items-center gap-3 text-gray-400 py-6">
            <Spinner size={20} />
            Loading employees...
          </div>
        ) : employees.length === 0 ? (
          <p className="text-gray-400">No employees registered yet</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-sm">
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Job Title</th>
                <th className="py-3 pr-4">Unit</th>
                <th className="py-3 pr-4">Status</th>
                <th className="py-3 pr-4">Phone</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr
                  key={emp._id}
                  className="border-b border-gray-100 hover:bg-yellow-50"
                >
                  <td className="py-3 pr-4">
                    {emp.firstname} {emp.lastname}
                  </td>
                  <td className="py-3 pr-4">{emp.jobtitle}</td>
                  <td className="py-3 pr-4">{emp.unit}</td>
                  <td className="py-3 pr-4">
                    <span
                      className={
                        emp.empstatus === "Active"
                          ? "text-green-600 font-semibold"
                          : "text-red-500 font-semibold"
                      }
                    >
                      {emp.empstatus}
                    </span>
                  </td>
                  <td className="py-3 pr-4">{emp.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
