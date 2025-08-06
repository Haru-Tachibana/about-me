import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSection, BigHeading, AccentText, SubHeading, BodyText, StyledLink } from '../components/styled';
import StyledButton from '../components/button';
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
          This is my personal website. Feel free to explore my experiences and interests (maybe some fun facts as well).
        </SubHeading>
        <BodyText>
          This personal website is built with <StyledLink href='https://www.gatsbyjs.com/'>Gatsby</StyledLink>, a fast React-based framework optimised for performance. <br />
          It's styled with styled-components and powered by React for a dynamic and modular component structure. <br />
          The site is deployed via <StyledLink href='https://www.netlify.com/'>Netlify</StyledLink>, enabling continuous deployment and global CDN delivery. You can explore the source code on <StyledLink href='https://github.com/Haru-Tachibana/about-me'>Github repository</StyledLink>.
        </BodyText>

        <SubHeading>
          A data science enthusiast, bassist, anime fan, and dog lover... here is my pup Kemi — she's a happy girl and loves to play :3
        </SubHeading>

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