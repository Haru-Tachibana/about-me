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
