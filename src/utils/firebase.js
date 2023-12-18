import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.AUTH_API_KEY,
  authDomain: "rep-record.firebaseapp.com",
  projectId: "rep-record",
  storageBucket: "rep-record.appspot.com",
  messagingSenderId: "883767427354",
  appId: "1:883767427354:web:8b25d6b821d0f5f7d3aca3"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
