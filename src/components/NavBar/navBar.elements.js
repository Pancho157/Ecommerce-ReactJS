import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #49426c;
`;

export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

  &:first-of-type{
    background-color: #49426c;
    border: none;
    cursor: default;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  left: 15px;
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  color: #ebc08b;
`;

export const SearchBar = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  padding-left: 15px;
`;

export const SearchBarButton = styled.button`
  padding: 10px 20px;
  background-color: #ebc08b;
  border-radius: 50px;
  position: relative;
  left: -30px
`;

export const IconLogoMobile = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: #ebc08b;
    font-size: 2rem;
    padding-right: 1.2rem;
  }
`;
