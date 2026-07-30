import React from "react";
import { FaSave } from "react-icons/fa";
import { toast } from "sonner";

const Buttons = ({ employee, save_db }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
      <button
        onClick={() => {
          toast.success("Saved", {
            style: {
              fontSize: "30px",
              padding: "10px",
              border: "1px solid #32a800",
              color: "rgba(255, 208, 68, 0.82)",
              background: "#82d8ad",
              borderRadius: "2em",

              justifyContent: "center",
            },
          });
        }}
        className="w-full h-14 border-2 border-gray-500 bg-white rounded-[1em] font-semibold"
      >
        Cancel
      </button>

      <button
        onClick={save_db}
        className="w-full h-14 bg-[#d89b17] text-white rounded-[1em] font-semibold flex items-center justify-center gap-2"
      >
        <FaSave size={18} />
        Save
      </button>
    </div>
  );
};

export default Buttons;
