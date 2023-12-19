import React, { useState, useEffect } from "react";
import { getUserDocument, updateLiftData} from "../../utils/firebase";
import { useUserContext } from "../../UserContext";
import {ReactComponent as LbsIcon} from '../../icons/lbs-icon.svg'
import {ReactComponent as KgIcon} from '../../icons/kg-icon.svg'
import {ReactComponent as SaveIcon} from '../../icons/save-icon.svg'

const LiftInput = ({ icon, liftName }) => {
  const {user} = useUserContext();
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [units, setUnits] = useState("lbs")

  useEffect(() => {
    const fetchData = async () => {
      if(user){
        let lift = liftName.toLowerCase();
        if(lift === 'bench press'){
          lift = 'bench'
        }
        const userDoc = await getUserDocument();
        //display lift data of current lift
        // console.log(userDoc.liftData[lift]);
        setSets(userDoc.liftData[lift].sets);
        setReps(userDoc.liftData[lift].reps);
        setWeight(userDoc.liftData[lift].weight);
        setUnits(userDoc.liftData[lift].units);
      }
    };

    fetchData();
  }, [user]);

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

  const handleSubmitData = () => {
    let lift = liftName.toLowerCase();
    if (lift === "bench press") {
      lift = "bench";
    }
    const uploadData = { lift, weight, sets, reps, units };
    updateLiftData(uploadData);
  }

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

        <div onClick={handleSubmitData}>
          <SaveIcon className="fill-orange-500 h-6 w-6 mt-[.125rem] hover:cursor-pointer 
            hover:fill-orange-600 transition-all"/>
        </div>
      </div>
    </div>
  );
};

export default LiftInput;
