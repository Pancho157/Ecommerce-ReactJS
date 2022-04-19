// Este archivo tiene el fin de traer los elementos que se encuentran incluidos en el array destinado al carrito y brindar las funcionalidades para la renderización del archivo hijo

import { Link, useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

// Styles
import "./styles/Cart.css";

// Icons
import { FaTrashAlt } from "react-icons/fa";

// Context
import { useContext } from "react";
function Cart() {
  const { cartProducts, deleteProductFromCart, totalPrice } =
    useContext(CartContext);

  const navigate = useNavigate();

  const deleteProduct = (e, cartProduct) => {
    e.stopPropagation();
    deleteProductFromCart(cartProduct.id);
  };

  const changeToDetailPage = (category, id) => {
    navigate(`/${category}/${id}`);
  };

  return (
    <>
      <div className="cart-itemsContainer">
        <h2 className="cart-mainTitle">Carrito de Compras</h2>

        <p className="cart-emptyMessage">
          {" "}
          {cartProducts.lenght === 0
            ? "Actualmente el carrito se encuentra vacío!"
            : "Los productos que solicitó se encuentran debajo"}{" "}
        </p>
        {cartProducts.map((cartProduct) => {
          return (
            <article
              onClick={() => {
                changeToDetailPage(cartProduct.category, cartProduct.id);
              }}
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
                  onClick={(e) => deleteProduct(e, cartProduct)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </article>
          );
        })}

        <div className="cart-totalContainer">
          <h3 className="cart-total">
            <b>Total:</b> $ {totalPrice}
          </h3>
          <button className="cart-buyButton">Comprar</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
