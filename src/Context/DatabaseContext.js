import React, { useContext } from "react";
import { database } from "configs/firebase";
import { useAuth } from "Context/AuthContext";

const DatabaseContext = React.createContext();

export const useDatabase = () => useContext(DatabaseContext);

export const DatabaseProvider = ({ children }) => {
  const { currentUser } = useAuth();

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
      database.ref("/" + userId).set({
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

  const getData = () => {
    const userId = currentUser.uid;
    const cart = database.ref("/" + userId);
    cart.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };

  const value = {
    addToCart,
    getData,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
