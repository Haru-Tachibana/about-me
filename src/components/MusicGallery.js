import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const AlbumCover = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
  &:hover {
    border-color: var(--moss);
  }
  &.active {
    border-color: var(--moss);
  }
`;

const PlayerWrapper = styled.div`
  margin-top: 1rem;
  padding: 0.7rem;
  background: var(--sage);
  border-radius: 8px;
  font-family: 'Fira Mono', monospace;
  color: var(--dark-olive);
  user-select: none;
`;

const EmbedWrapper = styled.div`
  margin-top: 0.5rem;
  iframe {
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
  }
`;

const MusicGallery = ({ albums }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentAlbum = albums[currentIndex];

  const selectAlbum = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <GalleryWrapper>
        {albums.map((album, i) => (
          <AlbumCover
            key={i}
            src={album.cover}
            alt={album.title}
            onClick={() => selectAlbum(i)}
            className={i === currentIndex ? 'active' : ''}
            title={album.title}
          />
        ))}
      </GalleryWrapper>

      <PlayerWrapper>
        <div><strong>Now Playing:</strong> {currentAlbum.title}</div>
        <EmbedWrapper>
          {currentAlbum.spotifyEmbed && (
            <iframe
              src={currentAlbum.spotifyEmbed}
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              title="Spotify Player"
            ></iframe>
          )}

          {currentAlbum.youtubeEmbed && (
            <iframe
              src={currentAlbum.youtubeEmbed}
              width="100%"
              height="315"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Player"
            ></iframe>
          )}
        </EmbedWrapper>
      </PlayerWrapper>
    </div>
  );
};

export default MusicGallery;