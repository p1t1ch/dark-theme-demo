// All defined here properties are passed to Emotion ThemeProvider
// In project they are available via useTheme hook or prop in styled components

const colors = {
  black: '#2b2b2b',
  white: '#fff',
  darkPurple: '#6d4672',
  lightPurple: '#ea9ff4',
}

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
      fontSize: 'clamp(1rem, 2.25vw ,1.125rem)', // 16-18
      lineHeight: 1.5,
    },
    h1: {
      fontWeight: 700,
      fontSize: 'clamp(1.5rem, 3.25vw ,2.25rem)', // 24-36
      lineHeight: 1.5,
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
