import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
export const backend_url = import.meta.env.VITE_BACKEND_URL;
import { Toaster } from "sonner";
import { adminContext } from "../Context/adminContext";

// Redirects to the login page if there's no admin session.
const ProtectedRoute = ({ children }) => {
  const { token } = useContext(adminContext);
  return token ? children : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <div>
      <Toaster position="top-right" richColors closeButton duration={3000} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
