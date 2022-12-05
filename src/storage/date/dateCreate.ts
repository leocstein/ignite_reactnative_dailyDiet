import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATE_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { dateGetAll } from "./dateGetAll";

export async function dateCreate(newDate: string) {
  try {
    const storagedDates = await dateGetAll();

    const dateAlreadyExists = storagedDates.includes(newDate);

    if (dateAlreadyExists) {
      return;
      //throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storagedDates, newDate]);

    await AsyncStorage.setItem(DATE_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
