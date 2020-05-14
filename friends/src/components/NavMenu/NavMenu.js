import React from 'react';

import { StyledNav, StyledLink } from './NavMenuStyles';

export default function NavMenu() {
  return (
    <div>
      <StyledNav>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/login'>Login</StyledLink>
        <StyledLink to='/friendlist'>Friend List</StyledLink>
        <StyledLink to ='/addfriend'>Add Friend</StyledLink>
      </StyledNav>
    </div>
  )
}