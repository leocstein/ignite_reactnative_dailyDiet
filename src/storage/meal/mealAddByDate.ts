import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { MEALS_COLLECTION } from "@storage/storageConfig";

import { MealStorageDTO } from "./MealStorageDTO";
import { MealGetByDate } from "./mealGetByDate";

export async function MealAddByDate(newMeal: MealStorageDTO, date: string) {
  try {
    const storedMeals = await MealGetByDate(date);

    const mealAlreadyExists = storedMeals.filter(
      (meals) => meals.name === newMeal.name && meals.hour === newMeal.hour
    );

    if (mealAlreadyExists.length > 0) {
      throw new AppError("Essa refeição já foi adicionada.");
    }

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(`${MEALS_COLLECTION}-${date}`, storage);
  } catch (error) {
    throw error;
  }
}
