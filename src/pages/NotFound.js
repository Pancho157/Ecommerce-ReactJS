// El destino de la presente página es el de mostrar al usuario cuando hay un error en la URL

import "./styles/NotFound.css";

function NotFound() {
  return (
    <>
      <div className="NotFound--container">
        <h1 className="NotFound--title">Lo sentimos</h1>
        <p>
          No se encontró la página que está buscando :(
        </p>
        <p>Error: <span className="NotFound--error">404</span></p>
      </div>
    </>
  );
}

export default NotFound;
