import { Container, Icon, Number, Text } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function PercentCard() {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("statistics")}>
      <Icon />
      <Number>90,86%</Number>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}
