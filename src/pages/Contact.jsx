import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0; /* Match your global background */
  position: relative;
`;

const ContactContainer = styled.div`
  background: #f9f9f9;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  max-width: 500px;
  width: 90%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #0077b5;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #0a58ca;
  }
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  font-size: 2rem;
  margin-top: 20px;

  a {
    color: #0077b5;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

function Contact() {
  return (
    <ContactWrapper>
      <ContactContainer id="contact">
        <Title>Contact</Title>
        <Info>Email: <Link href="mailto:deepakadimoolam1412@gmail.com">deepakadimoolam1412@gmail.com</Link></Info>
        <Info>LinkedIn: <Link href="https://www.linkedin.com/in/deepak-adimoolam/" target="_blank" rel="noopener noreferrer">deepak-adimoolam</Link></Info>
        <IconRow>
          <Link href="mailto:deepakadimoolam1412@gmail.com"><FaEnvelope /></Link>
          <Link href="https://www.linkedin.com/in/deepak-adimoolam/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
        </IconRow>
      </ContactContainer>
    </ContactWrapper>
  );
}

export default Contact;
