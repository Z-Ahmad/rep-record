import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./utils/firebase";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
      if (authUser) {
        authUser.getIdToken().then((token) => setUserToken(token));
      } else {
        setUserToken(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const contextValue = {
    user,
    userToken
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
