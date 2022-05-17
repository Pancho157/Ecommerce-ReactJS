import React, { useState, createContext, useCallback } from "react";
import md5 from "md5";

// Firebase
import database from "../data/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Funciones
  const login = useCallback(
    async (user, password) => {
      const docRef = doc(database, "users", user);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // La contraseña se encripta con md5 porque se almacena de esa manera en la BBDD
        if (docSnap.data().contraseña === md5(password)) {
          // Acá va el sessionStorage con el nombre de usuario
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
          user: newUser,
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

export default UserContext;

// Todo: Hacer todo lo del context en este archivo y eliminar el hook useUser
// Basarme en el cartContext
