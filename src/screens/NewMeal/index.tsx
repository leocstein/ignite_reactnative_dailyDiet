import { ButtonRegisterMeal } from "@components/ButtonRegisterMeal";
import { ButtonYesOrNot } from "@components/ButtonYesOrNot";
import { HeaderNewInput } from "@components/HeaderNewMeal";
import { TitleInputNewMeal } from "@components/TitleInputNewMeal";
import theme from "@theme/index";
import { useState } from "react";
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

export function NewMeal() {
  const [yesPressed, setYesPressed] = useState<boolean>();
  const [noPressed, setNoPressed] = useState<boolean>();

  function handleYesButton() {
    setYesPressed(true);
    setNoPressed(false);
  }

  function handleNoButton() {
    setNoPressed(true);
    setYesPressed(false);
  }

  return (
    <Container>
      <HeaderNewInput />
      <InputContainer>
        <TitleInputNewMeal title="Nome" />
        <InputName cursorColor={theme.COLORS.GRAY_2} />

        <TitleInputNewMeal title="Descrição" />
        <InputDescription
          cursorColor={theme.COLORS.GRAY_2}
          multiline={true}
          textAlignVertical="top"
        />

        <InputDateAndHourContainer>
          <InputDateContainer>
            <TitleInputNewMeal title="Data" />
            <MiniInput
              cursorColor={theme.COLORS.GRAY_2}
              placeholder="XX/XX/XXXX"
            />
          </InputDateContainer>

          <InputHourContainer>
            <TitleInputNewMeal title="Hora" />
            <MiniInput cursorColor={theme.COLORS.GRAY_2} placeholder="XX:XX" />
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

        <ButtonRegisterMeal />
      </InputContainer>
    </Container>
  );
}
