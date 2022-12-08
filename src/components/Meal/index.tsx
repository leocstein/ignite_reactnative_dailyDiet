import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { TouchableOpacityProps } from "react-native";
import { Container, MealHour, MealText, Separator, Status } from "./styles";

type Props = TouchableOpacityProps & {
  meal: MealStorageDTO;
};

export function Meal({ meal, ...rest }: Props) {
  return (
    <Container {...rest}>
      <MealHour>{meal.hour}</MealHour>
      <Separator>|</Separator>
      <MealText>{meal.name}</MealText>
      <Status type={meal.isFit} />
    </Container>
  );
}
