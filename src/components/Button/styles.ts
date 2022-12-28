import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, type }) => css`
    min-height: 56px;
    max-height: 56px;

    flex: 1;
    justify-content: center;
    align-items: center;

    border-radius: 6px;

    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_700
      : theme.COLORS.RED_DARK};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;

    color: ${theme.COLORS.WHITE};
  `}
`;
