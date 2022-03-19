import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #49426c;
`;

export const NavbarWrapper = styled.div`
  margin: auto;
  width: calc(100% - 150px);
  max-width: 1650px;
  margin-left: 60px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-family: "Fira Code";
  font-size: 1.2rem;
  color: #ebc08b;
  padding-left: 1.2rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #49426c;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Fira Code";
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #343257;
    border-bottom: 0.3rem solid #ebc08b;
    transition: 0.4s ease-in;
  }

  &:first-of-type {
    background-color: #49426c;
    border: none;
    cursor: default;
    float: left;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;

    &:nth-child(4) {
      display: initial;
      background-color: #49426c;
      border-bottom: none;
      transition: none;
    }
  }
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  color: #ebc08b;
  padding-top: 10px;

  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  left: 15px;
  top: -4px;
`;

export const SearchBar = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 20px;
  padding-left: 15px;
`;

export const SearchBarButton = styled.button`
  padding: 5px 20px;
  background-color: #ebc08b;
  border-radius: 50px;
  position: relative;
  left: -30px;
`;

export const IconLogoMobile = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: #ebc08b;
    font-size: 2rem;
    padding-right: 1.2rem;
    cursor: pointer;
  }
`;

// Mientras que la resolución sea mayor a 960px el submenú se mostrará a la izquierda, y cuando sea menor a 960px se mostrará dentro del menú principal
export const SubMenu = styled.ul`
  width: 917px;
  max-width: 100%;
  height: 30px;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #878484;
  border: 1px solid #707070;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
// Ver por que no funciona la siguiente línea display: ${({ show }) => (show ? "flex" : "none")};
export const SubMenuItem = styled.li`
  height: 100%;
  padding: 0 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-family: "Fira Code";
  font-weight: 400;
  cursor: pointer;
  background-color: #878484;
  border: 1px solid #707070;

  &:hover {
    background-color: #626262;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 960px) {   
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: "Fira Code";
    font-weight: 400;
    cursor: pointer;
  }
}
`;

export const SubMenuItemLink = styled.a`
  text-decoration: none;
  color: #fff;

  @media screen and (max-width: 960px) {
    text-decoration: none;
    color: #ebc08b;
  }
`;

export const SubMenuItemToMenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Fira Code";
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #343257;
    border-bottom: 0.3rem solid #ebc08b;
    transition: 0.4s ease-in;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    width: 100%;
    height: 70px;
  }
`;

export const SubMenuIcon = styled.button`
position: absolute;
display: initial;
height: 60px;
width: 60px;
top: 0;
left: 0;
padding-top: 10px;
font-size: 1.5rem;
font-family: "Fira Code";
font-weight: 400;
cursor: pointer;
background-color: #878484;
border: 1px solid #707070;

  &:hover {
    background-color: #626262;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 960px) {   
    display: none;wwwwwwwwwww
  }
}
  `;
