import React, { useContext } from 'react';
import AuthContext from '../../context/authContext';

const Landing = () => {
  const auth = useContext(AuthContext);

  function handleClick() {
    auth.setIsAuth(true);
  }

  return (
    <div>
      <button onClick={handleClick}>click login</button>
    </div>
  );
};

export default Landing;
