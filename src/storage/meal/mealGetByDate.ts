import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function MealGetByDate(date: string) {
  try {
    const storage = await AsyncStorage.getItem(`${MEALS_COLLECTION}-${date}`);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    console.log("MealGetByDate::", meals);
    return meals;
  } catch (error) {
    throw error;
  }
}
