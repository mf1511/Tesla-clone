import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../../features/carSlice/carSlice";
import { useSelector } from "react-redux";
import("./Header.css");

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="">
        <img
          src="https://res.cloudinary.com/marin-dev/image/upload/v1643917939/logo_inzsgm.svg"
          alt=""
        />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href={`#${car}`}>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">SHOP</a>
        <a href="#">Tesla Account</a>
        <MenuIcon
          onClick={(e) => {
            setBurgerStatus(true);
          }}
        />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose
            onClick={(e) => {
              setBurgerStatus(false);
            }}
          />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a key={index} href={`#${car}`}>
                {car}
              </a>
            </li>
          ))}
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-in</a>
        </li>
        <li>
          <a href="">Cybertruck</a>
        </li>
        <li>
          <a href="">Roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 80px;
  position: fixed;
  display: flex;
  justify-content: space-between !important;
  width: 100%;
  padding: 20px;
  z-index: 1;
  img {
    height: 40px;
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
  a {
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-size: 25px;
  }
  @media (max-width: 1040px) {
    display: none;
    font-size: 15px;
  }
`;

const RightMenu = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 25px;
    @media (max-width: 1040px) {
      font-size: 20px;
    }
    @media (max-width: 470px) {
      display: none;
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 500;
      font-size: 20px;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
