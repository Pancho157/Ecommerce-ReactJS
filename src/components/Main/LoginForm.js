import React, { useState } from "react";
import md5 from "md5";

// Styles
import "./styles/SingIn.css";

// Icons
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";

// Firebase
import database from "../../data/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export function RenderLoginForm() {
  const [userData, setUserData] = useState({
    user: "",
    password: "",
    newUser: "",
    newEmail: "",
    newPassword: "",
  });

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newUserData = {
      ...userData,
      [name]: value,
    };

    setUserData(newUserData);
  }

  const iniciarSesion = async (e) => {
    e.preventDefault(); // para prevenir la recarga de la página debido al envío del formulario
    const docRef = doc(database, "users", userData.user);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      if (docSnap.data().contraseña === md5(userData.password)) {
        // Acá va el sessionStorage con el nombre de usuario
      } else {
        alert("La contraseña es erronea");
      }
    } else {
      alert("No se encontró el usuario ingresado");
    }
  };

  const registrarUsuario = async (e) => {
    e.preventDefault(); // para prevenir la recarga de la página debido al envío del formulario
    const docRef = doc(database, "users", userData.newUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      alert("El nombre de usuario ingresado ya existe");
    } else {
      const newUserData = [
        {
          user: userData.newUser,
          contraseña: userData.newPassword,
          email: userData.newEmail,
        },
      ];

      const docRef = doc(database, "users", newUserData.user);
      await setDoc(docRef, newUserData);
      console.log("Exito");
    }
  };

  return (
    <>
      <main className="singIn--main">
        <section>
          <form className="singIng--form_container">
            <h1 className="singIng--form_title">Iniciar sesión</h1>
            <div>
              <div>
                <label className="singIng--form_label">
                  <FaRegUserCircle fontSize={"1.2rem"} />
                </label>
                <input
                  className="singIng--form_input"
                  id="user"
                  name="user"
                  value={userData.user}
                  placeholder={"Usuario"}
                  onChange={handleChange}
                ></input>
              </div>

              <div>
                <label className="singIng--form_label">
                  <BiLockOpenAlt fontSize={"1.2rem"} />
                </label>
                <input
                  type="password"
                  className="singIng--form_input"
                  id="password"
                  name="password"
                  value={userData.password}
                  placeholder={"Contraseña"}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <button className="singIng--form_button" onClick={iniciarSesion}>
              Iniciar Sesión
            </button>
          </form>
        </section>

        <h2 className="singIn_sectionsSeparator">O</h2>

        <section>
          <form className="singIng--form_container">
            <h1 className="singIng--form_title">Registrarse</h1>
            <div>
              <div>
                <label className="singIng--form_label">
                  <FaRegUserCircle fontSize={"1.2rem"} />
                </label>
                <input
                  className="singIng--form_input"
                  id="newUser"
                  name="newUser"
                  value={userData.newUser}
                  placeholder={"Usuario"}
                  onChange={handleChange}
                ></input>
              </div>

              <div>
                <label className="singIng--form_label">
                  <AiOutlineMail fontSize={"1.2rem"} />
                </label>
                <input
                  className="singIng--form_input"
                  id="newEmail"
                  name="newEmail"
                  value={userData.newEmail}
                  placeholder={"Email"}
                  onChange={handleChange}
                ></input>
              </div>

              <div>
                <label className="singIng--form_label">
                  <BiLockOpenAlt fontSize={"1.2rem"} />
                </label>
                <input
                  type="password"
                  className="singIng--form_input"
                  id="newPassword"
                  name="newPassword"
                  value={userData.newPassword}
                  placeholder={"Contraseña"}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <button className="singIng--form_button" onClick={registrarUsuario}>
              Registrarse
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
