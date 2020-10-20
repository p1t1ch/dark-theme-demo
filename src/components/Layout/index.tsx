import React from 'react'
import styled from '@emotion/styled'
import colorVar from '@/utils/colorVar'
import { ThemeProps } from '@theme'
import ColorSchemeToggle from '@/components/ColorSchemeToggle'

const Header = styled.header(({ theme }: ThemeProps) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  borderBottom: `0.25rem solid ${colorVar('primary')}`,
  ...theme.typography.styles.title,
}))

const Main = styled.main(() => ({
  margin: '0 auto',
  padding: '2rem',
}))

const Footer = styled.footer(({ theme }: ThemeProps) => ({
  display: 'grid',
  placeItems: 'center',
  padding: '1rem 2rem',
  borderTop: `0.25rem solid ${colorVar('primary')}`,
  ...theme.typography.styles.title,
}))

interface LayoutProps {
  /** Page content */
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div css={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
      <Header>
        <div>Header</div>
        <ColorSchemeToggle />
      </Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </div>
  )
}

export default Layout
