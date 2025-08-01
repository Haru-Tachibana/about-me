import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HeroSection, BigHeading, AccentText, SubHeading } from '../components/styled';

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <HeroSection>
        <AccentText>Welcome!</AccentText>
        <BigHeading>Hi. I'm Yuyang Wang.</BigHeading>
        <SubHeading>Currently doing MSc Software Engineering at NTU.</SubHeading>
        <SubHeading>A data science enthusiast, bassist, anime fan, and dog lover...here is my pup Kemi, she's a happy girl and loves to play :3</SubHeading>
        <figure>
          <StaticImage
            src="../images/kemi1.jpg"
          />
        </figure>

      </HeroSection>
    </Layout >
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage