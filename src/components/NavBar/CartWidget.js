import React, { useState, useContext } from "react";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/CartWidget.css";
// import CartContext from '../../context/CartContext';

function CartWidget(props) {
  // const { cartProducts } = useContext(CartContext)
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
  function DropdownItem(props) {
    return (
      // Estructura de los elementos que se encuentran dentro del DropdownMenu
      <Link to={`/${props.category}/${props.id}`}>
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

          <button className="dropdownItem-trashButton">
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
        <DropdownItem
          imgUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbOPHsYWMRCw-3V39pzDAeLMxPkC-zaLWLQ&usqp=CAU"
          }
          title={"Multímetro Digital"}
          price={1800}
          stock={"20"}
          quantity={3}
          category={"herramientas"}
          id={1}
        ></DropdownItem>

        <div className="line"></div>
        <button className="toCartButton">Ir al carrito</button>
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
