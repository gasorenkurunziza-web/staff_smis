import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const adminContext = createContext();
const AdminContextProvider = (props) => {
  const navigation = useNavigate();
  const value = { navigation };
  return (
    <adminContext.Provider value={value}>
      {props.children}
    </adminContext.Provider>
  );
};
export default AdminContextProvider;
