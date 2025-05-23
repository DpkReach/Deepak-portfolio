import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
/*import myImage from '../assets/images/IMG_8515.jpg';*/
import myImage from '../assets/images/IMG_9470.jpeg';

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
  width: 450px;
  height: 650px;
  border-radius: 50px;
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
  justify-content: center;
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

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 1px;
  flex-wrap: wrap;
`;

const text = `A passionate Software Professional with around 10 years of experience, having strong analytical skills
              and an unyielding passion for coding. Having worked on a variety of projects I have cultivated
              an aptitude for quickly learning new technologies and collaborating with cross-functional teams.
              With a Master of Science (M.S) in Computer Science and AI from the University of North Texas,
              I am dedicated to solving modern complex, challenging problems.`.replace(/\s*\n\s*/g, ' ');

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


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
        <h2 class='my_name'>Deepak Adimoolam</h2>
        <div
              style={{
                fontFamily: 'monospace',
                fontSize: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                padding: '30px',
                whiteSpace: 'pre-wrap', // preserves spaces and line breaks
                wordBreak: 'keep-all',
                lineHeight: 1.6,
              }}
            >
              <motion.p
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-flex', flexWrap: 'wrap' }}
              >
                {text.split(/(\s+)/).map((word, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    style={{
                      display: 'inline-block',
                      marginRight: word.match(/\s+/) ? '0.25ch' : '0',
                      whiteSpace: word.match(/\s+/) ? 'pre' : 'normal',
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
        </div>
        <h3 className="Find" style={{ textAlign: 'center' }}>FIND WITH ME</h3>
        <SocialLinks>
          <GitHubLink href="https://www.linkedin.com/in/deepak-adimoolam" target="_blank">
            Connect on LinkedIn <FaLinkedin size={24} />
          </GitHubLink>
          <GitHubLink href="https://github.com/DpkReach" target="_blank">
            GitHub <FaGithub size={24} />
          </GitHubLink>
        </SocialLinks>
      </TextContainer>
    </AboutContainer>
  );
}

export default About;

