// src/components/Layout.js
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyle from './GlobalStyle';
import NavBar from './NavBar';
import SocialSidebar from './SocialSidebar';
import BackToTop from './Back';

const Container = styled.div`
  max-width: min(95%);  
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Heading = styled.h1`
  text-align: left;
  color: var(--dark-olive);   
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.9rem;
  color: var(--coffee);      
  margin-top: 2rem;
`;

const Layout = ({ pageTitle, children }) => {
  const updatedDate = new Date().toLocaleDateString('en-UK', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Container>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <GlobalStyle />
      <NavBar />
      <SocialSidebar />
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
        <Footer>© Yuyang Wang &middot; Updated {updatedDate}</Footer>
      </main>
      <BackToTop />
    </Container>
  );
};

export default Layout;