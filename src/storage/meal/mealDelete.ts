import { MEALS_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorageDTO } from "./MealStorageDTO";
import { MealGetByDate } from "./mealGetByDate";
import { DateRemove } from "@storage/date/dateRemove";

async function checkDateHasMoreMeals(date: string) {
  const meals = await MealGetByDate(date);
  console.log("checkDateHasMoreMeals::MEALS::", meals);
  if (meals.length === 0) {
    await DateRemove(date);
  }
}

export async function MealDelete(item: MealStorageDTO) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const mealsFiltered = meals.filter((meal) => meal.id !== item.id);

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(mealsFiltered));

    await checkDateHasMoreMeals(item.date);
  } catch (error) {
    throw error;
  }
}
