import React from 'react'
import 'focus-visible'
import { Global } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { buttons, normalize } from 'polished'
import { Theme } from '@theme'
import '@/fonts/index.css'
import colorVar from '@/utils/colorVar'

const GlobalStyles = () => {
  const theme = useTheme<Theme>()

  return (
    <Global
      styles={[
        ...normalize(),
        {
          ':root': {
            '--color-primary': theme.colors.black,
            '--color-secondary': theme.colors.white,
            '--color-active': theme.colors.darkPurple,
          },
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          '::selection': {
            backgroundColor: colorVar('primary'),
            color: colorVar('secondary'),
          },
          html: {
            fontFamily: [theme.typography.family, ...theme.typography.stacks.sansSerif].join(', '),
            scrollBehavior: 'smooth',
            '@media (prefers-reduced-motion)': {
              scrollBehavior: 'auto',
            },
          },
          body: {
            ...theme.typography.styles.body,
            backgroundColor: colorVar('secondary'),
            color: colorVar('primary'),
          },
          'h1, h2, h3, h4, h5, h6, p, ol, ul, dl, dd, hr, blockquote, figure': {
            margin: 0,
            padding: 0,
          },
          h1: {
            ...theme.typography.styles.h1,
            textAlign: 'center',
            marginBottom: '2rem',
          },
          '.js-focus-visible :focus:not(.focus-visible)': {
            outline: 'none',
          },
          ':focus': {
            outline: `0.25rem solid ${colorVar('active')}`,
            outlineOffset: '0.125rem',
          },
          [buttons()]: {
            border: 'none',
            padding: 0,
            background: 'none',
            cursor: 'pointer',
            color: colorVar('primary'),
          },
          a: {
            textDecoration: 'none',
            color: colorVar('primary'),
          },
          strong: {
            fontWeight: 700,
          },
          svg: {
            fill: 'currentColor',
          },
          li: {
            listStylePosition: 'inside',
          },
        },
      ]}
    />
  )
}

export default GlobalStyles
