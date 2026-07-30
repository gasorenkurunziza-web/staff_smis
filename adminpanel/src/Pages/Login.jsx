import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import {
  User,
  Lock,
  GraduationCap,
  BookOpen,
  MapPinned,
  MapPin,
  House,
} from "lucide-react";
import { adminContext } from "../../Context/adminContext";
import { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("israel");
  const [password, setpassword] = useState("gas");
  const { navigation } = useContext(adminContext);

  return (
    <div className="h-screen flex">
      {/*left side*/}
      <div
        className=" flex flex-col items-center justify-center text-xl hidden sm:hidden md:flex md:w-1/2 lg:w-1/2 xl:w-1/2 h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assets.bg2})` }}
      ></div>
      {/*right side*/}
      <div className=" w-full sm: w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-5 sm:p-6 md:p-10 lg:p-16 bg-gradient-to-br from-yellow-50 via white to-yellow-100 flex justify-center items-center">
        <div className="flex flex-col bg-white rounded-[25px] shadow-7xl flex justify-start items-center w-[460px] md:w-[460px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] h-[600px] md:h-[600px] lg:h-[600px] xl:h-[600px] 2xl:h-[700px]">
          <h2 className=" mt-5 lg:mt-0 font-bold text-center text-yellow-600 p-5 sm:p-6 md:p-8 lg:p-16  2xl:p-14 text-4xl sm:text-4xl xl:text-4xl">
            Admin Panel
          </h2>
          <div className="flex w-4/5 mt-15 md:mt-0 items-center bg-white rounded-[2em] shadow-lg mb-10">
            <FaUserAlt
              size={25}
              className="text-[#D89D1E] ml-5 flex-shrink-0"
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="outline-none py-6 px-3 text-2xl"
            />
          </div>
          <div className="flex w-4/5 items-center bg-white rounded-[2em] shadow-lg mb-10">
            <FaLock size={25} className="text-[#D89D1E] ml-5 flex-shrink-0" />
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              className="outline-none py-6 px-3 text-2xl"
            />
          </div>
          {/* Register Button*/}

          <div className="w-full flex justify-end mt-4  ">
            <button
              onClick={() => navigation("/register")}
              className="text-[#d89d1e] text-xl hover:underline pr-20 "
            >
              Register
            </button>
          </div>
          {/* Login Button*/}
          <div className="w-full flex justify-center mt-4  ">
            <button className=" hover:scale-[1.02] hover:shadow-lg text-[#d89d1e] bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-2xl w-4/5 p-5 font-bold rounded-[2em] text-center">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
