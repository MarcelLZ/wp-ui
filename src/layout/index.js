import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
  height: 100vh;
`

const Layout = ({ children, className, style }) => (
  <StyledLayout
    className={className}
    style={style}>
    {children}
  </StyledLayout>
)

export { Header } from './header'
export { Content } from './content'
export default Layout
