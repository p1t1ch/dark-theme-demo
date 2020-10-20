import React from 'react'
import styled from '@emotion/styled'
import { padding } from 'polished'
import { ThemeProps } from '@theme'

const Header = styled.header(({ theme }: ThemeProps) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '2rem',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: theme.colors.black,
  color: theme.colors.white,
}))

const Main = styled.main(() => ({
  ...padding('3rem', '1rem'),
}))

const Footer = styled.footer(({ theme }: ThemeProps) => ({
  display: 'grid',
  placeItems: 'center',
  padding: '1rem',
  backgroundColor: theme.colors.black,
  color: theme.colors.white,
}))

interface LayoutProps {
  /** Page content */
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div css={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
      <Header>Header</Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </div>
  )
}

export default Layout
