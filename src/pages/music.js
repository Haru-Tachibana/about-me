import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HeroSection, BigHeading, AccentText, SubHeading } from '../components/styled';

const AboutPage = () => {
  return (
    <Layout pageTitle="Music">
      <AccentText>What I love to listen...</AccentText>
        <BigHeading>Music</BigHeading>
        <SubHeading>My favorite tracks and artists</SubHeading>
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage
