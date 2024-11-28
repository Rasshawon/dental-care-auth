/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "./../../firebase/firebase.config";

export const authContext = createContext();
const AuthProvider = ({ routes }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogOut = () => {
    signOut(auth);
  };
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const manageProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleLogOut,
    handleGoogleLogin,
    manageProfile,
    user,
    setUser,
    loading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <div>
      <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
