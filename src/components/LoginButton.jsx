import React from 'react'
import { signInWithGooglePopup, signOutUser } from "../utils/firebase";
import { useUserContext } from '../UserContext';
import toast from 'react-hot-toast';

const notifyLogin = () => toast.success('Successfully logged in!');

const LoginButton = () => {
  const { user } = useUserContext();

  const logUser = async () => {
    if (user) {
      // User is already authenticated, perform logout
      console.log("Logging out:", user)
      const logoutPromise = signOutUser();
      toast.promise(logoutPromise, {
        loading: "Logging out...",
        success: "Logged out!",
        error: "Could not log out"
      });
    } else {
      // User is not authenticated, perform login
      try {
        const loginPromise = signInWithGooglePopup();
        toast.promise(loginPromise, {
          loading: 'Logging in...',
          success: 'Logged in!',
          error: 'Could not log in'
        })
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