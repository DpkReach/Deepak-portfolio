import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import myImage from '../assets/images/IMG_8515.jpg';

const AboutContainer = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 50px;
  background: linear-gradient(135deg, #0d1117, #1a1f25);
  color: white;
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled(motion.img)`
  width: 350px;
  height: 450px;
  border-radius: 30px;
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
  object-fit: cover;
`;

const TextContainer = styled(motion.div)`
  flex: 2;
  padding: 20px;
  text-align: left;
`;

const GitHubLink = styled(motion.a)`
  display: flex;
  align-items: center;
  color: #58a6ff;
  font-size: 1.2rem;
  text-decoration: none;
  margin-top: 15px;
  transition: color 0.3s;
  &:hover {
    color: #f9826c;
  }
  svg {
    margin-left: 10px;
  }
`;

function About() {
  return (
    <AboutContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <ImageContainer>
        <ProfileImage
          src={myImage}
          alt="Deepak Adimoolam"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </ImageContainer>

      <TextContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <h2>Deepak Adimoolam</h2>
        <p>
          A passionate Software Professional with around 9 years of experience, having strong analytical skills
          and an unyielding passion for coding. Having worked on a variety of projects I have cultivated
          an aptitude for quickly learning new technologies and collaborating with cross-functional teams.
          With a Master of Science (M.S) in Computer Science and AI from the University of North Texas,
          I am dedicated to solving modern complex, challenging problems.
        </p>
        <GitHubLink href="https://github.com/DpkReach" target="_blank">
          GitHub <FaGithub size={24} />
        </GitHubLink>
      </TextContainer>
    </AboutContainer>
  );
}

export default About;

