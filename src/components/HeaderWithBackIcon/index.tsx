import { Container, Icon, Title } from "./styles";
import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import theme from "@theme/index";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  isFit?: boolean;
};

export function HeaderWithBackIcon({ title, isFit }: Props) {
  const navigation = useNavigation();
  return (
    <Container backGroundColor={isFit}>
      <StatusBar
        backgroundColor={
          isFit
            ? theme.COLORS.GREEN_LIGHT
            : isFit === false
            ? theme.COLORS.RED_LIGHT
            : theme.COLORS.GRAY_5
        }
      />

      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Icon />
      </TouchableOpacity>

      <Title>{title}</Title>
    </Container>
  );
}
