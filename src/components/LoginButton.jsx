import React from 'react'
import { signInWithGooglePopup, signOutUser } from "../utils/firebase";
import { useUserContext } from '../UserContext';

const LoginButton = () => {
  const { user } = useUserContext();

  const logUser = async () => {
    if (user) {
      // User is already authenticated, perform logout
      console.log("Logging out:", user)
      await signOutUser();
    } else {
      // User is not authenticated, perform login
      try {
        await signInWithGooglePopup();
      } catch (error) {
        console.error("Error signing in:", error);
      }
    }
  };

  return (
    <>
      <button onClick={logUser} className={`bg-orange-600 hover:bg-orange-700 transition-all px-4 py-1 rounded-md`}>
        {user ? "Logout" : "Login"}
      </button>
    </>
  );
};

export default LoginButton;