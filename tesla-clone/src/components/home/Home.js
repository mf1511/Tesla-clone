import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import Section from "../section/Section";
import("./Home.css");

function Home() {
  return (
    <Container>
      <Header />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        photoUrl="https://res.cloudinary.com/marin-dev/image/upload/v1643917940/model-s_ewftln.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        photoUrl="https://res.cloudinary.com/marin-dev/image/upload/v1643917945/model-y_l9k7yn.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        photoUrl="https://res.cloudinary.com/marin-dev/image/upload/v1643917947/model-3_hnetyn.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        photoUrl="https://res.cloudinary.com/marin-dev/image/upload/v1643917939/model-x_gewqok.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lower Cost Solar Panels in America"
        description="Money-back guarantee"
        photoUrl="https://res.cloudinary.com/marin-dev/image/upload/v1643917946/solar-panel_gv8izz.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        photoUrl="https://res.cloudinary.com/marin-dev/image/upload/v1643917939/accessories_ekbsnm.jpg"
        leftBtnText="Shop now"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        photoUrl="https://res.cloudinary.com/marin-dev/image/upload/v1643917945/solar-roof_ujmyah.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
