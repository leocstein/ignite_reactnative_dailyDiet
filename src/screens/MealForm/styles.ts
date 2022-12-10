import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import TextInputMask from "react-native-text-input-mask";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const InputContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
  border-radius: 20px;
  margin-top: -20px;
`;

export const InputName = styled.TextInput`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
  `}
  height: 48px;
  border-radius: 6px;
  margin-top: 4px;
  margin-bottom: 24px;
  padding: 14px;
`;

export const InputDescription = styled.TextInput`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
  `}
  height: 120px;

  border-radius: 6px;
  margin-top: 4px;
  margin-bottom: 24px;
  padding: 14px;
`;

export const InputDateAndHourContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputDateContainer = styled.View``;

export const InputHourContainer = styled.View``;

export const MiniInput = styled.TextInput`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
  `}
  height: 48px;
  width: 154px;
  border-radius: 6px;
  margin-top: 4px;
  margin-bottom: 24px;
  padding: 14px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;
