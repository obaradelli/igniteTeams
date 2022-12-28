import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;

    margin: 32px 0;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;

    text-align: center;

    color: ${theme.COLORS.WHITE};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    text-align: center;

    color: ${theme.COLORS.GRAY_300};
  `}
`
