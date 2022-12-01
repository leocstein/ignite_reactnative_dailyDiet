import { ListEmpty } from "@components/ListEmpty";
import { MealProps } from "@screens/Home";
import { FlatList } from "react-native";
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
import { useNavigation } from "@react-navigation/native";
type Props = {
  data: MealProps[];
};

export function Meals({ data }: Props) {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Refeições</Title>
      <Button onPress={() => navigation.navigate("newMeal")}>
        <Icon />
        <ButtonText>Nova Refeição</ButtonText>
      </Button>

      <FlatList
        data={data}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <>
            <Date>{item.date}</Date>

            {item.meals.map((meal) => {
              return (
                <Meal key={meal.hour}>
                  <MealHour>{meal.hour}</MealHour>
                  <Separator>|</Separator>
                  <MealText>{meal.name}</MealText>
                  <Status type={meal.insideTheDiet} />
                </Meal>
              );
            })}
          </>
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Ainda não há registros" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          data.length === 0 && { flex: 1 },
        ]}
      />
    </Container>
  );
}
