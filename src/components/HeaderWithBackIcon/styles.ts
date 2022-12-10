import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

type HeaderWithBackIconStyleProps = {
  backGroundColor: boolean | undefined;
};

export const Container = styled.View<HeaderWithBackIconStyleProps>`
  flex-direction: row;
  height: 110px;
  background-color: ${({ theme, backGroundColor }) =>
    backGroundColor
      ? theme.COLORS.GREEN_LIGHT
      : backGroundColor === false
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_5};
  padding: 24px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
  weight: "fill",
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  margin-left: 25%;
`;

export const NameInput = styled(TextInput).attrs({})`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
`;
