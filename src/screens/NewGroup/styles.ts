import styled, { css } from "styled-components/native";

import { UsersThree } from "phosphor-react-native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;

    padding: 24px;

    background-color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;
