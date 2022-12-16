import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { PercentCardBackgroundStyleProps } from "@components/PercentCard/styles";

export const Container = styled.View<PercentCardBackgroundStyleProps>`
  background-color: ${({ theme, percentage }) =>
    percentage >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 24px;
`;

export const Button = styled(TouchableOpacity)``;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1,
  weight: "fill",
}))``;

export const Number = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
  text-align: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  text-align: center;
  margin-top: 2px;
  margin-bottom: 32px;
`;
