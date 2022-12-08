import { Container, Button, TextButton } from "./styles";

import { Feedback } from "@components/Feedback";
import { useNavigation } from "@react-navigation/native";
import { Home } from "@screens/Home";

export function NewMealFeedback() {
  const navigation = useNavigation();

  return (
    <Container>
      <Feedback />

      <Button
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        <TextButton>Ir para a página inicial</TextButton>
      </Button>
    </Container>
  );
}
