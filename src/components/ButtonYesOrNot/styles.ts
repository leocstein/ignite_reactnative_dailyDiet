import { ButtonTypeStyleProps } from "./index";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

type Props = {
  type: ButtonTypeStyleProps;
  isPressed?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  height: 50px;
  width: 154px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border: 1px solid
    ${({ theme, type, isPressed }) =>
      isPressed === true && type === "PRIMARY"
        ? theme.COLORS.GREEN_DARK
        : isPressed === true && type === "SECONDARY"
        ? theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_6};

  background-color: ${({ theme, type, isPressed }) =>
    isPressed === true && type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : isPressed === true && type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
`;

export const Text = styled.Text``;

export const Status = styled(View)<Props>`
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  width: 8px;
  height: 8px;
  border-radius: 100px;
  margin-right: 8px;
`;
