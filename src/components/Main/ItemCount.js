// Este archivo muestra un contador con la cantidad que el usuario quiere agregar al carrito de un cierto elemento
// También renderiza y da la función al botón para llevar al artículo al carrito

import { useState } from "react";

// Styles
import "./styles/ItemCount.css";

const ItemCount = ({ stock, action, buttonText }) => {
  const [userinput, setUserInput] = useState(1);

  // Funciones que agregan y restan al contador que indica la cantidad a agregar al carrito
  const onAdd = (e) => {
    e.stopPropagation();
    if (userinput < stock) {
      setUserInput(userinput + 1);
    }
  };

  const onRemove = (e) => {
    e.stopPropagation();
    if (userinput > 1) {
      setUserInput(userinput - 1);
    }
  };

  return (
    <>
      <div className={"count-container"}>
        <button onClick={onRemove} disabled={userinput <= 0 ? true : null}>
          -
        </button>
        <p>{userinput}</p>
        <button onClick={onAdd}>+</button>
      </div>

      <button className={"card-buy"} onClick={action}>
        {buttonText}
      </button>
    </>
  );
};

export default ItemCount;
