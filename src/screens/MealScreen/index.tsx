import { HeaderWithBackIcon } from "@components/HeaderWithBackIcon";
import {
  Container,
  MealInformationContainer,
  Name,
  Description,
  DateAndHourTitle,
  DateAndHour,
  Button,
  ButtonEditIcon,
  ButtonRemoveIcon,
  ButtonText,
  StatusContainer,
  Status,
  StatusText,
  ButtonContainer,
} from "./styles";
import { useRoute } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

export function MealScreen() {
  const route = useRoute();
  const meal = route.params as MealStorageDTO;

  return (
    <Container>
      <HeaderWithBackIcon title="Refeição" isFit={meal.isFit} />
      <MealInformationContainer>
        <Name>{meal.name}</Name>
        <Description>{meal.description}</Description>
        <DateAndHourTitle>Data e hora</DateAndHourTitle>
        <DateAndHour>{`${meal.date} às ${meal.hour}`}</DateAndHour>

        <StatusContainer>
          <Status type={meal.isFit} />
          <StatusText>
            {meal.isFit === true ? "dentro da dieta" : "fora da dieta"}
          </StatusText>
        </StatusContainer>
      </MealInformationContainer>
      <ButtonContainer>
        <Button type="PRIMARY">
          <ButtonEditIcon />
          <ButtonText type="PRIMARY">Editar refeição</ButtonText>
        </Button>

        <Button type="SECONDARY">
          <ButtonRemoveIcon />
          <ButtonText type="SECONDARY">Excluir refeição</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
