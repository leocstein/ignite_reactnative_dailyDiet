import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";

type Props = TouchableOpacityProps & {};

export function ButtonRegisterMeal({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <Text>Cadastrar refeição</Text>
    </Container>
  );
}
