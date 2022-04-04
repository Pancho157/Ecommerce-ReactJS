// Este archivo muestra un contador con la cantidad que el usuario quiere agregar al carrito de un cierto elemento
// También renderiza y da la función al botón para llevar al artículo al carrito

import { useState } from "react";

// Styles
import "./styles/ItemCount.css"

const ItemCount = ({ stock }) => {
  const [userinput, setUserInput] = useState(1);

  // Funciones que agregan y restan al contador que indica la cantidad a agregar al carrito
  const onAdd = () => {
    if (userinput < stock) {
      setUserInput(userinput + 1);
    }
  };

  const onRemove = () => {
    if (userinput > 1) {
      setUserInput(userinput - 1);
    }
  };

  const addToCart = (e) => {
    e.stopPropagation()
    console.log("stopPropagation")
    // desarrollar la función para gregarlo al carrito acá (por alguna razón no me funciona)
    // TODO: la idea sería agregar/eliminar los elementos de un array perteneciente al carrito y renderizarlos
  }

  return (
    <>
      <div className={"count-container"}>
        <button onClick={onRemove} disabled={userinput <= 0 ? true : null}>
          -
        </button>
        <p>{userinput}</p>
        <button onClick={onAdd}>+</button>
      </div>

      <button className={"card-buy"} onClick={addToCart}>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
