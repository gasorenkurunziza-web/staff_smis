import React from "react";
import RegTitle from "../Components/RegTitle";
import PersonalInfo from "../Components/PersonalInfo";
import Jobinfo from "../Components/Jobinfo";
import Educationinfo from "../Components/Educationinfo";
import Addressinfo from "../Components/Addressinfo";
import Nextkininfo from "../Components/Nextkininfo";
import Buttons from "../Components/Buttons";

const Register = () => {
  return (
    <div className="mx-5 p-5 ">
      <RegTitle />
      <PersonalInfo />
      <Jobinfo />
      <Educationinfo />
      <Addressinfo />
      <Nextkininfo />
      <Buttons />
    </div>
  );
};

export default Register;
