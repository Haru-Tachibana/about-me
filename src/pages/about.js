import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSection, BigHeading, AccentText, SubHeading, BodyText } from '../components/styled';
import StyledButton from '../components/StyledButton'; // if you want to add a button

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <HeroSection>
        <SubHeading>
          This site is still under construction...wait, I mean, under development!
        </SubHeading>
        <BodyText>Hmmmmm....I mean...what you are currently browsing is also one of my projects, innit?</BodyText>
        <img
          src="https://tenor.com/zh-CN/view/bocchi-the-rock-anime-anime-girl-hitori-gotou-laughing-gif-27031913"
          alt="Bocchi The Rock Anime GIF"
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
