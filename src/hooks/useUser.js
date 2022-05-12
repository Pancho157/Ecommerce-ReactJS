import { useContext, useCallback } from "react";
import UserContext from "../context/UserContext";
import md5 from "md5";

// Firebase
import database from "../data/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function useUser() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const login = useCallback(
    async (user, password) => {
      const docRef = doc(database, "users", user);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
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

  return {
    isLoggedIn: Boolean(loggedInUser),
    login,
    registerNewUser,
    logOut,
  };
}
