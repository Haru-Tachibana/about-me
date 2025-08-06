import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowUp } from 'lucide-react';

const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;       
  height: 48px;     
  border-radius: 50%;
  background-color: var(--moss);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0.75rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  cursor: pointer;
  z-index: 1000;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  transition: background 0.3s;

  &:hover {
    background-color: var(--dark-moss);
  }
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <Button onClick={scrollToTop} visible={isVisible} aria-label="Back to Top">
      <ArrowUp size={20} />
    </Button>
  );
};

export default BackToTop;
