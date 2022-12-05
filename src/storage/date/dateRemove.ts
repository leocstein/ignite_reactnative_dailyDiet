import { DATE_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dateGetAll } from "@storage/date/dateGetAll";

export async function dateRemove(date: string) {
  try {
    const storage = await dateGetAll();

    const filtered = storage.filter((dates) => dates !== date);
    const dates = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${DATE_COLLECTION}`, dates);
  } catch (error) {
    throw error;
  }
}
