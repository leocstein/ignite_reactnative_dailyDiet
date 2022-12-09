import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { TouchableOpacityProps } from "react-native";
import { Container, MealHour, MealText, Separator, Status } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
  meal: MealStorageDTO;
};

export function Meal({ meal, ...rest }: Props) {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => navigation.navigate("mealScreen", meal)}
      {...rest}
    >
      <MealHour>{meal.hour}</MealHour>
      <Separator>|</Separator>
      <MealText>{meal.name}</MealText>
      <Status type={meal.isFit} />
    </Container>
  );
}
