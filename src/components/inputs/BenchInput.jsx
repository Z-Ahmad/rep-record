import React from "react";
import { ReactComponent as BenchIcon } from "../../icons/benchpress-icon.svg";
import LiftInput from "./LiftInput";

const BenchInput = () => {
  return (
    <LiftInput 
      icon={<BenchIcon 
      className="fill-orange-500 h-10 w-10"/>}
      liftName="Bench Press" />
  );
};

export default BenchInput;
