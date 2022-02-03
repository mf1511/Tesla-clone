import React from "react";
import styled from "styled-components";
import("./Section.css");

function Section({ title, photoUrl, description, leftBtnText, rightBtnText }) {
  return (
    <>
      <Wrap style={{ backgroundImage: `url(${photoUrl})` }}>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <ButtonsGroup>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="https://res.cloudinary.com/marin-dev/image/upload/v1643917938/down-arrow_fndgln.svg" />
        </ButtonsGroup>
      </Wrap>
    </>
  );
}
import("./Section.css");

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LeftButton = styled.div`
  background-color: rgba(26, 26, 32, 0.8);
  height: 50px;
  width: 300px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 60px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
