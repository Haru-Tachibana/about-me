import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HeroSection, BigHeading, AccentText, SubHeading } from '../components/styled';

const AboutPage = () => {
  return (
    <Layout pageTitle="Projects">
      <AccentText>What I have develped...</AccentText>
    
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage
