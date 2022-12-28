import { CaretLeft } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const Logo = styled.Image`
  ${({ theme }) => css`
    width: 46px;
    height: 55px;
  `}
`;

export const BackButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex: 1;
  `}
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
