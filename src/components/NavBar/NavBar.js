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
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export default NavBar;
