import * as React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from './GlobalStyle';
import NavBar from './NavBar';
import { Footer } from './styled';  // ✅ import Footer
import SocialSidebar from './SocialSidebar';  // ✅ import Sidebar
import * as styles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  const updatedDate = new Date().toLocaleDateString('en-UK', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });


  return (
    <div className={styles.container}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <GlobalStyle />
      <NavBar />

      {/* Add the social sidebar here, outside main */}
      <SocialSidebar />

      <main>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
        <Footer>
          © Yuyang Wang &middot; Updated {updatedDate}
        </Footer>
      </main>
    </div>
  );
};

export default Layout;
