import {
  Container,
  Button,
  ButtonText,
  Title,
  Icon,
  Date,
  Meal,
  MealText,
  MealHour,
  Separator,
  Status,
} from "./styles";

export function Meals() {
  return (
    <Container>
      <Title>Refeições</Title>
      <Button>
        <Icon />
        <ButtonText>Nova Refeição</ButtonText>
      </Button>

      <Date>12.08.22</Date>
      <Meal>
        <MealHour>20:00</MealHour>
        <Separator>|</Separator>
        <MealText>X-tudo</MealText>
        <Status />
      </Meal>

      <Meal>
        <MealHour>16:00</MealHour>
        <Separator>|</Separator>
        <MealText>Whey protein com leite</MealText>
        <Status />
      </Meal>

      <Meal>
        <MealHour>13:30</MealHour>
        <Separator>|</Separator>
        <MealText>Salada cesar com frango</MealText>
        <Status />
      </Meal>

      <Meal>
        <MealHour>09:30</MealHour>
        <Separator>|</Separator>
        <MealText>Vitamina de banana</MealText>
        <Status />
      </Meal>
    </Container>
  );
}
