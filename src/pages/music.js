import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSection, BigHeading, AccentText, SubHeading, BodyText } from '../components/styled';
import StyledButton from '../components/StyledButton'; // if you want to add a button

const IndexPage = () => {
  return (
    <Layout pageTitle="Music">
      <HeroSection>
        <SubHeading>
          
        </SubHeading>
        <BodyText>

        </BodyText>
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
