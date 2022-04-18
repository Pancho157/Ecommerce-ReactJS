// Este archivo tiene el fin de traer los elementos que se encuentran incluidos en el array destinado al carrito y brindar las funcionalidades para la renderización del archivo hijo

import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

// Styles
import "./inProgress.css";

// Icons
import { FaTrashAlt } from "react-icons/fa";

// Context
import { useContext } from "react";
function Cart() {
  const { cartProducts, deleteProductFromCart } = useContext(CartContext);
  return (
    <>
      {cartProducts.map((cartProduct) => {
        return (
          <Link
            to={`/${cartProduct.category}/${cartProduct.id}`}
            key={cartProduct.id}
          >
            <div className="dropdownItem-container">
              <img
                className="dropdownItem-img"
                src={cartProduct.imgUrl}
                alt={cartProduct.title}
              />
              <div className="dropdownItem-middleContainer">
                <b className="dropdownItem-title">{cartProduct.title}</b>
                <p className="dropdownItem-price">
                  Precio: {cartProduct.price}
                </p>
                <p className="dropdownItem-stock">Stock: {cartProduct.stock}</p>
                <p className="dropdownItem-quantity">
                  Cantidad: {cartProduct.quantity}
                </p>
              </div>

              <button
                className="dropdownItem-trashButton"
                onClick={(e) => deleteProductFromCart(e, cartProduct.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Cart;
