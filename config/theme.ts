// All defined here properties are passed to Emotion ThemeProvider
// In project they are available via useTheme hook or prop in styled components

const colors = {
  black: '#2b2b2b',
  white: '#fff',
  darkPurple: '#6d4672',
  lightPurple: '#ea9ff4',
}

export const themeColors = {
  primary: {
    light: colors.black,
    dark: colors.white,
  },
  secondary: {
    light: colors.white,
    dark: colors.black,
  },
  active: {
    light: colors.darkPurple,
    dark: colors.lightPurple,
  },
}

export type ColorSchemeTypes = 'light' | 'dark'
export type ColorSchemeVars = keyof typeof themeColors

const typography = {
  family: 'Manrope',
  stacks: {
    sansSerif: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Avenir Next"',
      'Avenir',
      'Helvetica Neue',
      'Helvetica',
      'Ubuntu',
      'Roboto',
      'Noto',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ],
    monospace: ['Menlo', 'Consolas', 'Monaco', '"Liberation Mono"', '"Lucida Console"', 'monospace'],
  },
  styles: {
    body: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.375rem)', // 22-20
      lineHeight: 1.7,
    },
    h1: {
      fontWeight: 700,
      fontSize: 'clamp(2.4375rem, 5vw, 4.75rem)', // 76-39
      lineHeight: 1.1,
    },
    title: {
      fontWeight: 600,
      fontSize: 'clamp(1.125rem, 2.5vw, 1.5625rem)', // 25-18
      lineHeight: 1.4,
    },
  },
}

const theme = {
  colors,
  typography,
}

// Use this type with useTheme hook
export type Theme = typeof theme

// Use this interface with styled components props
export interface ThemeProps {
  theme: Theme
}

export default theme
