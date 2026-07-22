import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { Toaster } from "sonner";
export const backend_url = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  return (
    <div>
      <>
        <Toaster position="top-center" richColors closeButton duration={5000} />
      </>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
