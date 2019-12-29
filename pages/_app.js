import React, { useState } from 'react';
import PropTypes from 'prop-types';
import App from '../components/App';
import { AuthProvider } from '../context/authContext';

function MyApp({ Component, pageProps }) {
  const [isAuth, setIsAuth] = useState(false);

  const user = { isAuth, setIsAuth };

  return (
    <AuthProvider value={user}>
      <App {...pageProps} Component={Component} />
    </AuthProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
