import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  height: 50px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};

  justify-content: center;

  margin-top: 40%;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
  text-align: center;
`;
