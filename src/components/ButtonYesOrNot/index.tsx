import { TouchableOpacityProps } from "react-native";
import { Container, Status, Text } from "./styles";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = TouchableOpacityProps & {
  title: string;
  type: ButtonTypeStyleProps;
  isPressed?: boolean;
};

export function ButtonYesOrNot({
  title,
  type,
  isPressed,

  ...rest
}: Props) {
  return (
    <Container type={type} isPressed={isPressed} {...rest}>
      <Status type={type} />
      <Text>{title}</Text>
    </Container>
  );
}
