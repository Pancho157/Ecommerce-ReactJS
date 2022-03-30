import { useState } from "react";

// Styles
import "./styles/ItemCount.css";

// Este archivo muestra un contador con la cantidad que el usuario quiere agregar al carrito de un cierto elemento
// También renderiza el botón para llevar al artículo al carrito

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

  return (
    <>
      <div className={"count-container"}>
        <button onClick={onRemove} disabled={userinput <= 0 ? true : null}>
          -
        </button>
        <p>{userinput}</p>
        <button onClick={onAdd}>+</button>
      </div>

      <button className={"card-buy"}>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
