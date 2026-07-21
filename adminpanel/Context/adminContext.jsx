import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const adminContext = createContext();

const AdminContextProvider = (props) => {
  const navigation = useNavigate();

  // Restore session from localStorage on first load, so refreshing the
  // page doesn't log the admin out.
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [admin, setAdmin] = useState(() => {
    const stored = localStorage.getItem("admin");
    return stored ? JSON.parse(stored) : null;
  });

  // Whenever the token changes, keep axios' default header and
  // localStorage in sync so every request automatically carries it.
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = (newToken, adminData) => {
    setToken(newToken);
    setAdmin(adminData);
    localStorage.setItem("admin", JSON.stringify(adminData));
  };

  const logout = () => {
    setToken(null);
    setAdmin(null);
    localStorage.removeItem("admin");
    navigation("/");
  };

  const value = { navigation, token, admin, login, logout };
  return (
    <adminContext.Provider value={value}>
      {props.children}
    </adminContext.Provider>
  );
};
export default AdminContextProvider;

