import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSection, BigHeading, AccentText, SubHeading, BodyText } from '../components/styled';
import StyledButton from '../components/button';

const IndexPage = () => {
  return (
    <Layout pageTitle="Projects">
      <HeroSection>
        <SubHeading>
          This site is still under construction...wait, I mean, under development!
        </SubHeading>
        <BodyText>Hmmmmm....I mean...what you are currently browsing is also one of my projects, innit?</BodyText>
        <img src="/images/gifs/ryo-shy.gif" alt="Ryo shy"
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
