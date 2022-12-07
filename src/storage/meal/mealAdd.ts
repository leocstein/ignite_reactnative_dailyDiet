import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { MealGetAll } from "@storage/meal/mealGetAll";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";

export async function MealAdd(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await MealGetAll();

    const mealAlreadyExists = storedMeals.filter(
      (meal) =>
        meal.name.trim() === newMeal.name.trim() &&
        meal.date.trim() === newMeal.date.trim() &&
        meal.hour.trim() === newMeal.hour.trim()
    );

    if (mealAlreadyExists.length > 0) {
      throw new AppError("Essa refeição já foi adicionada.");
    }

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
