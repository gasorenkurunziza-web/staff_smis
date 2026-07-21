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
  const initialEmployee = {
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
  };
  const [employee, setEmployee] = useState(initialEmployee);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const save_db = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        toast.success("Employee registered successfully");
        setEmployee(initialEmployee);
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Something went wrong while saving the employee";
      toast.error(message);
    } finally {
      setLoading(false);
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
      <Buttons save_db={save_db} loading={loading} />
    </div>
  );
};

export default Register;
