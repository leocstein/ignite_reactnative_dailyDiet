import { HeaderNewInput } from "@components/HeaderNewMeal";
import { TitleInputNewMeal } from "@components/TitleInputNewMeal";
import { Container, InputContainer } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <HeaderNewInput />
      <InputContainer>
        <TitleInputNewMeal title="Nome" />
      </InputContainer>
    </Container>
  );
}
