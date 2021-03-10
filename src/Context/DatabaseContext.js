import React, { useContext, useState } from "react";
import { database } from "configs/firebase";

const DatabaseContext = React.createContext();

export const useDatabase = () => useContext(DatabaseContext);

export const DatabaseProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const addToCart = async ({
    name,
    email,
    phone,
    id,
    price,
    title,
    userId,
  }) => {
    try {
      database.ref("/" + userId + new Date().getTime()).set({
        name,
        email,
        phone,
        id,
        price,
        title,
      });
    } catch (error) {
      throw new Error(error).toString();
    }
  };

  const value = {
    addToCart,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
