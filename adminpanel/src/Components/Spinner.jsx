import React from "react";
import { FaSpinner } from "react-icons/fa";

// size in px, matches the size prop other react-icons take
const Spinner = ({ size = 18, className = "" }) => (
  <FaSpinner size={size} className={`animate-spin ${className}`} />
);

export default Spinner;
