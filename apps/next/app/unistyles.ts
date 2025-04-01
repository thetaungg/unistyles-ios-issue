import { StyleSheet } from 'react-native-unistyles'
import { MD3DarkTheme, MD3LightTheme } from '@stickersmash/ui/styles'

// with this there is no errors
// import { lightTheme, darkTheme  } from '@stickersmash/ui/theme'

const appThemes = {
    light: MD3LightTheme,
    dark: MD3DarkTheme
}

const breakpoints = {
    xs: 0,
    sm: 300,
    md: 500,
    lg: 800,
    xl: 1200
}

type AppBreakpoints = typeof breakpoints
type AppThemes = typeof appThemes

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes {}
    export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
    settings: {
        initialTheme: 'light',
    },
    breakpoints,
    themes: appThemes
})