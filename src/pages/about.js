import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSection, BigHeading, AccentText, SubHeading, BodyText, StyledLink } from '../components/styled';
import StyledButton from '../components/button';

const IndexPage = () => {
  return (
    <Layout pageTitle="About">
      <HeroSection>
        <SubHeading>
          Name： Yuyang Wang (Paloma if you want :3 but I prefer Yang)
          <BodyText>*I use Haru Tachibana (橘 羽流) as well, if you have checked <StyledLink href="https://github.com/Haru-Tachibana">my GitHub profile</StyledLink> you'll be familiar with this name. I use Haru as my online name.</BodyText>
        </SubHeading>
        <SubHeading>
          My Origin:  I am bron and raised in <StyledLink href="https://en.wikipedia.org/wiki/Hangzhou">Hangzhou</StyledLink>, China.
          <BodyText>My hometwon is the capital of Zhejiang Province located in southeast China. It's a famous tourist destination and known for technological innovation. It's the hosts the headquarters of Alibaba Group, Ant Group, DeepSeek, Geely, and NetEase. </BodyText>
          <BodyText>I speak 3 languages: Madarin Chinese, English and Japanese.</BodyText>
        </SubHeading>
        <SubHeading>
          MBTI Type：<StyledLink href="https://www.16personalities.com/entj-personality">ENTJ-A</StyledLink> (Assertive Commanders)
          <BodyText>Although I seem more like an INTP or an INTJ (especially when I'm alone or concentrating), based on the Jung 8 fuctions test <StyledLink href='https://www.reddit.com/r/mbti/comments/19ce5a9/what_are_some_good_jung_tests/'>(if you're interested in taking tests...)</StyledLink>, I'm certain that I am an ENTJ. In fact, I can present any xNTx state...</BodyText>
        </SubHeading>
        <SubHeading>
          My Interests: Bass guitar, anime & manga (check Anime page for more info), painting, crafting.
          <BodyText>I love building models, especially <StyledLink href='https://www.kotobukiya.co.jp/en/title/megamidevice/'>Kotobukiya Megami Device </StyledLink>series. </BodyText>
          <BodyText>
            <StyledLink href='https://www.kotobukiya.co.jp/en/product/detail/p4934054054107//'>PUNI☆MOFU MAO</StyledLink> is my favourite model.
          </BodyText>
          <img
            src="/images/mao.webp"
            alt="Mao"
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          <BodyText>As for sports, I usually don't like to excercise but I do enjoy badminton, swimming and climbing (fun fact I'm pretty good at badminton).</BodyText>
        </SubHeading>
        <SubHeading>
          More about Music: I play bass guitar in bands.
          <BodyText>I've been playing bass guitar for 5 years and I love performing rock music. Currently I'm using <StyledLink href='https://www.thomannmusic.com/marcus_miller_v7_alder_5_bur_2nd_gen.htm'>Sire Marcus Miller V7 2nd Gen 5-String Burgundy Electric Bass Guitar</StyledLink>, and it's my favourite model (love the glittering shiny pinky finish). Check Music page for more details about my music taste.</BodyText>
        </SubHeading>
        <SubHeading>
          Games I Play: I play games on Macbook, mobile devices and Nintendo Switch.
          <BodyText>
            On Switch: The Legend of Zelda: Tears of the Kingdom, The Legend of Zelda: Breath of the Wild <StyledLink href='https://zelda.fandom.com/wiki/Main_Page'>(Zelda Wiki)</StyledLink>, <StyledLink href='https://aceattorney.fandom.com/wiki/Phoenix_Wright:_Ace_Attorney_Trilogy'>Phoenix Wright: Ace Attorney Trilogy</StyledLink>, <StyledLink href='https://nookipedia.com/wiki/Main_Page'>Animal Crossing: New Horizons</StyledLink>...
          </BodyText>
          <BodyText>
            On Mac: (I know Mac is not made for gaming but I do play some games on it) <StyledLink href='https://terraria.wiki.gg/'>Terraria</StyledLink>, <StyledLink href='https://civilization.fandom.com/wiki/Civilization_VI'>Civilization VI</StyledLink>, and <StyledLink href='https://musedash.fandom.com/wiki/Muse_Dash_Wiki'>Muse Dash</StyledLink>. <br /> My Steam ID: 76561199563537751
          </BodyText>
          <BodyText>
            On iPad: <StyledLink href='https://ensemble-stars.fandom.com/wiki/The_English_Ensemble_Stars_Wiki'>Ensemble Stars!!</StyledLink>, <StyledLink href='https://arknights.wiki.gg/'>Arknights</StyledLink>.
          </BodyText>
        </SubHeading>
        <img src="/images/gifs/ryo-rambling.gif" alt="Ryo rambling"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </HeroSection>
    </Layout>
  );
};


export const Head = () => (
  <>
    <title>Yuyang Wang | Home</title>
    <link rel="icon" href="/favicon.ico" />
  </>
);

export default IndexPage;