import React, { useState, useContext } from 'react';
import AuthContext from '../../context/authContext';
import CredentialsBox from '../CredentialsBox';

const Landing = () => {
  const [isRegisterView, setRegisterView] = useState(true);
  // const auth = useContext(AuthContext);

  function handleSubmit(email, password) {
    console.log(email, password);
  }

  function handleClick() {
    setRegisterView(!isRegisterView);
    // auth.setIsAuth(true);
  }

  return (
    <div className="register-general-container">
      <div className="register-left-container" />
      <div className="register-right-container">
        <CredentialsBox onSubmit={handleSubmit} isRegisterView={isRegisterView} />
        <p>{isRegisterView ? 'Already registered?' : 'Not yet registered?'}</p>
        <button type="button" onClick={handleClick}>
          {isRegisterView ? 'Click here to log in' : 'Click here to register'}
        </button>
      </div>
    </div>
  );
};

export default Landing;
