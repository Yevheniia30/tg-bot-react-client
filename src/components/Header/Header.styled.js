import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const NavLink = styled(BaseNavLink)`
  padding: 0 10px;
  list-style-type: none;
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }
`;
