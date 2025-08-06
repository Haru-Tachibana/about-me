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
              When "DETOX" came out in 2025 (check the full album out <StyledLink href='https://www.youtube.com/playlist?list=PLxA687tYuMWgnC3A2gApxJFq41kRt5ypX'>here</StyledLink>), apparently OOR is going to make more music similar to their older stuff. Hooray! <br />
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
            <ArtistName>
              <StyledLink href='https://en.wikipedia.org/wiki/M%C3%A5neskin'>Måneskin</StyledLink>
            </ArtistName>
            <IntroText>Italian rock band known for their raw energy and charismatic style.
              <br />
              Måneskin has been a breath of fresh air in the rock scene, bringing back the
              glam rock vibes with a modern twist. Their music is infectious, and their performances are electrifying. <br />
              Also <StyledLink href='https://www.instagram.com/vicdeangelis/?hl=en'>Victoria De Angelis</StyledLink>, the bassist attracts me a lot with her unique style and stage presence. <br />
              Agree or not, Vic is hot.
            </IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/SUPERMODEL - Single.jpg',
                  title: 'SUPERMODEL',
                  youtubeEmbed: 'https://www.youtube.com/embed/jODrVofka54',
                },
                {
                  cover: '/albums/Teatro.jpg',
                  title: 'I WANNA BE YOUR SLAVE',
                  youtubeEmbed: 'https://www.youtube.com/embed/yOb9Xaug35M',
                },
                {
                  cover: '/albums/RUSH! (ARE U COMING_).jpg',
                  title: 'GOSSIP (feat. Tom Morello)',
                  youtubeEmbed: 'https://www.youtube.com/embed/XrsbfrFPATs',
                },
                {
                  cover: '/albums/Il ballo della vita.jpg',
                  title: "L'altra dimensione",
                  youtubeEmbed: 'https://www.youtube.com/embed/tTKuYa0MxsY',
                },
              ]}
            />
          </ArtistCard>

          <ArtistCard>
            <ArtistName>
              <StyledLink href='https://linkinpark.com/'>Linkin Park</StyledLink>
            </ArtistName>
            <IntroText>
              Their fusion of rock, metal, and electronic elements created a sound that resonated deeply with me. <br />
              The emotional depth of their lyrics and the raw energy of their music have left a lasting impact on my life. <br />
              "Sometimes the saddest people seem the happiest once they've made that decision"...is what I wanted to say about Chester Bennington. <br />
              His life story is a lagacy.
            </IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/From Zero (Deluxe Edition).jpg',
                  title: "The Emptiness Machine",
                  youtubeEmbed: 'https://www.youtube.com/embed/SRXH9AbT280',
                },
                {
                  cover: '/albums/Meteora (20th Anniversary Edition).jpg',
                  title: 'Lost',
                  youtubeEmbed: 'https://www.youtube.com/embed/7NK_JOkuSVY',
                },
                {
                  cover: '/albums/numb.png',
                  title: 'Numb',
                  youtubeEmbed: 'https://www.youtube.com/embed/kXYiU_JCYtU',
                },
                {
                  cover: '/albums/Papercut.png',
                  title: 'Papercut',
                  youtubeEmbed: 'https://www.youtube.com/embed/vjVkXlxsO8Q',
                },
              ]}
            />
          </ArtistCard>
        </div>
      </HeroSection>


      <HeroSection>
        <div id="jpop">
          <GenreTitleBar>J-Pop | J-Rock</GenreTitleBar>
          <BodyText>J-Pop/J-Rock offers vibrant and catchy tunes with beautiful melodies and emotional depth.<br />
            I love how diverse and innovative J-POP can be, blending traditional sounds with modern influences.
          </BodyText>

          <ArtistCard>
            <ArtistName>
              <StyledLink href='https://yorushika.com/?lang=en'>Yorushika</StyledLink>
            </ArtistName>
            <IntroText>Thoughtful and poetic songwriting.
              <br />
              Yorushika's music often explores themes of love, loss, and the passage of time, resonating deeply with listeners. <br />
              Their unique sound, blending rock and pop elements, creates an emotional and immersive experience.<br />
              They always drop beautiful and qality songs (thanks n-buna and suis) and I LOVE THEIR GUIRAR SOLOS. <br />
              <StyledLink href='https://www.youtube.com/watch?v=lJ1UuhLqY5E&list=RDlJ1UuhLqY5E&start_radio=1&rv=lJ1UuhLqY5E'>Plagiarism</StyledLink> and <StyledLink href='https://www.youtube.com/watch?v=4MoRLTAJY_0&list=PLUQKJP1sVuNOEqkssSr7KokY_mS2beyEs'>That's Why I Gave Up on Music</StyledLink> are my favourite albums. <br />
              <StyledLink href='https://www.youtube.com/channel/UCRbsmnDTHD9-4pEIuG7zYRw'>rachie 🎀💌</StyledLink> has amazing English cover for lots of Yorushika songs, please check <StyledLink href='https://www.youtube.com/watch?v=sAAfVjUwVc4'>Thought Crime</StyledLink>, I absolutely LOVE the lyrics.
            </IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/だから僕は音楽を辞めた.jpg',
                  title: "That's Why I Gave Up on Music",
                  youtubeEmbed: 'https://www.youtube.com/embed/KTZ-y85Erus',
                },
                {
                  cover: '/albums/Thoughtcrime - Single.jpg',
                  title: 'Thoughtcrime',
                  youtubeEmbed: 'https://www.youtube.com/embed/ENcnYh79dUY',
                },
                {
                  cover: '/albums/parade.jpg',
                  title: 'Parade',
                  youtubeEmbed: 'https://www.youtube.com/embed/ry3Tupx4BL4',
                },
                {
                  cover: '/albums/負け犬にアンコールはいらない.jpg',
                  title: 'Just a Sunny Day for You',
                  youtubeEmbed: 'https://www.youtube.com/embed/-VKIqrvVOpo',
                },
              ]}
            />
          </ArtistCard>

          <ArtistCard>
            <ArtistName>
              <StyledLink href='https://zutomayo.net/'>Zutomayo</StyledLink>
            </ArtistName>
            <IntroText>Mysterious, genre-blending group with catchy beats.
              <br />
              The group has never released a full member list, crediting different people for arrangements and music video production each time. <br />
              I love their catchy melodies and the way they blend different genres seamlessly. <br />
              Their songs often have a dreamy quality that transports me to another world.<br />
              Most importantly, ABSOLUTELY GOATED BASSLINES!! and fantastic animated music videos.
              Bass solos are always a highlight for me, and Zutomayo never disappoints in that department.<br />
              <StyledLink href='https://www.youtube.com/watch?v=up4TkZ7otHk'>Obenkyou Shitoiteyo</StyledLink> has a fantastic bass solo (starts from 1:30) that I can't get enough of!
            </IntroText>
            <MusicGallery
              albums={[
                {
                  cover: '/albums/Time Left - Single.jpg',
                  title: "Time Left",
                  youtubeEmbed: 'https://www.youtube.com/embed/6OC92oxs4gA',
                },
                {
                  cover: '/albums/Hippocampal Pain - Single.jpg',
                  title: 'Hippocampal Pain',
                  youtubeEmbed: 'https://www.youtube.com/embed/PLG2Uexyi9s',
                },
                {
                  cover: '/albums/Obenkyou Shitoiteyo - Single.jpg',
                  title: 'Obenkyou Shitoiteyo',
                  youtubeEmbed: 'https://www.youtube.com/embed/up4TkZ7otHk',
                },
                {
                  cover: '/albums/Mirror Tune - Single.jpg',
                  title: 'Mirror Tune',
                  youtubeEmbed: 'https://www.youtube.com/embed/BVvvUGP0MFw',
                },
                {
                  cover: '/albums/沈香学.jpg',
                  title: 'Kira Killer',
                  youtubeEmbed: 'https://www.youtube.com/embed/s_6rzfhDOIg',
                },
                {
                  cover: '/albums/Gusare.jpg',
                  title: "One's Mind",
                  youtubeEmbed: 'https://www.youtube.com/embed/wQPgM-9LatM',
                },
                {
                  cover: '/albums/Byoushinwo Kamu - Single.jpg',
                  title: 'Byoushinwo Kamu',
                  youtubeEmbed: 'https://www.youtube.com/embed/GJI4Gv7NbmE',
                },
                {
                  cover: '/albums/Hogarakana Hifutote Fufuku - EP.jpg',
                  title: 'MILABO',
                  youtubeEmbed: 'https://www.youtube.com/embed/I88PrE-KUPk',
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
