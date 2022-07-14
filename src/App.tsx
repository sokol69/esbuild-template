import React from 'react';

import './style.css'
import Logo from '../assets/images/esbuild-logo.png'

const App = () => {
  const handleClick = () => {
    throw new Error();
  }

  return (
    <>
      <div>Hello ESBuild</div>
      <button onClick={handleClick}>Error!</button>
      <img src={Logo} alt="Logo" />
    </>
   );
}

export default App;