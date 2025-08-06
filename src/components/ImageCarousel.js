// src/components/ImageCarousel.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin: 2rem auto;
`;

const ImageDisplay = styled.div`
  position: relative;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  border-radius: 10px;
  border: 2px solid var(--coffee);
  background-color: var(--linen);
`;

const ClickZone = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  z-index: 2;
  cursor: pointer;
`;

const LeftZone = styled(ClickZone)`
  left: 0;
`;

const RightZone = styled(ClickZone)`
  right: 0;
`;

const DotsContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const Dot = styled.span`
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${props => (props.active ? 'var(--moss)' : 'var(--coffee)')};
  border-radius: 50%;
  cursor: pointer;
`;

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return <p style={{ textAlign: 'center' }}>No images to display.</p>;
  }

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <CarouselWrapper>
      <ImageDisplay>
        <StyledImage src={images[index]} alt={`Slide ${index + 1}`} />
        <LeftZone onClick={prevImage} />
        <RightZone onClick={nextImage} />
      </ImageDisplay>
      <DotsContainer>
        {images.map((_, i) => (
          <Dot
            key={i}
            active={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </DotsContainer>
    </CarouselWrapper>
  );
};


export default ImageCarousel;