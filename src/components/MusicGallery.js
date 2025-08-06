import React, { useState, useRef, useEffect } from 'react';
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

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Button = styled.button`
  background: var(--moss);
  border: none;
  border-radius: 4px;
  color: var(--linen);
  padding: 0.3rem 0.6rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: var(--coffee);
  }
`;

const ProgressBar = styled.input`
  flex-grow: 1;
  cursor: pointer;
`;

const VolumeControl = styled.input`
  width: 80px;
  cursor: pointer;
`;

const MusicGallery = ({ albums }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(null);


  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress(audio.currentTime);
    };

    audio.addEventListener('timeupdate', updateProgress);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, [currentIndex]);

 
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };


  const selectAlbum = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
    setProgress(0);
  };

  
  const onSeek = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setProgress(e.target.value);
  };


  const onVolumeChange = (e) => {
    const vol = e.target.value;
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  
  const toggleMute = () => {
    if (audioRef.current) {
      if (audioRef.current.volume === 0) {
        audioRef.current.volume = volume || 1;
      } else {
        audioRef.current.volume = 0;
      }
    }
  };

  const currentAlbum = albums[currentIndex];

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
        <audio
          ref={audioRef}
          src={currentAlbum.audioSrc}
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          autoPlay={false}
          volume={volume}
          preload="metadata"
        />
        <Controls>
          <Button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</Button>
          <Button onClick={toggleMute}>Mute</Button>
          <ProgressBar
            type="range"
            min="0"
            max={audioRef.current ? audioRef.current.duration || 0 : 0}
            value={progress}
            onChange={onSeek}
          />
          <VolumeControl
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={onVolumeChange}
          />
        </Controls>
      </PlayerWrapper>
    </div>
  );
};

export default MusicGallery;