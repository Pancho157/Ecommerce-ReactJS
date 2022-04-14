// Este archivo se utiliza para renderizar las cards mediante las props que se le pasen

import React, { useContext } from "react";

// Components
import ItemCount from "./ItemCount.js";

// Styles
import "./styles/Item.css";

const Item = ({ id, imgUrl, title, brand, model, price, stock }) => {
  // Todo: hacer que las imagenes se muestren de manera dinámica con archivos locales y sin estar en la carpeta public (seguir tratando con webpack)

  return (
    <article className="card" productid={id}>
      <img
        // src={cargarImagen(`./${ imgUrl }.jpg`)}
        // Todo: segunda parte del webpack (a revisar)

        src={imgUrl}
        alt={title}
        className={"card-image"}
      ></img>
      <h3 className={"card-tittle"}>{title}</h3>
      <p>Marca: {brand}</p>
      <p>Modelo: {model}</p>
      <p>Precio: $ {price}</p>
      <p>Stock actual: {stock}</p>
      <ItemCount
        stock={stock}
        data={{id, imgUrl, title, brand, model, price, stock}}
      />
    </article>
  );
};

export default Item;
