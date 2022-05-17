import React, { useState, createContext, useCallback } from "react";
import md5 from "md5";

// Firebase
import database from "../data/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Funciones
  const login = useCallback(
    async (user, password) => {
      const docRef = doc(database, "users", user);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // La contraseña se encuentra encriptada con md5 en la BBDD
        if (docSnap.data().contraseña === md5(password)) {
          setLoggedInUser(user); // Almacena el nombre de usuario
        } else {
          alert("La contraseña es erronea");
        }
      } else {
        alert("No se encontró el usuario ingresado");
      }
    },
    [setLoggedInUser]
  );

  const registerNewUser = async (newUser, newPassword, newEmail) => {
    const docRef = doc(database, "users", newUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      alert("El nombre de usuario ingresado ya existe");
    } else {
      const newUserData = [
        {
          contraseña: newPassword,
          email: newEmail,
        },
      ];

      const docRef = doc(database, "users", newUserData.user);
      await setDoc(docRef, newUserData);
      console.log("Exito");
    }
  };

  const logOut = useCallback(() => {
    setLoggedInUser(null);
  }, [setLoggedInUser]);

  // Datos y funciones que se exportan
  const data = {
    loggedInUser,
    setLoggedInUser,
    isLoggedIn: Boolean(loggedInUser),
    login,
    registerNewUser,
    logOut,
  };

  return (
    <UserContext.Provider value={{ data }}>{children}</UserContext.Provider>
  );
}

export { UserContextProvider };
export default UserContext;
