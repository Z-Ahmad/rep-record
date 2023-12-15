import React from "react";
import { ReactComponent as DeadliftIcon } from "../icons/deadlift-icon.svg";

const DeadliftInput = () => {
  return (
    <div className="flex flex-col gap-2 bg-slate-800 p-4 px-5 mx-10 md:px-28 justify-center rounded-lg">
      <div className="flex justify-center">
        <DeadliftIcon fill="orange" className="h-10 w-10" /> <span className="text-white underline">Deadlift</span>
      </div>

      <div className="flex gap-2 justify-center">
        <div className="flex flex-col">
          <input type="text" name="deadlift-input-set" id="deadlift-input-set" className="rounded-md w-12" />
          <label htmlFor="deadlift-input-set" className="text-white">
            Sets
          </label>
        </div>

        <span className="text-white">X</span>

        <div className="flex flex-col">
          <input type="text" name="deadlift-input-rep" id="deadlift-input-rep" className="rounded-md w-12" />
          <label htmlFor="deadlift-input-rep" className="text-white">
            Reps
          </label>
        </div>

        <span className="text-white">@</span>

        <div className="flex flex-col">
          <input type="text" name="deadlift-input-weight" id="deadlift-input-weight" className="rounded-md w-12" />
          <label htmlFor="deadlift-input-weight" className="text-white">
            lbs
          </label>
        </div>


      </div>
    </div>
  );
};

export default DeadliftInput;
