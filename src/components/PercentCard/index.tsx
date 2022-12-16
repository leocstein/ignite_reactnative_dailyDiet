import { Container, Icon, Number, Text } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

type Props = {
  percentage: number;
  meals: MealStorageDTO[];
};

export function PercentCard({ percentage, meals }: Props) {
  const navigation = useNavigation();

  return (
    <Container
      percentage={percentage}
      onPress={() => navigation.navigate("statistics", { percentage, meals })}
    >
      <Icon />
      <Number>{`${percentage.toFixed(2)}%`}</Number>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}
