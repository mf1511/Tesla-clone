import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import("./Header.css");

function Header() {
  return (
    <Container>
      <a href="">
        <img
          src="https://res.cloudinary.com/marin-dev/image/upload/v1643917939/logo_inzsgm.svg"
          alt=""
        />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">SHOP</a>
        <a href="#">Tesla Account</a>
        <MenuIcon />
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 80px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;

  img {
    height: 40px;
  }
  a {
    flex: 0.2;
  }
  @media (max-width: 768px) {
    dislay: flex;
    justify-content: space-between;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.6;
  p {
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 10px;
    font-size: 25px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 0.2;
  justify-content: flex-end;
  a {
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 25px;
  }
`;
