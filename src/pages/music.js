import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSection, BigHeading, AccentText, SubHeading, BodyText } from '../components/styled';
import StyledButton from '../components/StyledButton'; 

const IndexPage = () => {
  return (
    <Layout pageTitle="Music">
      <HeroSection>
        <SubHeading>
          
        </SubHeading>
        <BodyText>

        </BodyText>

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
