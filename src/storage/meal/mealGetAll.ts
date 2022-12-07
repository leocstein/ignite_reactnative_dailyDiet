import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function MealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    console.log("MealGetAll::", meals);
    return meals;
  } catch (error) {
    throw error;
  }
}
