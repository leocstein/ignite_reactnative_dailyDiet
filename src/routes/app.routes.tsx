import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { MealForm } from "@screens/MealForm";
import { NewMealFeedback } from "@screens/NewMealFeedback";
import { MealScreen } from "@screens/MealScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="mealForm" component={MealForm} />
      <Screen name="newMealFeedback" component={NewMealFeedback} />
      <Screen name="mealScreen" component={MealScreen} />
    </Navigator>
  );
}
