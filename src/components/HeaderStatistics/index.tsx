import { Container, Icon, Number, Text, Button } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  percentage: number;
};

export function HeaderStatistics({ percentage }: Props) {
  const navigation = useNavigation();

  return (
    <Container percentage={percentage}>
      <Button onPress={() => navigation.navigate("home")}>
        <Icon />
      </Button>
      <Number>{`${percentage.toFixed(2)}%`}</Number>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}
