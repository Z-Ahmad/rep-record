import React from "react";
import { ReactComponent as SquatIcon } from "../../icons/squat-icon.svg";
import LiftInput from "./LiftInput";

const SquatInput = () => {
  return <LiftInput icon={<SquatIcon fill="orange" className="h-10 w-10" />} liftName="Squat" />;
};

export default SquatInput;
