import { Container, Icon, Title } from "./styles";
import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import theme from "@theme/index";
import { useNavigation } from "@react-navigation/native";

export function HeaderNewInput() {
  const navigation = useNavigation();
  return (
    <Container>
      <StatusBar backgroundColor={theme.COLORS.GRAY_5} />

      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Icon />
      </TouchableOpacity>

      <Title>Nova Refeição</Title>
    </Container>
  );
}
