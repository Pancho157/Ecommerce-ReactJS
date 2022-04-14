// Este archivo muestra un contador con la cantidad que el usuario quiere agregar al carrito de un cierto elemento
// También renderiza y da la función al botón para llevar al artículo al carrito

import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Styles
import "./styles/ItemCount.css";

// Context
import CartContext from "../../context/CartContext";

const ItemCount = ({ stock }) => {
  const { cartProducts, addProductToCart } = useContext(CartContext);
  const [userinput, setUserInput] = useState(1);

  const [buttonText, setButtonText] = useState("Agregar al carrito");
  const [contador, setContador] = useState(1);

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

  const addToCart = (e, usedOnce) => {
    e.stopPropagation();
    setButtonText("Visitar carrito");
    setContador(contador + 1);
    addProductToCart();
    // Utilicé un contador debido a que no logré hacerlo con una variable booleana (no me la tomaba cuando la quería cambiar dentro de la función)
  };

  return (
    <>
      {contador === 1 ? (
        <>
          <div className={"count-container"}>
            <button onClick={onRemove} disabled={userinput <= 0 ? true : null}>
              -
            </button>
            <p>{userinput}</p>
            <button onClick={onAdd}>+</button>
          </div>

          <button className={"card-buy"} onClick={addToCart}>
            {buttonText}
          </button>
        </>
      ) : (
        <Link className="visitarCarrito" to={`/carrito`} onClick={(e) => e.stopPropagation()}>
          Visitar Carrito
        </Link>
      )}
    </>
  );
};

export default ItemCount;
