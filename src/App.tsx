import React from 'react';

import Button from 'components/Button/Button';
import Logo from 'assets/images/esbuild-logo.png';

import './style.css';

const App = () => {
  const handleClick = () => {
    throw new Error();
  };

  const tes = { a: 1 };

  return (
    <>
      <div>Hello ESBuild</div>
      <Button onClick={handleClick}>Generate Error</Button>
      <img src={Logo} alt="Logo" />
    </>
  );
};

export default App;
