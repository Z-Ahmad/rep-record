import { createContext, useContext, useState, useEffect } from "react";
import { auth, db, getUserDocument } from "./utils/firebase";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userData = await getUserDocument();
        setUser({ id: authUser.uid, ...userData });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const contextValue = {
    user
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
