import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../NavigationBar';
import Footer from '../Footer';

const Layout = ({ children }) => {
  console.log('navbar paqueta');

  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
