import React from 'react'
import Link from 'next/link'
import { StyledHeader, Logo, NavLinks } from './styles'

export const Header: React.FC = () => (
  <StyledHeader>
    <Link href="/">
      <Logo>
        <span>Logo</span>
      </Logo>
    </Link>
    <NavLinks>
      <Link href="/">Home</Link>
    </NavLinks>
  </StyledHeader>
)
