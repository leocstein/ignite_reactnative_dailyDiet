import { MEALS_COLLECTION, DATE_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function MealDeleteAll() {
  try {
    await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify([]));
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify([]));
  } catch (error) {
    throw error;
  }
}
