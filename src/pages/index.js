import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSection, BigHeading, AccentText, SubHeading, BodyText } from '../components/styled';
import StyledButton from '../components/StyledButton'; // if you want to add a button

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <HeroSection>
        <AccentText>Welcome!</AccentText>
        <BigHeading>Hi. I'm Yuyang Wang.</BigHeading>
        <SubHeading>Currently doing MSc Software Engineering at NTU.</SubHeading>
        <SubHeading>
          A data science enthusiast, bassist, anime fan, and dog lover... here is my pup Kemi — she's a happy girl and loves to play :3
        </SubHeading>
        <BodyText>
          This is my personal website. Feel free to explore my experiences and interests (maybe some fun facts as well).
        </BodyText>
        <figure style={{ maxWidth: '400px', margin: '1rem auto' }}>
          <StaticImage 
            src="../images/kemi1.jpg" 
            alt="Photo of Kemi, my dog" 
            style={{ borderRadius: '8px' }}
          />
        </figure>
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
