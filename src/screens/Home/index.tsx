import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Meals } from "@components/Meals";
import arrayMealsJson from "@storage/meals.json";
import { MealGetAll } from "@storage/meal/mealGetAll";
import { MealGetByDate } from "@storage/meal/mealGetByDate";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { dateGetAll } from "@storage/date/dateGetAll";

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
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  const data: MealProps[] = arrayMealsJson;

  async function LoadDates() {
    const allDates = await dateGetAll();

    setDates(allDates); //return allDates;
  }

  async function LoadMeals() {
    const allMeals = await MealGetAll();
    setMeals(allMeals);
  }

  useEffect(() => {
    LoadMeals();
    LoadDates();
  }, []);

  return (
    <Container>
      <Header />
      <PercentCard />
      <Meals data={data} />
    </Container>
  );
}
