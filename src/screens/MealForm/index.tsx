import { useEffect, useRef, useState } from "react";
import { Alert, TextInput } from "react-native";
import {
  Container,
  InputContainer,
  MiniInput,
  InputDateAndHourContainer,
  InputDateContainer,
  InputHourContainer,
  InputName,
  InputDescription,
  ButtonContainer,
} from "./styles";

import theme from "@theme/index";

import { ButtonRegisterMeal } from "@components/ButtonRegisterMeal";
import { ButtonYesOrNot } from "@components/ButtonYesOrNot";
import { HeaderWithBackIcon } from "@components/HeaderWithBackIcon";
import { TitleInputNewMeal } from "@components/TitleInputNewMeal";

import { DateCreate } from "@storage/date/dateCreate";
import { MealAdd } from "@storage/meal/mealAdd";
import { MealDelete } from "@storage/meal/mealDelete";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AppError } from "@utils/AppError";

import uuid from "react-native-uuid";

export function MealForm() {
  const route = useRoute();
  const meal = route.params as MealStorageDTO;

  const [id, setId] = useState(uuid.v1().toString());
  const [name, setName] = useState(meal?.name);
  const [description, setDescription] = useState(meal?.description);
  const [date, setDate] = useState(meal?.date);
  const [hour, setHour] = useState(meal?.hour);
  const [isFit, setIsFit] = useState(meal?.isFit);

  const [yesPressed, setYesPressed] = useState<boolean>(false);
  const [noPressed, setNoPressed] = useState<boolean>(false);

  const navigation = useNavigation();

  const newMealInputRef = useRef<TextInput>(null);

  function handleYesButton() {
    setYesPressed(true);
    setNoPressed(false);
    setIsFit(true);
  }

  function handleNoButton() {
    setNoPressed(true);
    setYesPressed(false);
    setIsFit(false);
  }

  async function handleRegisterNewMeal() {
    if (name.trim().length === 0) {
      return Alert.alert("Nova refeição", "Informe o nome da refeição.");
    }

    await DateCreate(date);

    const newMeal: MealStorageDTO = {
      id: id,
      name: name,
      description: description,
      date: date,
      hour: hour,
      isFit: isFit,
    };

    try {
      await MealAdd(newMeal);
      newMealInputRef.current?.blur();

      navigation.navigate("newMealFeedback", newMeal);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova refeição", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova refeição", "Não foi possível adicionar");
      }
    }
  }

  async function handleUpdateMeal(meal: MealStorageDTO) {
    if (name.trim().length === 0) {
      return Alert.alert("Nova refeição", "Informe o nome da refeição.");
    }

    const mealUpdated: MealStorageDTO = {
      id: uuid.v1().toString(),
      name: name,
      description: description,
      date: date,
      hour: hour,
      isFit: isFit,
    };

    try {
      await MealDelete(meal);
      await MealAdd(mealUpdated);
      newMealInputRef.current?.blur();

      navigation.navigate("newMealFeedback", mealUpdated);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova refeição", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova refeição", "Não foi possível adicionar");
      }
    }
  }

  useEffect(() => {
    meal && meal.isFit ? (
      handleYesButton()
    ) : meal && meal.isFit === false ? (
      handleNoButton()
    ) : (
      <></>
    );
  }, []);

  return (
    <Container>
      <HeaderWithBackIcon
        title={meal ? "Editar refeição" : "Nova Refeição"}
        isFit={isFit}
      />
      <InputContainer>
        <TitleInputNewMeal title="Nome" />
        <InputName
          value={name}
          onChangeText={setName}
          cursorColor={theme.COLORS.GRAY_2}
        />

        <TitleInputNewMeal title="Descrição" />
        <InputDescription
          value={description}
          onChangeText={setDescription}
          cursorColor={theme.COLORS.GRAY_2}
          multiline={true}
          textAlignVertical="top"
        />

        <InputDateAndHourContainer>
          <InputDateContainer>
            <TitleInputNewMeal title="Data" />
            <MiniInput
              value={date}
              onChangeText={setDate}
              cursorColor={theme.COLORS.GRAY_2}
              placeholder="XX/XX/XXXX"
            />
          </InputDateContainer>

          <InputHourContainer>
            <TitleInputNewMeal title="Hora" />
            <MiniInput
              value={hour}
              onChangeText={setHour}
              cursorColor={theme.COLORS.GRAY_2}
              placeholder="XX:XX"
            />
          </InputHourContainer>
        </InputDateAndHourContainer>

        <TitleInputNewMeal title="Está dentro da dieta?" />

        <ButtonContainer>
          <ButtonYesOrNot
            title="Sim"
            type="PRIMARY"
            isPressed={yesPressed}
            onPress={() => {
              handleYesButton();
            }}
          />
          <ButtonYesOrNot
            title="Não"
            type="SECONDARY"
            isPressed={noPressed}
            onPress={() => {
              handleNoButton();
            }}
          />
        </ButtonContainer>

        {!meal ? (
          <ButtonRegisterMeal
            title="Cadastrar refeição"
            onPress={() => {
              handleRegisterNewMeal();
            }}
          />
        ) : (
          <ButtonRegisterMeal
            title="Salvar alterações"
            onPress={() => {
              handleUpdateMeal(meal);
            }}
          />
        )}
      </InputContainer>
    </Container>
  );
}
