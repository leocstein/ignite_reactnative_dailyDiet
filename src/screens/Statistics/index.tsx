import { StatusBar } from "react-native";
import {
  Container,
  StatisticsContainer,
  Title,
  MiniCardContainer,
} from "./styles";
import theme from "@theme/index";
import { GrayCard } from "@components/GrayCard";
import { HeaderStatistics } from "@components/HeaderStatistics";
import { MiniCard } from "@components/MiniCard";

export function Statistics() {
  return (
    <Container>
      <StatusBar backgroundColor={theme.COLORS.GREEN_LIGHT} />
      <HeaderStatistics />
      <StatisticsContainer>
        <Title>Estatísticas gerais</Title>
        <GrayCard
          number="22"
          text="melhor sequência de pratos dentro da dieta"
        />
        <GrayCard number="109" text="refeições registradas" />
        <MiniCardContainer>
          <MiniCard
            number="99"
            text="refeições dentro da dieta"
            backgroundColor="PRIMARY"
          />
          <MiniCard
            number="10"
            text="refeições fora da dieta"
            backgroundColor="SECONDARY"
          />
        </MiniCardContainer>
      </StatisticsContainer>
    </Container>
  );
}
