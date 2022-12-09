import React from "react";
import { Header, Body, Container, Title, Farm } from "components";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="h-screen flex flex-col">
        <Header />
        <Body>
          <Title title="농장 관리" onClick={() => router.push("farm_add")} />
          <Farm />
        </Body>
      </div>
    </Container>
  );
};

export default Home;
