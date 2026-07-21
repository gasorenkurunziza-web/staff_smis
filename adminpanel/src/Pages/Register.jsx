import React, { useState } from "react";
import RegTitle from "../Components/RegTitle";
import PersonalInfo from "../Components/PersonalInfo";
import Jobinfo from "../Components/Jobinfo";
import Educationinfo from "../Components/Educationinfo";
import Addressinfo from "../Components/Addressinfo";
import Nextkininfo from "../Components/Nextkininfo";
import Buttons from "../Components/Buttons";
import axios from "axios";
import { backend_url } from "../App";
import { toast } from "sonner";

const Register = () => {
  console.log(backend_url);
  const [employee, setEmployee] = useState({
    empstatus: "",
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    nid: "",
    phone: "",
    empldate: "",
    jobtitle: "",
    unit: "",
    photo: null,
    compassign: "",
    edlevel: "",
    spec: "",
    district: "",
    sector: "",
    cell: "",
    village: "",
    nextofkin: "",
    nextofkinphone: "",
    nextofkinrelation: "",
  });

  // Single shared change handler for every text/select input across all
  // the form sections. Every input just needs name={field} onChange={handleChange}.
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const save_db = async (e) => {
    console.log(employee);
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstname", employee.firstname);
      formData.append("lastname", employee.lastname);
      formData.append("email", employee.email);
      formData.append("gender", employee.gender);
      formData.append("nid", employee.nid);
      formData.append("phone", employee.phone);
      formData.append("empldate", employee.empldate);
      formData.append("jobtitle", employee.jobtitle);
      formData.append("unit", employee.unit);
      formData.append("compassign", employee.compassign);
      formData.append("edlevel", employee.edlevel);
      formData.append("spec", employee.spec);
      formData.append("empstatus", employee.empstatus);
      formData.append("district", employee.district);
      formData.append("sector", employee.sector);
      formData.append("cell", employee.cell);
      formData.append("village", employee.village);
      formData.append("nextofkin", employee.nextofkin);
      formData.append("nextofkinphone", employee.nextofkinphone);
      formData.append("nextofkinrelation", employee.nextofkinrelation);

      if (employee.photo) {
        formData.append("photo", employee.photo);
      }

      const response = await axios.post(
        backend_url + "/api/employee/register",
        formData,
      );
      if (response.data.success) {
        toast.success("Employee Registered successfully");
        console.log("Saved Successfully");
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="mx-5 p-5 ">
      <RegTitle />
      <PersonalInfo
        employee={employee}
        setEmployee={setEmployee}
        onChange={handleChange}
      />
      <Jobinfo employee={employee} onChange={handleChange} />
      <Educationinfo employee={employee} onChange={handleChange} />
      <Addressinfo employee={employee} onChange={handleChange} />
      <Nextkininfo employee={employee} onChange={handleChange} />
      <Buttons
        save_db={save_db}
        employee={employee}
        setEmployee={setEmployee}
      />
    </div>
  );
};

export default Register;
