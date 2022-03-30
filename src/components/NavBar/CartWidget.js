import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import './styles/CartWidget.css';

function CartWidget(props) {
  return (
    <>
    {/* la línea de debajo es la que renderiza el carrito en el NavBar */}
      <NavItem icon={ <FaShoppingCart />} >

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
      <a href="#" className="menu-item">
        <span className="icon-button"> {props.leftIcon} </span>
        {props.children}
        <span className="icon-right"> {props.rightIcon} </span>
      </a>
    );
  }

  return (
    <>
      <div className="dropdown">
        {/* Los elementos de debajo son los que se meustran dentro del DropdownMenu que se despliega cuando se presiona el carrito */}
        <DropdownItem rightIcon={">"}>Producto 1</DropdownItem>
        <DropdownItem rightIcon={">"}>Producto 2</DropdownItem>
        <DropdownItem rightIcon={">"}>Producto 3</DropdownItem>
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
