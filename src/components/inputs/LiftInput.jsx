import React, { useState } from "react";

const LiftInput = ({ icon, liftName }) => {
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSetsChange = (e) => setSets(e.target.value);
  const handleRepsChange = (e) => setReps(e.target.value);
  const handleWeightChange = (e) => setWeight(e.target.value);

  return (
    <div className="flex flex-col gap-2 bg-slate-800 p-4 md:px-28 justify-center rounded-lg">
      <div className="flex justify-center">
        {icon}
        <span className="text-white underline">{liftName}</span>
      </div>

      <div className="flex gap-2 justify-center">
        <div className="flex flex-col">
          <input
            type="text"
            name={`${liftName.toLowerCase()}-input-set`}
            id={`${liftName.toLowerCase()}-input-set`}
            className="rounded-md w-12"
            value={sets}
            onChange={handleSetsChange}
          />
          <label htmlFor={`${liftName.toLowerCase()}-input-set`} className="text-white">
            Sets
          </label>
        </div>

        <span className="text-white">X</span>

        <div className="flex flex-col">
          <input
            type="text"
            name={`${liftName.toLowerCase()}-input-rep`}
            id={`${liftName.toLowerCase()}-input-rep`}
            className="rounded-md w-12"
            value={reps}
            onChange={handleRepsChange}
          />
          <label htmlFor={`${liftName.toLowerCase()}-input-rep`} className="text-white">
            Reps
          </label>
        </div>

        <span className="text-white">@</span>

        <div className="flex flex-col">
          <input
            type="text"
            name={`${liftName.toLowerCase()}-input-weight`}
            id={`${liftName.toLowerCase()}-input-weight`}
            className="rounded-md w-12"
            value={weight}
            onChange={handleWeightChange}
          />
          <label htmlFor={`${liftName.toLowerCase()}-input-weight`} className="text-white">
            lbs
          </label>
        </div>
      </div>
    </div>
  );
};

export default LiftInput;
