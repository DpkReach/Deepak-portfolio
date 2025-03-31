import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Logo = styled(motion.h1)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #58a6ff;
  text-shadow: 2px 2px 5px rgba(88, 166, 255, 0.5);
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px; /* Balanced left & right padding */
  background: #0d1117;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  box-sizing: border-box;
  height: 70px; /* Set a fixed height */
  position: fixed; /* Fix the header position */
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center; /* Center aligns buttons */
  width: auto;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px; /* Reduce spacing between buttons */
  padding: 0;
  margin: 0;
`;

const StyledButton = styled(Link)`
  background: rgba(88, 166, 255, 0.2);
  color: #58a6ff;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  border: 3px solid transparent;

  &:hover {
    background: #58a6ff;
    color: #0d1117;
    border-color: #58a6ff;
    box-shadow: 0px 0px 10px rgba(88, 166, 255, 0.8);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo whileHover={{ scale: 1.1 }}>Software Engineer & AI Enthusiast</Logo>
      <Nav>
        <StyledButton to="/">About</StyledButton>
        <StyledButton to="/projects">Projects</StyledButton>
        <StyledButton to="/contact">Contact</StyledButton>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

