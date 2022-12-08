import { ButtonRegisterMeal } from "@components/ButtonRegisterMeal";
import { ButtonYesOrNot } from "@components/ButtonYesOrNot";
import { HeaderNewInput } from "@components/HeaderNewMeal";
import { TitleInputNewMeal } from "@components/TitleInputNewMeal";
import theme from "@theme/index";
import { useRef, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { dateCreate } from "@storage/date/dateCreate";
import { Alert, TextInput } from "react-native";
import { AppError } from "@utils/AppError";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { MealAdd } from "@storage/meal/mealAdd";

import uuid from "react-native-uuid";

export function NewMeal() {
  const [id, setId] = useState(uuid.v1().toString());
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");

  const [yesPressed, setYesPressed] = useState<boolean>();
  const [noPressed, setNoPressed] = useState<boolean>();
  const [isFit, setIsFit] = useState<boolean>();

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

  async function handleRegister() {
    if (name.trim().length === 0) {
      return Alert.alert("Nova refeição", "Informe o nome da refeição.");
    }

    await dateCreate(date);

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

  return (
    <Container>
      <HeaderNewInput />
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

        <ButtonRegisterMeal
          onPress={() => {
            handleRegister();
          }}
        />
      </InputContainer>
    </Container>
  );
}
