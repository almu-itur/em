import React, { useState, useContext } from 'react';
import AuthContext from '../../context/authContext';
import CredentialsBox from '../CredentialsBox';
import { LANDING_STYLE, BUTTON_STYLE, TEXT } from '../../constants';

const Landing = () => {
  const [isRegisterView, setRegisterView] = useState(true);
  const auth = useContext(AuthContext);

  function handleSubmit(email, password) {
    auth.setIsAuth(true);
  }

  function handleClick() {
    setRegisterView(!isRegisterView);
  }

  const {
    CONTAINER, LEFT_CONTAINER, RIGHT_CONTAINER, RIGHT_CONTAINER_LOGO,
  } = LANDING_STYLE;
  const {
    ALREADY_REGISTERED, NOT_REGISTERED, TO_LOG_IN, TO_REGISTER, HERE,
  } = TEXT;

  const { REDIRECT: { TYPE, CLASS } } = BUTTON_STYLE;

  return (
    <div className={CONTAINER}>
      <div className={LEFT_CONTAINER} />
      <div className={RIGHT_CONTAINER}>
        <div className={RIGHT_CONTAINER_LOGO} />
        <CredentialsBox
          onSubmit={handleSubmit}
          isRegisterView={isRegisterView}
        />
        <br />
        <p>
          {isRegisterView ? ALREADY_REGISTERED : NOT_REGISTERED}
          <button className={CLASS} type={TYPE} onClick={handleClick}>
            {HERE}
          </button>
          {isRegisterView ? TO_LOG_IN : TO_REGISTER}
        </p>
      </div>
    </div>
  );
};

export default Landing;
