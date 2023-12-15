import React from "react";
import { ReactComponent as SquatIcon } from "../../icons/squat-icon.svg";
import LiftInput from "./LiftInput";

const SquatInput = () => {
  return <LiftInput icon={<SquatIcon className="fill-orange-500 h-10 w-10" />} liftName="Squat" />;
};

export default SquatInput;
