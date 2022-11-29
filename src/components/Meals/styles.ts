import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;

  margin-top: 40px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-bottom: 8px
`;

export const Button = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_2};
  `}
  flex-direction: row;
  height: 60px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 8px;
`;
