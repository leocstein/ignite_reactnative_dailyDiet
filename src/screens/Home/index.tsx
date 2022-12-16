import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Meals } from "@components/Meals";
import { MealGetAll } from "@storage/meal/mealGetAll";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { dateGetAll } from "@storage/date/dateGetAll";
import { MealDeleteAll } from "@storage/meal/mealDeleteAll";
import { useIsFocused } from "@react-navigation/native";

export function Home() {
  const isFocused = useIsFocused();
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const [percentageWithinTheDiet, setPercentageWithinTheDiet] =
    useState<number>(0);

  async function LoadDates() {
    const allDates = await dateGetAll();

    setDates(allDates);
  }

  async function LoadMeals() {
    const allMeals = await MealGetAll();
    setMeals(allMeals);

    const insideTheDiet: MealStorageDTO[] = [];
    allMeals.map((meal) => (meal.isFit ? insideTheDiet.push(meal) : <></>));
    const percentageX = (insideTheDiet.length * 100) / allMeals.length;
    setPercentageWithinTheDiet(percentageX);
    console.log("percentageWithinTheDiet::", percentageWithinTheDiet);
  }

  useEffect(() => {
    LoadMeals();
    LoadDates();
  }, [isFocused]);

  return (
    <Container>
      <Header />
      <PercentCard percentage={percentageWithinTheDiet} meals={meals} />
      <Meals meals={meals} dates={dates} />
    </Container>
  );
}
