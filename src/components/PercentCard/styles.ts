import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type PercentCardBackgroundStyleProps = TouchableOpacityProps & {
  percentage: number;
};

export const Container = styled(
  TouchableOpacity
)<PercentCardBackgroundStyleProps>`
  background-color: ${({ theme, percentage }) =>
    percentage >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1,
  weight: "fill",
}))`
  align-self: flex-end;
  margin-right: 8px;
  margin-top: 8px;
`;

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
  margin-bottom: 20px;
`;
