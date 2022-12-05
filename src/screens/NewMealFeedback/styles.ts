import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`;

export const Button = styled(TouchableOpacity)<TouchableOpacityProps>`
  width: 191px;
  height: 50px;

  align-self: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
  text-align: center;
`;
