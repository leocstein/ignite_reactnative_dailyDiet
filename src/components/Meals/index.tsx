import { ListEmpty } from "@components/ListEmpty";
import { FlatList } from "react-native";
import { Container, Button, ButtonText, Title, Icon, Date } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { Meal } from "@components/Meal";
type Props = {
  meals: MealStorageDTO[];
  dates: string[];
};

export function Meals({ meals, dates }: Props) {
  const allMeals = meals.sort((p1, p2) =>
    p1.hour > p2.hour ? 1 : p1.hour < p2.hour ? -1 : 0
  );
  const allDates = dates.sort().reverse();
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Refeições</Title>
      <Button onPress={() => navigation.navigate("mealForm")}>
        <Icon />
        <ButtonText>Nova Refeição</ButtonText>
      </Button>

      <FlatList
        data={allDates}
        keyExtractor={(item: string) => item}
        renderItem={({ item }) => (
          <>
            <Date>{item}</Date>

            {allMeals.map((meal) =>
              meal.date === item ? <Meal key={meal.id} meal={meal} /> : <></>
            )}
          </>
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Ainda não há registros" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          allMeals.length === 0 && { flex: 1 },
        ]}
      />
    </Container>
  );
}
