import { Container, Icon, Number, Text, Button } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function HeaderStatistics() {
  const navigation = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigation.navigate("home")}>
        <Icon />
      </Button>
      <Number>90,86%</Number>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}
