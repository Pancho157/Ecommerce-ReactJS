import React, { useState } from "react";
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
  SubMenuItem,
  SubMenuItemLink,
  SubMenuItemToMenuItem,
} from "./navBar.elements";
import { AiTwotoneSliders } from "react-icons/ai";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingCart,
  FaRegUserCircle,
} from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [show, showHide] = useState(true);

  // TODO: Ver por qué no funciona la función para mostrar el menu
  const setShow = () => {
    showHide(!show);
  };
  const changeClick = () => {
    setClick(!click);
  };
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            <AiTwotoneSliders size={"2em"} />
            Dígito Electrónico
          </IconLogo>

          <IconLogoMobile onClick={() => changeClick()}>
            {click ? <FaTimes /> : <FaBars />}
          </IconLogoMobile>

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
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>
                <FaShoppingCart />
              </MenuItemLink>
            </MenuItem>

            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <SubMenuItemLink>Nuestros productos</SubMenuItemLink>
            </SubMenuItemToMenuItem>
            <SubMenuItemToMenuItem onClick={() => changeClick()}>
              <SubMenuItemLink>Categorías</SubMenuItemLink>
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

        <SubMenu show={show}>
          <SubMenuItem onClick={() => setShow()}>
            <SubMenuItemLink>
              <FaBars />
            </SubMenuItemLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuItemLink>Nuestros productos</SubMenuItemLink>
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
