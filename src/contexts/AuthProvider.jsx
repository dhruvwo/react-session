import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("currentUser")
  );

  const loginUser = useCallback((user) => {
    localStorage.setItem("currentUser", user);
    setCurrentUser(user);
  }, []);

  const logoutUser = useCallback(() => {
    setCurrentUser();
    localStorage.removeItem("currentUser");
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, logoutUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
