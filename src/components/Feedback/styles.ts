import styled, { css } from "styled-components/native";

export type TitleTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  color: TitleTypeStyleProps;
};

export const Title = styled.Text<Props>`
  ${({ theme, color }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${color === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
  text-align: center;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  margin-bottom: 8px;
`;

export const TextBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Image = styled.Image`
  height: 288px;
  width: 224px;
  align-self: center;
  margin-top: 40px;
  margin-bottom: 32px;
`;
