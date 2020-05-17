import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GlobalStyle from '../../styles/global';

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <GlobalStyle />
    </main>
  );
};

export default Layout;
