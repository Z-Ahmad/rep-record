import React from "react";
import { ReactComponent as SquatIcon } from "../icons/squat-icon.svg";

const SquatInput = () => {
  return (
    <div className="flex flex-col gap-2 bg-slate-800 p-4 md:px-28 justify-center rounded-lg">
      <div className="flex justify-center">
        <SquatIcon fill="white" className="h-10 w-10" /> <span className="text-white underline">Squat</span>
      </div>

      <div className="flex gap-2 justify-center">
        <div className="flex flex-col">
          <input type="text" name="squat-input-set" id="squat-input-set" className="rounded-md w-12" />
          <label htmlFor="squat-input-set" className="text-white">
            Sets
          </label>
        </div>

        <span className="text-white">X</span>

        <div className="flex flex-col">
          <input type="text" name="squat-input-rep" id="squat-input-rep" className="rounded-md w-12" />
          <label htmlFor="squat-input-rep" className="text-white">
            Reps
          </label>
        </div>
      </div>
    </div>
  );
};

export default SquatInput;
