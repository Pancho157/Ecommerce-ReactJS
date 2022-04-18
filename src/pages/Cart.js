// Este archivo tiene el fin de traer los elementos que se encuentran incluidos en el array destinado al carrito y brindar las funcionalidades para la renderización del archivo hijo

import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

// Styles
import "./styles/Cart.css";

// Icons
import { FaTrashAlt } from "react-icons/fa";

// Context
import { useContext } from "react";
function Cart() {
  const { cartProducts, deleteProductFromCart } = useContext(CartContext);
  return (
    <>
      <div className="cart-itemsContainer">
        <h2 className="cart-mainTitle">Carrito de Compras</h2>
        
        <p className="cart-emptyMessage">Actualmente el carrito se encuentra vacío!!</p>
        {cartProducts.map((cartProduct) => {
          return (
            <Link
              to={`/${cartProduct.category}/${cartProduct.id}`}
              key={cartProduct.id}
            >
              <div className="cart-container">
                <img
                  className="cart-img"
                  src={cartProduct.imgUrl}
                  alt={cartProduct.title}
                />
                <div className="cart-middleContainer">
                  <b className="cart-title">{cartProduct.title}</b>
                  <p className="cart-price">Precio: {cartProduct.price}</p>
                  <p className="cart-stock">Stock: {cartProduct.stock}</p>
                  <p className="cart-quantity">
                    Cantidad: {cartProduct.quantity}
                  </p>
                </div>

                <button
                  className="cart-trashButton"
                  onClick={(e) => deleteProductFromCart(e, cartProduct.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
