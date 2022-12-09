import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { NewMeal } from "@screens/NewMeal";
import { NewMealFeedback } from "@screens/NewMealFeedback";
import { MealScreen } from "@screens/MealScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="newMealFeedback" component={NewMealFeedback} />
      <Screen name="mealScreen" component={MealScreen} />
    </Navigator>
  );
}
