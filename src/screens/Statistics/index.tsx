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
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { CalculateBestSequence } from "@utils/CalculateBestSequence";

type RouteParams = {
  route;
};

export function Statistics({ route }: RouteParams) {
  const isFocused = useIsFocused();
  const { percentage, meals } = route.params;
  const [totalMeals, setTotalMeals] = useState<number>(0);
  const [bestSequel, setBestSequel] = useState<number>(0);
  const [mealsWithinTheDiet, setMealsWithinTheDiet] = useState<number>(0);
  const [offDietMeals, setOffDietMeals] = useState<number>(0);

  function LoadStatistics() {
    const insideTheDiet = [];
    const offTheDiet = [];

    console.log("LoadStatistics::Meals::", meals);
    meals.map((meal) =>
      meal.isFit ? insideTheDiet.push(meal) : offTheDiet.push(meal)
    );

    setTotalMeals(meals.length);
    setMealsWithinTheDiet(insideTheDiet.length);
    setOffDietMeals(offTheDiet.length);
  }

  function CalculateBestSequence() {
    let bestSequence = 0,
      currentSequence = 0;

    meals.map((meal) => {
      if (meal.isFit === true) {
        currentSequence++;
      } else {
        if (currentSequence > bestSequence) {
          bestSequence = currentSequence;
        }
        currentSequence = 0;
      }
    });

    if (currentSequence > bestSequence) {
      bestSequence = currentSequence;
    }

    return bestSequence;
  }

  useEffect(() => {
    LoadStatistics();
    const sequence = CalculateBestSequence();
    setBestSequel(sequence);
  }, [isFocused]);

  return (
    <Container>
      <StatusBar
        backgroundColor={
          percentage >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
        }
      />
      <HeaderStatistics percentage={percentage} />
      <StatisticsContainer>
        <Title>Estatísticas gerais</Title>
        <GrayCard
          number={bestSequel}
          text="melhor sequência de pratos dentro da dieta"
        />
        <GrayCard number={totalMeals} text="refeições registradas" />
        <MiniCardContainer>
          <MiniCard
            number={mealsWithinTheDiet}
            text="refeições dentro da dieta"
            backgroundColor="PRIMARY"
          />
          <MiniCard
            number={offDietMeals}
            text="refeições fora da dieta"
            backgroundColor="SECONDARY"
          />
        </MiniCardContainer>
      </StatisticsContainer>
    </Container>
  );
}
