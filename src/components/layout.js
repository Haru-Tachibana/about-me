import * as React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from './GlobalStyle';
import NavBar from './NavBar';
import { container, heading } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <GlobalStyle />   {/* inject global styles */}

      <NavBar />

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
