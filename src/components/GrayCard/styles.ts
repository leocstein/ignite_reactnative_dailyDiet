import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_6};
  `}
  height: 89px;
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
