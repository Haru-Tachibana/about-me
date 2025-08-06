// src/components/Gallery.js
import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding: 2rem;
  margin-top: 2rem;
  background-color: var(--linen);
  border: 1px solid var(--moss);
  border-radius: 8px;
`;

const ToggleButton = styled.button`
  font-family: 'Fira Mono', monospace;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: none;
  background-color: var(--moss);
  color: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: var(--dark-olive);
  }
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Gallery = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <GalleryContainer>
      <ToggleButton onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Gallery' : 'Show Gallery'}
      </ToggleButton>

      {isVisible && <ImageGrid>{children}</ImageGrid>}
    </GalleryContainer>
  );
};

export default Gallery;
