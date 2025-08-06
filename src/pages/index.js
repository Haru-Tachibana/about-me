import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSection, BigHeading, AccentText, SubHeading, BodyText } from '../components/styled';
import StyledButton from '../components/StyledButton';
import Gallery from '../components/Gallery';
import ImageCarousel from '../components/ImageCarousel';

const imagePathsKemi = [
  '/images/kemi1.jpg',
  '/images/kemi2.jpg',
  '/images/kemi3.jpg',
  '/images/kemi4.jpg',
  '/images/kemi5.jpg',
  '/images/kemi6.jpg',
];

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
        <SubHeading>
          *Click on the images below to see more funny pics~ <br />
        </SubHeading>
        <BodyText>
          left side -> previous image <br />
          right side -> next image
        </BodyText>
        <ImageCarousel images={imagePathsKemi} />

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