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
  margin-bottom: 24px;
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

export const Date = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-top: 8px;
`;

export const Meal = styled.View`
  flex-direction: row;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  margin-top: 8px;

  align-items: center;

  padding-left: 12px;
  padding-right: 12px;
`;

export const MealHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const MealText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  flex: 1;
`;

export const Separator = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_5};
  `}
  margin-left: 12px;
  margin-right: 12px;
`;

export const Status = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `}
  width: 14px;
  height: 14px;
  border-radius: 100px;
  margin-left: 12px;
`;
