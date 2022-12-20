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
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { MealDelete } from "@storage/meal/mealDelete";
import { Alert } from "react-native";

export function MealScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const meal = route.params as MealStorageDTO;

  async function handleDeleteMeal(meal: MealStorageDTO) {
    Alert.alert("Remover", "Deseja remover a refeição?", [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        onPress: () => {
          MealDelete(meal);
          navigation.navigate("home");
        },
      },
    ]);
  }

  function handleEditMeal() {
    navigation.navigate("mealForm", meal);
  }

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
        <Button type="PRIMARY" onPress={() => handleEditMeal()}>
          <ButtonEditIcon />
          <ButtonText type="PRIMARY">Editar refeição</ButtonText>
        </Button>

        <Button type="SECONDARY" onPress={() => handleDeleteMeal(meal)}>
          <ButtonRemoveIcon />
          <ButtonText type="SECONDARY">Excluir refeição</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
