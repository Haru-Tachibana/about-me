import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSection, BigHeading, AccentText, SubHeading, BodyText } from '../components/styled';
import StyledButton from '../components/StyledButton'; // if you want to add a button

const IndexPage = () => {
  return (
    <Layout pageTitle="About">
      <HeroSection>
        <SubHeading>
          Name： Yuyang Wang (Paloma if you want :3 but I prefer Yang)
          <BodyText>*I use Haru Tachibana (橘 羽流) as well, if you have checked my GitHub profile you'll be familiar with this name. I use Haru as my online name.</BodyText>
        </SubHeading>
        <SubHeading>
          My Origin:  I am a bisexual female bron and raised in Hangzhou, China.
          <BodyText>My hometwon is the capital of Zhejiang Province located in southeast China. It's a famous tourist destination and known for technological innovation. It's the hosts the headquarters of Alibaba Group, Ant Group, DeepSeek, Geely, and NetEase. </BodyText>
          <BodyText>I speak 3 languages, Madarin Chinese, English and Japanese.</BodyText>
        </SubHeading>
        <SubHeading>
          MBTI Type：ENTJ-A (Assertive Commanders)
          <BodyText>Although I seem more like an INTP or an INTJ (especially when I'm alone or concentrating), based on the Jungian Eight-Part Test, I'm certain that I am an ENTJ. In fact, I can present any xNTx state...</BodyText>
        </SubHeading>
        <SubHeading>
          My Interests: Bass guitar, anime & manga, painting, crafting.
          <BodyText>I love building models, especially Kotobukiya Megami Device series. </BodyText>
          <BodyText>As for sports, I usually don't like to excercise but I do enjoy badminton, swimming and climbing (fun fact I'm pretty good at badminton).</BodyText>
        </SubHeading>
        <SubHeading>
          More about Music: I play bass guitar in bands.
          <BodyText>I've been playing bass guitar for 5 years and I love performing rock music. Currently I'm using Sire Marcus Miller V7 2nd Gen 5-String Burgundy Electric Bass Guitar, and it's my favourite model (love the glittering shiny pinky finish). </BodyText>
        </SubHeading>
        <SubHeading>
          Games I Play: I play games on Macbook, mobile devices and Nintendo Switch.
          <BodyText>
            On Switch: The Legend of Zelda: Tears of the Kingdom, The Legend of Zelda: Breath of the Wild, Phoenix Wright: Ace Attorney Trilogy, Animal Crossing: New Horizons...
          </BodyText>
          <BodyText>
            On Mac: (I know Mac is not made for gaming but I do play some games on it) Terraria, Civilization VI, and Muse Dash.
          </BodyText>
          <BodyText>
            On iPad: Ensemble Stars!, Arknights.
          </BodyText>
        </SubHeading>
        <img src="/images/gifs/ryo-shy.gif" alt="Ryo shy"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        {/* Optional: add a button */}
        {/* <StyledButton>See My Projects</StyledButton> */}
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