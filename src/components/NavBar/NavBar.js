import React, { useState } from "react";

// Components
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

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
              <MenuItemLink>
                <MdOutlineLocalOffer />
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>
                <FaRegUserCircle />
              </MenuItemLink>
            </MenuItem>

            {/* Es el mismo submenú que se encuentra debajo, pero este se renderiza solamente cuando la resolución sea menor a 960px, ya que se encuentra junto al menú principal */}

            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <Link to={`/`}>
                <SubMenuItemLink>Nuestros productos</SubMenuItemLink>
              </Link>
            </SubMenuItemToMenuItem>

            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <Link to={`/categories`}>
                <SubMenuItemLink>Categorías</SubMenuItemLink>
              </Link>
            </SubMenuItemToMenuItem>

            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <SubMenuItemLink>Favoritos</SubMenuItemLink>
            </SubMenuItemToMenuItem>
            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <SubMenuItemLink>Historial</SubMenuItemLink>
            </SubMenuItemToMenuItem>
            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <SubMenuItemLink>Vende tus productos</SubMenuItemLink>
            </SubMenuItemToMenuItem>
            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <SubMenuItemLink>Ayuda</SubMenuItemLink>
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
              <SubMenuItemLink>Nuestros productos</SubMenuItemLink>
            </Link>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuItemLink>Categorías</SubMenuItemLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuItemLink>Favoritos</SubMenuItemLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuItemLink>Historial</SubMenuItemLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuItemLink>Vende tus productos</SubMenuItemLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuItemLink>Ayuda</SubMenuItemLink>
          </SubMenuItem>
        </SubMenu>
      </NavbarContainer>
    </>
  );
};

export default NavBar;
