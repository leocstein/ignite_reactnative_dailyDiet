import { View, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type StatusTypeStyleProps = true | false;

type Props = {
  type?: StatusTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
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

export const Status = styled(View)<Props>`
  background-color: ${({ theme, type }) =>
    type === true ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  width: 14px;
  height: 14px;
  border-radius: 100px;
  margin-left: 12px;
`;
