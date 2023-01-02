import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { Routes } from '@routes/index'
import { Groups } from '@screens/Groups'
import { Players } from '@screens/Players'
import { NewGroup } from '@screens/NewGroup'
import { Loading } from '@components/Loading'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import theme from './src/theme'

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      {fonstLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
