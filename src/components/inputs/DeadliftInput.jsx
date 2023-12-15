import React from "react";
import { ReactComponent as DeadliftIcon } from "../../icons/deadlift-icon.svg";
import LiftInput from "./LiftInput";

const DeadliftInput = () => {
  return <LiftInput icon={<DeadliftIcon fill="orange" className="h-10 w-10" />} liftName="Deadlift" />;
};

export default DeadliftInput;
