import React from "react";
import ItemCount from "./ItemCount.js";

import "./styles/Item.css";

const Item = ({
  id,
  imgUrl,
  title,
  brand,
  model,
  price,
  stock,
  description,
}) => {
  // Todo: hacer que las imagenes se muestren de manera dinámica (seguir tratando con webpack)
  // const cargarImagen = require.context('../../images', true);

  return (
    //  onClick={showDescription}

    // La idea es aplicar la función del onClick de arriba para hacer que renderice la información del artículo deseado sobre la página en la que se encuentre

    // La renderización sería un dív que se muestre arriba de todo ( con toda la info del producto y la posibilidad de compra directa ) y se cierre con una cruz

    // No aplico la función sobre el div que contiene el article porque tendría que pasar nuevamente las props, lo que se me hace que es un malgasto de cómputo

    <article className="card">
      <img
        // src={cargarImagen(`./${ imgUrl }.jpg`)}
        // Todo: segunda parte del webpack (a revisar)

        // No entiendo el por qué no muestra la imagen, siendo que el link de referencia está bien, también probé de otras maneras el link, pero no logro hacerlo funcionar
        src={imgUrl}
        alt={title}
        className={"card-image"}
      ></img>
      <h3 className={"card-tittle"}>{title}</h3>
      <p>Marca: {brand}</p>
      <p>Modelo: {model}</p>
      <p>Precio: $ {price}</p>
      <p>Stock actual: {stock}</p>
      <ItemCount stock={stock} />
    </article>
  );
};

export default Item;
