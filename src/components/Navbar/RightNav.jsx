import React from "react";
import styled from "styled-components";
import "../../vars.css";

const NavList = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-flow: row nowrap;

  li {
    padding: 1rem 0.6rem;
  }

  a {
    text-decoration: none;
    color: var(--color-text);
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--color-accent);
  }

  @media (max-width: 830px) {
    flex-flow: column nowrap;
    background-color: var(--color-secondary);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;

    li {
      padding: 1rem;
      color: var(--color-text);
    }
  }
`;

const RightNav = ({ open }) => (
  <NavList open={open}>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#experience">Experience</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </NavList>
);

export default RightNav;
