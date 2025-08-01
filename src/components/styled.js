// src/components/Styled.js
import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
`;

export const BigHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #ccd6f6;
`;

export const AccentText = styled.span`
  color: #64ffda;
  font-size: 1.5rem;
`;

export const SubHeading = styled.h2`
  font-size: 1.25rem;
  color: #8892b0;
  max-width: 600px;
  line-height: 1.5;
`;

// clean paragraph text
export const BodyText = styled.p`
  font-size: 1rem;
  color: #8892b0;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`;

// reference text (italic + monospace)
export const ReferenceText = styled.p`
  font-family: 'Fira Mono', monospace;
  font-style: italic;
  color: #a8b2d1;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

// special username text like @YuyangW
export const Username = styled.span`
  color: #64ffda;
  font-weight: 600;
  font-family: 'Fira Mono', monospace;
  font-size: 1rem;
`;


// ooter text
export const Footer = styled.footer`
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 0;
  font-size: 0.85rem;
  color: #8892b0;
`;
