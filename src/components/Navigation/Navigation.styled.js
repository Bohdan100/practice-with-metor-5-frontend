import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 28px;

  &:hover,
  &:focus,
  &.active {
    color: orange;
  }
`;
