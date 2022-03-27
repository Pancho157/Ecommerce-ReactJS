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
  SubMenuIcon,
  SubMenuItem,
  SubMenuItemLink,
  SubMenuItemToMenuItem,
} from "./styles/navBar.elements";
import { AiTwotoneSliders } from "react-icons/ai";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaRegUserCircle,
} from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [show, showHide] = useState(true);

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

          <CartWidget />
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

        <SubMenuIcon onClick={() => setShow()}>
          <FaBars />
        </SubMenuIcon>

        <SubMenu show={show}>
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
