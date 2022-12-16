import { Container, MiniCardTypeStyleProps, Number, Text } from "./styles";

type Props = {
  number: number;
  text: string;
  backgroundColor: MiniCardTypeStyleProps;
};

export function MiniCard({ number, text, backgroundColor }: Props) {
  return (
    <Container type={backgroundColor}>
      <Number>{number}</Number>
      <Text>{text}</Text>
    </Container>
  );
}
