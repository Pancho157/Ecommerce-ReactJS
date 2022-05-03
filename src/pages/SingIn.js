// El objetivo de este archivo es el poder iniciar seción y posteriormente guardarlo en un session storage

import React from "react";

// Styles
import "./styles/SingIn.css";

// Icons
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";

function SingIn() {
  const [userData, setUserData] = React.useState({
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

  const iniciarSesion = () => {
    // Acá se desarrollaría la lógica para dejar la sesión iniciada en el sessionStorage
    console.log("Usuario: ", userData.user);
    console.log("Contraseña: ", userData.contraseña);
  };

  const registrarUsuario = () => {
    // Acá se desarrollaría la lógica para agregarlo a la BBDD del backend luego de verificar que no exista
    console.log("Usuario: ", userData.user);
    console.log("Email: ", userData.email);
    console.log("Contraseña: ", userData.contraseña);
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

export default SingIn;
