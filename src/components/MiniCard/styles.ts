import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type MiniCardTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: MiniCardTypeStyleProps;
};

export const Container = styled(View)<Props>`
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  height: 107px;
  width: 165px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const Number = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: center;
  margin-top: 16px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: center;
  margin-top: 8px;
`;
