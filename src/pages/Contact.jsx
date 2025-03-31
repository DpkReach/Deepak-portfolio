import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Using React Icons for visual appeal

// Styled Components
const ContactContainer = styled.section`
  padding: 50px;
  background: #f9f9f9;
  text-align: center;
  width: 200vh;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 20px 0;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #0077b5;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #0a58ca;
  }
`;

const IconContainer = styled.div`
  font-size: 1.8rem;
  color: #0077b5;
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  
  a {
    transition: transform 0.3s;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact</ContactTitle>
      <ContactInfo>Email: <ContactLink href="mailto:deepakadimoolam1412@gmail.com">deepakadimoolam1412@gmail.com</ContactLink></ContactInfo>
      <ContactInfo>LinkedIn: <ContactLink href="https://www.linkedin.com/in/deepak-adimoolam/" target="_blank">LinkedIn</ContactLink></ContactInfo>
      
      {/* Icons for LinkedIn and Email */}
      <IconContainer>
        <ContactLink href="mailto:deepakadimoolam1412@gmail.com">
          <FaEnvelope />
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/deepak-adimoolam/" target="_blank">
          <FaLinkedin />
        </ContactLink>
      </IconContainer>
    </ContactContainer>
  );
}

export default Contact;

