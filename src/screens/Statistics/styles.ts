import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const StatisticsContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_7};
  `}
  flex:1;
  padding: 24px;
  border-radius: 20px;
  margin-top: -20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: center;
  margin-bottom: 23px;
`;

export const MiniCardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
