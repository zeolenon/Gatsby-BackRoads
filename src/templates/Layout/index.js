import React from 'react';
import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
