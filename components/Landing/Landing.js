import React, { useState, useContext } from 'react';
import AuthContext from '../../context/authContext';
import CredentialsBox from '../CredentialsBox';

const Landing = () => {
  const [isRegisterView, setRegisterView] = useState(true);
  const auth = useContext(AuthContext);

  function handleSubmit(email, password) {
    auth.setIsAuth(true);
  }

  function handleClick() {
    setRegisterView(!isRegisterView);
  }

  return (
    <div className="register-general-container">
      <div className="register-left-container" />
      <div className="register-right-container">
        <div className="register-right-logo" />
        <CredentialsBox
          onSubmit={handleSubmit}
          isRegisterView={isRegisterView}
        />
        <br />
        <p>
          {isRegisterView ? 'Already registered? Click ' : 'Not yet registered? Click '}
          <button
            className="register-login-redirect-button"
            type="button"
            onClick={handleClick}
          >
            here
          </button>
          {isRegisterView ? ' to log in.' : ' to register.'}
        </p>
      </div>
    </div>
  );
};

export default Landing;
