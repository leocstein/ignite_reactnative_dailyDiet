import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Meals } from "@components/Meals";
import arrayMealsJson from "@storage/meals.json";
import { dateGetAll } from "@storage/date/dateGetAll";
import { MealGetByDate } from "@storage/meal/mealGetByDate";
import { MealGetAll } from "@storage/meal/mealGetAll";

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
    //dateGetAll();
    //MealGetByDate("04/12/2022");
    MealGetAll();
  }, [meals]);

  return (
    <Container>
      <Header />
      <PercentCard />
      <Meals data={meals} />
    </Container>
  );
}
