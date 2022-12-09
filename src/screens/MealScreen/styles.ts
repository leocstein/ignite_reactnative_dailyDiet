import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PencilSimpleLine, Trash } from "phosphor-react-native";

type ButtonStyleProps = "PRIMARY" | "SECONDARY";

type ButtonProps = TouchableOpacityProps & {
  type: ButtonStyleProps;
};

type StatusProps = {
  type: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const MealInformationContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
  border-radius: 20px;
  margin-top: -20px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 24px;
`;

export const DateAndHourTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px;
`;

export const DateAndHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 24px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  width: 144px;
  height: 34px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  align-items: center;
  border-radius: 1000px;

  padding-left: 16px;
  padding-right: 16px;
`;

export const StatusText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Status = styled(View)<StatusProps>`
  background-color: ${({ theme, type }) =>
    type === true ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 1000px;
`;

export const Button = styled(TouchableOpacity)<ButtonProps>`
  flex-direction: row;
  height: 50px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  padding: 24px;
`;

export const ButtonEditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 12px;
`;

export const ButtonRemoveIcon = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_1,
}))`
  margin-right: 12px;
`;

export const ButtonText = styled.Text<ButtonProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
  `}
`;
