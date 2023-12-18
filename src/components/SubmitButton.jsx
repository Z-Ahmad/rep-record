import React from "react";
import { useUserContext } from "../UserContext";

const SubmitButton = () => {
  const { user, userToken } = useUserContext();

  return (
    <button
      className={`bg-green-500 hover:bg-green-600 text-white w-full transition-all rounded-md py-2 
      disabled:bg-gray-600 disabled:text-gray-400`}
      disabled={!user} // Disable the button if user is not logged in
    >
      {user ? "Save Progress" : "Login to Save Progress"}
    </button>
  );
};

export default SubmitButton;
