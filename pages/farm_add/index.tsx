import React from "react";
import { Header, Body, Container, Title, FarmAddForm } from "components";

const FarmAdd = () => {
  return (
    <Container>
      <div className="h-screen flex flex-col">
        <Header />
        <Body>
          <Title title="농장 추가" />
          <FarmAddForm />
        </Body>
      </div>
    </Container>
  );
};

export default FarmAdd;
