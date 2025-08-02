// src/components/Layout.js
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyle from './GlobalStyle';
import NavBar from './NavBar';
import SocialSidebar from './SocialSidebar';

const Container = styled.div`
  max-width: min(90%, 1200px);
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Heading = styled.h1`
  text-align: right;
  color: var(--dark-olive);   /* updated to new palette */
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.9rem;
  color: var(--coffee);       /* updated to new palette */
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
    </Container>
  );
};

export default Layout;
