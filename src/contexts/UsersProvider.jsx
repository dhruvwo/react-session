import { createContext, useCallback, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 123,
      name: "First User",
    },
  ]);

  const addUser = useCallback((user) => {
    setUsers((prev) => [...prev, user]);
  }, []);

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
};
