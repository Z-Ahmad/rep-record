import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import {getFirestore, collection, setDoc, getDoc, doc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDz293oeqjExoAV7rWmMmc1NxoXH3Dy81A",
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
export const db = getFirestore(firebaseApp)

export const signInWithGooglePopup = async () => {
  try {
    await signInWithPopup(auth, provider);
    //get user id
    console.log("User signed in successfully");
    const user = auth.currentUser;
    await createUserDocument(user);
  } catch (error) {
    console.error("Error signing in:", error);
  }
}

export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export const createUserDocument = async (user) => {
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    await setDoc(docRef, {
      liftData: {
        bench: {
          weight: 0,
          reps: 0,
          sets: 0
        },
        deadlift: {
          weight: 0,
          reps: 0,
          sets: 0
        },
        squat: {
          weight: 0,
          reps: 0,
          sets: 0
        }
      }
    });
    console.log("New user document created");
  } else {
    console.log("User document already exists");
  }
}


