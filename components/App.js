import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import Landing from './Landing';
import AuthContext from '../context/authContext';

function MyApp({ Component, pageProps }) {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return (
      <Layout>
        <Component {...pageProps} isAuth={isAuth} />
      </Layout>
    );
  }

  return <Landing {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
