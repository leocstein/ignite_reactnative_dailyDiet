import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Meals } from "@components/Meals";
import arrayMealsJson from "@storage/meals.json";

export type MealProps = {
  date: string;
  meals: [
    {
      name: string;
      description: string;
      hour: string;
      insideTheDiet: boolean;
    }
  ];
};

export function Home() {
  const [meals, setMeals] = useState<MealProps[]>([]);

  useEffect(() => {
    setMeals(arrayMealsJson);
  }, [meals]);

  return (
    <Container>
      <Header />
      <PercentCard />
      <Meals data={meals} />
    </Container>
  );
}
