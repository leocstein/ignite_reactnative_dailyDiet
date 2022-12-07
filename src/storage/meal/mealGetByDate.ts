import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealGetAll } from "./mealGetAll";
import { MealStorageDTO } from "./MealStorageDTO";

export async function MealGetByDate(date: string) {
  try {
    const storage: MealStorageDTO[] = await MealGetAll();

    const meals = storage.filter((meal) => meal.date === date);

    console.log("MealGetByDate::", meals);
    return meals;
  } catch (error) {
    throw error;
  }
}
