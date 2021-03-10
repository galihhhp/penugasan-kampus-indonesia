import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import { auth } from "configs/firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const loginEmailPassword = async (email, password) => {
    try {
      const data = await auth.signInWithEmailAndPassword(email, password);
      console.log(data.user);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          throw new Error("Invalid email").toString();
        case "auth/wrong-password":
          throw new Error("Wrong password").toString();
        case "auth/user-not-found":
          throw new Error("User not found").toString();
        case "auth/user-disabled":
          throw new Error("User has been disabled").toString();
        default:
          throw new Error(
            "Something bad happened, please try again"
          ).toString();
      }
    }
  };

  const registerEmailPassword = async (email, password) => {
    setLoading(true);

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setLoading(false);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          throw new Error(
            "Already exists an account with the given email address"
          ).toString();
        case "auth/invalid-email":
          throw new Error("The email address is not valid").toString();
        case "auth/operation-not-allowed":
          throw new Error("Email/password accounts are not enabled").toString();
        case "auth/weak-password":
          throw new Error("the password is not strong enough").toString();
        default:
          throw new Error(
            "Something bad happened, please try again"
          ).toString();
      }
    }

    setLoading(false);
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      firebase.auth().signInWithPopup(provider);
    } catch (error) {
      const errorMessage = error.message;
      throw new Error(errorMessage);
    }
  };

  const logout = async () => {
    try {
      auth.signOut();
    } catch (error) {
      throw new Error("Something went wrong").toString();
    }
  };

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
    setLoading(false);
  });

  const value = {
    loading,
    logout,
    currentUser,
    loginEmailPassword,
    loginWithGoogle,
    registerEmailPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
