import React from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Meals } from "@components/Meals";

export function Home() {
  return (
    <Container>
      <Header />
      <PercentCard />
      <Meals />
    </Container>
  );
}
