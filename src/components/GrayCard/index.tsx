import { Container, Number, Text } from "./styles";

type Props = {
  number: string;
  text: string;
};

export function GrayCard({ number, text }: Props) {
  return (
    <Container>
      <Number>{number}</Number>
      <Text>{text}</Text>
    </Container>
  );
}
