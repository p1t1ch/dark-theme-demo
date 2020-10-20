import React from 'react'
import { useColorScheme } from '@/components/ColorSchemeProvider'
import { FiMoon, FiSun } from 'react-icons/fi'
import styled from '@emotion/styled'
import { ThemeProps } from '@theme'

const Button = styled.button(({ theme }: ThemeProps) => ({
  ...theme.typography.styles.darkMode,
}))

const ColorSchemeToggle = () => {
  const [colorScheme, setColorScheme] = useColorScheme()
  // if (!colorScheme) return null

  return (
    <Button
      onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      aria-label="Dark theme"
      aria-pressed={colorScheme === 'dark'}
    >
      {colorScheme === 'dark' ? <FiSun /> : <FiMoon />}
    </Button>
  )
}

export default ColorSchemeToggle
