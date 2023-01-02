import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;

    padding: 24px;

    background-color: ${theme.COLORS.GRAY_600};
  `}
`

export const Form = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.COLORS.GRAY_700};

    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
  `}
`

export const HeaderList = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin: 32px 0 12px;
  `}
`
export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
