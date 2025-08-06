import * as React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import MusicGallery from '../components/MusicGallery';
import {
  GenreTitleBar,
  HeroSection,
  SubHeading,
  BodyText,
  TableOfContents,
  TOCList,
  TOCItem,
  StyledLink
} from '../components/styled';

const ArtistCard = styled.div`
  background: var(--sage);
  padding: 1rem;
  margin-bottom: 1.2rem;
  border-radius: 8px;
`;

const ArtistName = styled.h3`
  color: var(--moss);
  font-family: 'Fira Mono', monospace;
  margin-bottom: 0.3rem;
`;

const IntroText = styled.p`
  font-family: 'Fira Mono', monospace;
  color: var(--dark-olive);
  margin-bottom: 2rem;
`;


const Music = () => {
  return (
    <Layout pageTitle="My Music Tastes">
      <TableOfContents>
        <h2>Genres</h2>
        <TOCList>
          <TOCItem><a href="#rock">Rock</a></TOCItem>
          <TOCItem><a href="#jpop">J-POP</a></TOCItem>
          <TOCItem><a href="#vocaloid">Vocaloid</a></TOCItem>
          <TOCItem><a href="#anime">Anime OP/ED & Game OST</a></TOCItem>
          <TOCItem><a href="#jazz">Jazz Fusion</a></TOCItem>
        </TOCList>
      </TableOfContents>
      <SubHeading>
        I enjoy a wide range of music genres, with rock being my favorite.
        Here’s a curated list of the artists and styles I love the most,
        with some personal notes and albums below.
      </SubHeading>


      <HeroSection>
        <div id="rock">
          <GenreTitleBar>Rock</GenreTitleBar>
          <BodyText>
            Rock is my NO.1 favourite genre — I love energetic performances, deep lyrics, and dynamic instrumentals. <br />
            While rebellion against authority and societal norms has been a prominent theme throughout the history of rock n roll, particularly during its genesis and peak periods of influence, it's also a powerful medium for exploring a broader range of human experiences, from self-expression to emotional storytelling. 
          </BodyText>

          <ArtistCard>
            <ArtistName>
              <StyledLink href='https://www.oneokrock.com/en/'>ONE OK ROCK</StyledLink>
            </ArtistName>
            <IntroText>Japanese rock band with powerful vocals and emotional lyrics. <br />
            OOR has been a significant influence on my musical journey, inspiring me with their passion and energy.<br />
            Their music resonates deeply with me, especially their ability to blend different genres and convey raw emotions.<br />
            OOR has been critisized for their "westernisation" and "selling out," but I believe they have successfully created a unique sound that transcends cultural boundaries.<br />
            When "DETOX" came out in 2025, apparently OOR is going to make more music similar to their older stuff. Hooray! <br />
            Yeah that's right. Get all those screams and grit back!!
            </IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/JinseiBoku.jpg',
                  title: 'The Beginning',
                  youtubeEmbed: 'https://www.youtube.com/embed/Hh9yZWeTmVM',
                },
                {
                  cover: '/albums/DETOX (Japanese Version).jpg',
                  title: 'C.U.R.I.O.S.I.T.Y. feat. Paledusk and CHICO CARLITO',
                  youtubeEmbed: 'https://www.youtube.com/embed/EPlFuHhE05g',
                },
                {
                  cover: '/albums/Ambitions.jpg',
                  title: 'I Was King',
                  youtubeEmbed: 'https://www.youtube.com/embed/M0V46khLWnk',
                },
                {
                  cover: '/albums/35xxxv.jpg',
                  title: 'One by One',
                  youtubeEmbed: 'https://www.youtube.com/embed/R1kCHYQBEa4?si=hjePSLYx7glSW6Ym',
                },
                {
                  cover: '/albums/Eye of the Storm.jpg',
                  title: 'Stand Out Fit In',
                  youtubeEmbed: 'https://www.youtube.com/embed/IGInsosP0Ac?si=lZonJ9aDk5XywxH0',
                },
                {
                  cover: '/albums/Zeitakubyō.jpg',
                  title: '欲望に満ちた青年団',
                  youtubeEmbed: 'https://www.youtube.com/embed/tVNPatb4M_A',
                },
              ]}
            />
          </ArtistCard>


          <ArtistCard>
            <ArtistName>Måneskin</ArtistName>
            <IntroText>Italian rock band known for their raw energy and charismatic style.</IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/maneskin_teatrodira.jpg',
                  title: 'Teatro d’ira',
                  audioSrc: '/audio/maneskin_teatrodira.mp3',
                },
                // Add more albums if you want
              ]}
            />
          </ArtistCard>

          <ArtistCard>
            <ArtistName>Muse</ArtistName>
            <IntroText>Legendary British rock band with epic soundscapes and orchestral elements.</IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/muse_drones.jpg',
                  title: 'Drones',
                  audioSrc: '/audio/muse_drones.mp3',
                },
              ]}
            />
          </ArtistCard>
        </div>
      </HeroSection>


      <HeroSection>
        <div id="jpop">
          <GenreTitleBar>J-POP</GenreTitleBar>
          <BodyText>J-POP offers vibrant and catchy tunes with beautiful melodies and emotional depth.</BodyText>

          <ArtistCard>
            <ArtistName>Yorushika</ArtistName>
            <IntroText>Thoughtful and poetic songwriting.</IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/yorushika_elma.jpg',
                  title: 'Elma',
                  audioSrc: '/audio/yorushika_elma.mp3',
                },
              ]}
            />
          </ArtistCard>

          <ArtistCard>
            <ArtistName>Zutomayo</ArtistName>
            <IntroText>Mysterious, genre-blending group with catchy beats.</IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/zutomayo_terifuri.jpg',
                  title: 'Terifuri',
                  audioSrc: '/audio/zutomayo_terifuri.mp3',
                },
              ]}
            />
          </ArtistCard>
        </div>
      </HeroSection>


      <HeroSection>
        <div id="vocaloid">
          <GenreTitleBar>Vocaloid</GenreTitleBar>
          <BodyText>
            Vocaloid music blends technology and creativity, with amazing producers crafting memorable tunes.
          </BodyText>

          <ArtistCard>
            <ArtistName>Hachioji P</ArtistName>
            <IntroText>Known for catchy melodies and storytelling.</IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/hachiojiP_album1.jpg',
                  title: 'Kimi no Taion',
                  audioSrc: '/audio/hachiojiP_kiminotaion.mp3',
                },
              ]}
            />
          </ArtistCard>
        </div>
      </HeroSection>

      <HeroSection>
        <div id="anime">
          <GenreTitleBar>Anime OP & ED / Game OST</GenreTitleBar>
          <BodyText>
            I love soundtracks and openings that capture the essence of the story and emotions.
          </BodyText>

          <ArtistCard>
            <ArtistName>Ensemble Stars!!</ArtistName>
            <IntroText>Especially adore sound tracks from groups "Eden" and "Valkyrie."</IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/ensemble_eden.jpg',
                  title: 'Eden',
                  audioSrc: '/audio/ensemble_eden.mp3',
                },
                {
                  cover: '/albums/ensemble_valkyrie.jpg',
                  title: 'Valkyrie',
                  audioSrc: '/audio/ensemble_valkyrie.mp3',
                },
              ]}
            />
          </ArtistCard>

          <ArtistCard>
            <ArtistName>Persona series OST</ArtistName>
            <IntroText>Deep, atmospheric music that perfectly fits the game’s vibe.</IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/persona5_album.jpg',
                  title: 'Persona 5 OST',
                  audioSrc: '/audio/persona5_theme.mp3',
                },
              ]}
            />
          </ArtistCard>
        </div>
      </HeroSection>

      <HeroSection>
        <div id="jazz">
          <GenreTitleBar>Jazz Fusion</GenreTitleBar>
          <BodyText>
            Jazz fusion is a refreshing blend of jazz improvisation with rock, funk, and R&B elements.
          </BodyText>

          <ArtistCard>
            <ArtistName>Neighbors Complain</ArtistName>
            <IntroText>Smooth and innovative.</IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/neighbors_album.jpg',
                  title: 'Smooth Vibes',
                  audioSrc: '/audio/neighbors_smoothvibes.mp3',
                },
              ]}
            />
          </ArtistCard>

          <ArtistCard>
            <ArtistName>T-Square</ArtistName>
            <IntroText>Legendary fusion group with memorable melodies.</IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/tsquare_album.jpg',
                  title: 'Mega Funk',
                  audioSrc: '/audio/tsquare_megafunk.mp3',
                },
              ]}
            />
          </ArtistCard>

          <ArtistCard>
            <ArtistName>BLU-SWING</ArtistName>
            <IntroText>Elegant and intricate.</IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/blu_swing_album.jpg',
                  title: 'Elegant Nights',
                  audioSrc: '/audio/blu_swing_elegantnights.mp3',
                },
              ]}
            />
          </ArtistCard>
        </div>
      </HeroSection>
    </Layout>
  );
};

export default Music;

export const Head = () => (
  <>
    <title>Yuyang Wang | Music</title>
    <link rel="icon" href="/favicon.ico" />
  </>
);
