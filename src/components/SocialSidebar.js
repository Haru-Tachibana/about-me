import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Sidebar = styled.div`
  position: fixed;
  bottom: 0;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;  /* hide on small screens */
  }
`;

const IconLink = styled.a`
  color: #6c584c;       
  font-size: 2rem;       
  transition: color 0.3s ease;

  &:hover {
    color: #a98467;     
  }
`;

const SocialSidebar = () => {
  return (
    <Sidebar>
      <IconLink href="https://github.com/Haru-Tachibana" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/yuyang-wang-b76859290/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </IconLink>
      <IconLink href="https://www.instagram.com/paloma_yang_w/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </IconLink>
    </Sidebar>
  );
};

export default SocialSidebar;
