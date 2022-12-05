import { useState } from "react";
import { MealGetByDate } from "@storage/meal/mealGetByDate";
import { dateGetAll } from "@storage/date/dateGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function MealGetAll() {
  const allMeals: string[] = [];

  async function LoadMealsByDate(date: string) {
    const storage = await AsyncStorage.getItem(`${MEALS_COLLECTION}-${date}`);
    const meals: string[] = storage ? JSON.parse(storage) : [];
    //console.log("LoadMealsByDate::", meals);
    allMeals.push(meals);
    //console.log("MealGetAll::ALLMEALS:", allMeals);
    return meals;
  }

  try {
    const dates = await dateGetAll();

    dates.map((date) => {
      LoadMealsByDate(date);

      //console.log("MealGetAll::Entrou no map");
      //console.log("MAP::DATE::", date);
    });

    //console.log("MealGetAll::ALLMEALS:", allMeals);
    return allMeals;
  } catch (error) {
    throw error;
  }
}
