import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.init";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createWithMail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signWithMail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSign = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unscrbd = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unscrbd();
    };
  }, []);
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    loading,
    setLoading,
    user,
    setUser,
    googleSign,
    signWithMail,
    createWithMail,
    logOut,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
