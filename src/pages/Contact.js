// Esta página está destinada a poseer un formulario para reportar errores y posibles mejoras
import { useState } from "react";
import "./styles/Contact.css";
function Contact() {
  const [asunto, setAsunto] = useState("Asunto");
  const [mensaje, setMensaje] = useState("Mensaje");

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
