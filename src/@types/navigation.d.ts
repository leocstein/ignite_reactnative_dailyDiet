import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        percentage: number;
        meals: MealStorageDTO[];
      };
      mealForm: undefined;
      newMealFeedback: {
        isFit?: boolean;
      };
      mealScreen: undefined;
    }
  }
}
