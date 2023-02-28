// Esta página está destinada a poseer un formulario para reportar errores y posibles mejoras
import { useState } from "react";

// Firebase
import database from "../data/firebase";
import { addDoc, collection } from "firebase/firestore";

// Styles
import "./styles/Contact.css";
function Contact() {
  // const [loggedInUser, isLoggedIn] = useContext(CartContext);
  // Todo: Ver por qué el context genera error
  const [asunto, setAsunto] = useState("Asunto");
  const [mensaje, setMensaje] = useState("Mensaje");
  const [messageData, setMessageData] = useState({
    user: "",
    title: "",
    message: "",
    date: "",
  });

  const cambiarAsunto = (e) => {
    const value = e.target.value;
    console.log(value);
    setAsunto(value);
  };

  const cambiarMensaje = (e) => {
    const value = e.target.value;
    console.log(value);
    setMensaje(value);
  };

  const pushMessage = async () => {
    const orderFirebase = collection(database, "usersMessages");
    setMessageData({
      // user: loggedInUser,
      title: asunto,
      message: mensaje,
      creationDate: new Date().toLocaleDateString(),
    });
    const orderDoc = await addDoc(orderFirebase, messageData);
  };

  return (
    <>
      <main className="contact--main">
        <section>
          <form className="contact--form_container">
            <h1 className="contact--form_title">
              Cuentanos sobre lo que viste!
            </h1>
            <p>
              Siempre se agradece la información y participación que nos pueda
              brindar
            </p>
            <div>
              <input
                className="contact--form_input"
                id="asunto"
                name="Asunto"
                value={asunto}
                onChange={cambiarAsunto}
              ></input>

              <textarea
                className="contact--form_message"
                id="mensaje"
                name="mensaje"
                value={mensaje}
                onChange={cambiarMensaje}
              ></textarea>
            </div>

            <button className="contact--form_button" onClick={cambiarMensaje}>
              Enviar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contact;
