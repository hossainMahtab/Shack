import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebaseConfig";

const FireAuthContext = createContext();

export const FireAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const emailSignUp = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const emailSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user", currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <FireAuthContext.Provider
      value={{ user, googleSignIn, logOut, emailSignUp, emailSignIn }}
    >
      {children}
    </FireAuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(FireAuthContext);
};
