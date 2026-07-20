import React from "react";
import { FaSave } from "react-icons/fa";
import Spinner from "./Spinner";

const Buttons = ({ save_db, loading }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
      <button
        type="button"
        disabled={loading}
        className="w-full h-14 border-2 border-gray-500 bg-white rounded-[1em] font-semibold disabled:opacity-50"
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={save_db}
        disabled={loading}
        className="w-full h-14 bg-[#d89b17] text-white rounded-[1em] font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Spinner size={18} />
            Saving...
          </>
        ) : (
          <>
            <FaSave size={18} />
            Save
          </>
        )}
      </button>
    </div>
  );
};

export default Buttons;
