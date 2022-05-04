// El objetivo de este archivo es el poder iniciar seción y posteriormente guardarlo en un session storage

import React, { useState } from "react";
import md5 from "md5";

// Styles
import "./styles/SingIn.css";

// Icons
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";

// Usuarios
import { users } from "../data/data";

function SingIn() {
  const [userData, setUserData] = useState({
    user: "",
    password: "",
  });

  const [newUserData, setNewUserData] = useState({
    newUser: "",
    newEmail: "",
    newPassword: "",
  });

  function handleChangeUser(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newUserData = {
      ...userData,
      [name]: value,
    };

    setUserData(newUserData);
    console.log(userData)
  }

  function handleChangeNewUser(evt) {
    const { target } = evt;
    const { name, value } = target;

    const userToCreateData = {
      ...newUserData,
      [name]: value,
    };

    setNewUserData(userToCreateData);
    console.log(newUserData)
  }

  const iniciarSesion = (e) => {
    e.preventDefault(); // para prevenir la recarga de la página debido al envío del formulario
    const foundUser = users.find(
      (foundUser) => foundUser.user === userData.user
    );

    if (foundUser.user !== undefined) {
      if (
        foundUser.user === userData.user &&
        foundUser.password === md5(userData.password)
      ) {
        console.log("Información del usuario: ", userData);
        // Acá se desarrolla la lógica del inicio de sesión para el session storage
      } else {
        alert("La contraseña o el usuario no cohincíden");
      }
    } else {
      alert("No se encontró el usuario especificado");
    }
  };

  const registrarUsuario = (e) => {
    e.preventDefault(); // para prevenir la recarga de la página debido al envío del formulario

    console.log("Usuario: ", newUserData.newUser);
    console.log("Email: ", newUserData.newEmail);
    console.log("Contraseña: ", md5(newUserData.newPassword));
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
                  onChange={handleChangeUser}
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
                  onChange={handleChangeUser}
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
                  value={newUserData.newUser}
                  placeholder={"Usuario"}
                  onChange={handleChangeNewUser}
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
                  value={newUserData.newEmail}
                  placeholder={"Email"}
                  onChange={handleChangeNewUser}
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
                  value={newUserData.newPassword}
                  placeholder={"Contraseña"}
                  onChange={handleChangeNewUser}
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

export default SingIn;
