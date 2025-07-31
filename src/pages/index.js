import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HeroSection, BigHeading, AccentText, SubHeading } from '../components/styled';

const IndexPage = () => {
  return (
    <Layout pageTitle="About Me">
      <HeroSection>
        <AccentText>Welcome to My Page</AccentText>
        <BigHeading>Hi. I'm Yuyang Wang.</BigHeading>
        <SubHeading>Currently doing MSc Software Engineering at NTU.</SubHeading>
        <SubHeading>A data science enthusiast, bassist, anime fan, and dog lover...here is my pup Kemi, she's a happy girl and loves to play :3</SubHeading>
        <figure>
          <StaticImage
            src="../images/kemi1.jpg"
          />
        </figure>

        <div style={{ marginTop: '20px', fontSize: '2rem', display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a href="https://github.com/Haru-Tachibana" className="iconLink" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yuyang-wang-b76859290/" className="iconLink" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/paloma_yang_w/" className="iconLink" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </HeroSection>
    </Layout >
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage