import { Container, Button, ButtonText, Title, Icon } from "./styles";

export function Meals() {
  return (
    <Container>
      <Title>Refeições</Title>
      <Button>
        <Icon />
        <ButtonText>Nova Refeição</ButtonText>
      </Button>
    </Container>
  );
}
