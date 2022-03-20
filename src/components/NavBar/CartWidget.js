import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css';

function CartWidget(props) {
  return (
    <>
      {/* Colocar acá los children del Navbar */}
      <NavItem icon={ <FaShoppingCart />} >
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </>
  );
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
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
        {/* Los items del submenu se colocan acá */}
        <DropdownItem rightIcon={">"}>Producto 1</DropdownItem>
        <DropdownItem rightIcon={">"}>Producto 2</DropdownItem>
        <DropdownItem rightIcon={">"}>Producto 3</DropdownItem>
      </div>
    </>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

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