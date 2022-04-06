// El objetivo de este archivo es el poder iniciar seción y posteriormente guardarlo en un session storage

import React, { useState } from "react";

// Styles
import "./styles/SingIn.css";

// Icons
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";

function SingIn() {
  const [usuario, setUsuario] = useState("Usuario");
  const [email, setEmail] = useState("Email");
  const [contraseña, setContraseña] = useState("Contraseña");

  const cambiarUsuario = (e) => {
    const value = e.target.value;
    console.log(value);
    setUsuario(value);
  };

  const cambiarEmail = (e) => {
    const value = e.target.value;
    console.log(value);
    setEmail(value);
  };

  const cambiarContraseña = (e) => {
    const value = e.target.value;
    console.log(value);
    setContraseña(value);
  };

  const iniciarSesion = () => {
    // Acá se desarrollaría la lógica para dejar la sesión iniciada en el sessionStorage
    console.log("Usuario: ", usuario);
    console.log("Contraseña: ", contraseña);
  };

  const registrarUsuario = () => {
    // Acá se desarrollaría la lógica para agregarlo a la BBDD del backend luego de verificar que no exista
    console.log("Usuario: ", usuario);
    console.log("Email: ", email);
    console.log("Contraseña: ", contraseña);
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
                  <FaRegUserCircle fontSize={"1.2rem"}/>
                </label>
                <input
                  className="singIng--form_input"
                  id="usuario"
                  name="usuario"
                  value={usuario}
                  onChange={cambiarUsuario}
                ></input>
              </div>

              <div>
                <label className="singIng--form_label">
                  <BiLockOpenAlt fontSize={"1.2rem"}/>
                </label>
                <input
                  className="singIng--form_input"
                  id="pass"
                  name="Contraseña"
                  value={contraseña}
                  onChange={cambiarContraseña}
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
                  <FaRegUserCircle fontSize={"1.2rem"}/>
                </label>
                <input
                  className="singIng--form_input"
                  id="usuario"
                  name="usuario"
                  value={usuario}
                  onChange={cambiarUsuario}
                ></input>
              </div>

              <div>
                <label className="singIng--form_label">
                  <AiOutlineMail fontSize={"1.2rem"}/>
                </label>
                <input
                  className="singIng--form_input"
                  id="email"
                  name="Email"
                  value={email}
                  onChange={cambiarEmail}
                ></input>
              </div>

              <div>
                <label className="singIng--form_label">
                  <BiLockOpenAlt fontSize={"1.2rem"}/>
                </label>
                <input
                  className="singIng--form_input"
                  id="pass"
                  name="Contraseña"
                  value={contraseña}
                  onChange={cambiarContraseña}
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
