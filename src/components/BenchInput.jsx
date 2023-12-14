import React from 'react'
import { ReactComponent as BenchIcon } from "../icons/benchpress-icon.svg";

const BenchInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <BenchIcon fill="white" className="h-10 w-10" />{" "}
        <span className="text-white underline pt-1">Bench Press</span>
      </div>

      <div className="flex gap-2">
        <div className='flex flex-col'>
          <input type="text" name="bench-input-set" id="bench-input-set" className="rounded-md w-12" />
          <label htmlFor="bench-input-set" className='text-white'>Sets</label>
        </div>

        <span className="text-white">X</span>

        <div className='flex flex-col'>
          <input type="text" name="bench-input-rep" id="bench-input-rep" className="rounded-md w-12" />
          <label htmlFor="bench-input-rep" className='text-white'>Reps</label>
        </div>
      </div>
    </div>
  );
}

export default BenchInput