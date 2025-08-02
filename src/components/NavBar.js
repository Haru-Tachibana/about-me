import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Styled nav container
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end; /* move links to right */
  gap: 20px;
  background-color: var(--sage); /* lighter green navbar */
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--moss);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

// Styled Link
const NavLink = styled(Link)`
  color: var(--dark-olive); /* darker text for contrast */
  text-decoration: none;
  font-family: 'Fira Mono', monospace;
  font-size: 0.95rem;

  &:hover {
    color: var(--moss); /* highlight on hover */
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/anime">Anime</NavLink>
    </Nav>
  );
};

export default NavBar;
