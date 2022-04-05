// Observación: Hay styled elements que poseen en su nombre la palabra link, esto se debe a que funcionaban como elementos <a></a> antes de que apareciera el <Link></Link> de React Router
// Cambié todos los <a></a> viejos por <div></div>, ya que estos agregan estilos al programa

import React, { useState } from "react";

// Components
import CartWidget from "./CartWidget";
import { Link, useParams } from "react-router-dom";

// Styled Components
import {
  IconLogo,
  IconLogoMobile,
  Menu,
  MenuItem,
  MenuItemLink,
  NavbarContainer,
  NavbarWrapper,
  SearchBar,
  SearchBarButton,
  SearchBarContainer,
  SubMenu,
  SubMenuIcon,
  SubMenuItem,
  SubMenuItemLink,
  SubMenuItemToMenuItem,
} from "./styles/navBar.elements";

// Icons
import { AiTwotoneSliders } from "react-icons/ai";
import { FaBars, FaTimes, FaSearch, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";

const NavBar = () => {
  const {category} = useParams();
  const [click, setClick] = useState(false);
  const [show, showHide] = useState(true);

  // Muestra/oculta el submenú (resolución mayor a 960px)
  // Una vez que se llega a una resolución menor a 960px el submenú forma parte del menu y se inutiliza la función
  const setShow = () => {
    showHide(!show);
  };

  // Hace que el menú se muestre/oculte cuando se hace click (en resoluciones menores a 960px)
  const changeClick = () => {
    setClick(!click);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <Link to={`/`}>
            <IconLogo>
              <AiTwotoneSliders size={"2em"} />
              Dígito Electrónico
            </IconLogo>
          </Link>

          {/* Carrito, junto a su funcionalidad de DropdownMenu */}
          <CartWidget />

          {/* Renderiza el menú de hamburguesa o una cruz dependiendo de si el menú se encuentra abierto o cerrado (se renderiza solo para movile) */}
          <IconLogoMobile onClick={() => changeClick()}>
            {click ? <FaTimes /> : <FaBars />}
          </IconLogoMobile>

          {/* Menú principal, cambia la manera en la que se renderiza cuando la resolución es menor a 960px */}
          <Menu click={click}>
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>
                <SearchBarContainer>
                  <SearchBar placeholder="Buscar"></SearchBar>
                  <SearchBarButton>
                    <FaSearch />
                  </SearchBarButton>
                </SearchBarContainer>
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => changeClick()}>
              <Link to={`/Offers`}> 
              {/* // TODO: hacer que los productos tengan una categoría llamada Offers y hacer que se renderice en las cards */}
                <MenuItemLink>
                  <MdOutlineLocalOffer />
                </MenuItemLink>
              </Link>
            </MenuItem>
            <MenuItem onClick={() => changeClick()}>
              <Link to={`/iniciarSesion`}>
                <MenuItemLink>
                  <FaRegUserCircle />
                </MenuItemLink>
              </Link>
            </MenuItem>

            {/* Es el mismo submenú que se encuentra debajo, pero este se renderiza solamente cuando la resolución sea menor a 960px, ya que se encuentra junto al menú principal */}

            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <Link to={`/`}>
                <SubMenuItemLink>Todos los productos</SubMenuItemLink>
              </Link>
            </SubMenuItemToMenuItem>

            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <Link category={"herramientas"} to={`/${category}`}>
                <SubMenuItemLink>Herramientas</SubMenuItemLink>
              </Link>
            </SubMenuItemToMenuItem>

            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <Link category={"consumibles"} to={`/${category}`}>
                <SubMenuItemLink>Consumibles</SubMenuItemLink>
              </Link>
            </SubMenuItemToMenuItem>

            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <Link to={`/ventas/allItems`}>
                <SubMenuItemLink>Vende tus productos</SubMenuItemLink>
              </Link>
            </SubMenuItemToMenuItem>

            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <Link to={`/contacto`}>
                <SubMenuItemLink>Contáctanos</SubMenuItemLink>
              </Link>
            </SubMenuItemToMenuItem>
          </Menu>
        </NavbarWrapper>

        {/* Muestra el ícono de menú hamburguesa y tiene la función de mostrar/ocultar el submenu */}
        {/* Este ícono solo se renderiza mientras la resolución sea mayor a 960px */}
        <SubMenuIcon onClick={() => setShow()}>
          <FaBars />
        </SubMenuIcon>

        {/* Sub menú, este se muestra siempre que la resolución sea mayor a 960px */}
        <SubMenu show={show}>
          <SubMenuItem>
            <Link to={`/`}>
              <SubMenuItemLink>Todos los productos</SubMenuItemLink>
            </Link>
          </SubMenuItem>
          <SubMenuItem>
            <Link category={"herramientas"} to={`/${category}`}>
              <SubMenuItemLink>Herramientas</SubMenuItemLink>
            </Link>
          </SubMenuItem>
          <SubMenuItem>
            <Link category={"consumibles"} to={`/${category}`}>
              <SubMenuItemLink>Consumibles</SubMenuItemLink>
            </Link>
          </SubMenuItem>
          <SubMenuItem>
            <Link to={`/ventas/allItems`}>
              <SubMenuItemLink>Vende tus productos</SubMenuItemLink>
            </Link>
          </SubMenuItem>
          <SubMenuItem>
            <Link to={`/contacto`}>
              <SubMenuItemLink>Contáctanos</SubMenuItemLink>
            </Link>
          </SubMenuItem>
        </SubMenu>
      </NavbarContainer>
    </>
  );
};

export default NavBar;
