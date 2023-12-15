import React, { useState } from "react";
import {ReactComponent as LbsIcon} from '../../icons/lbs-icon.svg'
import {ReactComponent as KgIcon} from '../../icons/kg-icon.svg'

const LiftInput = ({ icon, liftName }) => {
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [units, setUnits] = useState("lbs")

  const handleSetsChange = (e) => setSets(e.target.value);
  const handleRepsChange = (e) => setReps(e.target.value);
  const handleWeightChange = (e) => setWeight(e.target.value);

  const handleUnitChange = () => {
    const poundsToKilograms = 2.2046; 

    if (units === "lbs") {
      if (weight >= 0) {
        setWeight((weight / poundsToKilograms).toFixed(2)); // Use toFixed for better precision
      }
      setUnits("kg");
    } else {
      if (weight >= 0) {
        setWeight((weight * poundsToKilograms).toFixed(2)); // Use toFixed for better precision
      }
      setUnits("lbs");
    }
  };

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
            className="rounded-md w-16"
            value={weight}
            onChange={handleWeightChange}
          />
          <label htmlFor={`${liftName.toLowerCase()}-input-weight`} className="text-white">
            {units === 'lbs' ? 'lbs' : 'kg'}
          </label>
        </div>

        <div onClick={handleUnitChange}>
          {units === 'lbs' ? 
            <LbsIcon className="fill-orange-500 h-9 w-9 -mt-2 
              hover:cursor-pointer hover:fill-orange-600 transition-all"/> 
            : 
            <KgIcon className="fill-orange-500 h-9 w-9 -mt-2 hover:cursor-pointer 
              hover:fill-orange-600 transition-all"/>
          }
        </div>
      </div>
    </div>
  );
};

export default LiftInput;
