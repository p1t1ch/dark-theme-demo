import React from 'react'
import styled from '@emotion/styled'
import colorVar from '@/utils/colorVar'
import { ThemeProps } from '@theme'
import ColorSchemeToggle from '@/components/ColorSchemeToggle'
import { ReactComponent as GithubIcon } from '@/icons/github.svg'

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
  padding: '3rem 2rem',
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
        <h1>Dark theme demo</h1>
        <ColorSchemeToggle />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <a href="https://github.com/p1t1ch/dark-theme-demo" target="_blank" rel="noopener noreferrer">
          <GithubIcon width={48} title="Project page on Github" />
        </a>
      </Footer>
    </div>
  )
}

export default Layout
