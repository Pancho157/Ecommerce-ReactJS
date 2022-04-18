import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Iconos
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

// Styles
import "./styles/CartWidget.css";

// Context
import CartContext from "../../context/CartContext";

function CartWidget(props) {
  return (
    <>
      {/* la línea de debajo es la que renderiza el carrito en el NavBar */}
      <NavItem icon={<FaShoppingCart />}>
        {/* El triangle y el DropdownMenu son lo que se renderiza una vez presionado el carrito */}
        <div className="triangle"></div>
        <DropdownMenu></DropdownMenu>
        {/* Los items que se renderizan dentro del DropdownMenu se ubican en la función DropdownItem que se encuentra dentro de la función DropdownMenu */}
      </NavItem>
    </>
  );
}

function DropdownMenu() {
  const { cartProducts, deleteProductFromCart } = useContext(CartContext);
  function DropdownItem(props) {
    return (
      // Estructura de los elementos que se encuentran dentro del DropdownMenu
      <Link to={`/${props.category}/${props.id}`} key={props.id}>
        <div className="dropdownItem-container">
          <img
            className="dropdownItem-img"
            src={props.imgUrl}
            alt={props.title}
          />
          <div className="dropdownItem-middleContainer">
            <b className="dropdownItem-title">{props.title}</b>
            <p className="dropdownItem-price">Precio: {props.price}</p>
            <p className="dropdownItem-stock">Stock: {props.stock}</p>
            <p className="dropdownItem-quantity">Cantidad: {props.quantity}</p>
          </div>

          <button
            className="dropdownItem-trashButton"
            onClick={(e) => deleteProductFromCart(e, props.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </Link>
    );
  }

  return (
    <>
      <div className="dropdown">
        {/* Los elementos de debajo son los que se meustran dentro del DropdownMenu que se despliega cuando se presiona el carrito */}
        <h2>Carrito de compras</h2>
        <div className="line"></div>

        {cartProducts.map((cartProduct) => {
          return (
            <DropdownItem
              imgUrl={cartProduct.imgUrl}
              title={cartProduct.title}
              price={cartProduct.price}
              stock={cartProduct.stock}
              quantity={cartProduct.quantity}
              category={cartProduct.category}
              id={cartProduct.id}
            ></DropdownItem>
          );
        })}

        <div className="line"></div>
        <Link className="toCartButton" to={`/carrito`}>Ir al carrito</Link>
      </div>
    </>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  // Es la función que permite agregar al carrito dentro del NavBar y agrega la funcionalidad para abrir/cerrar el DropdownMenu
  return (
    <>
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>

        {open && props.children}
      </li>
    </>
  );
}

export default CartWidget;
