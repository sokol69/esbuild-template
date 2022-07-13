import React from 'react';

import './style.css'

const App = () => {
  const handleClick = () => {
    throw new Error();
  }

  return (
    <>
      <div>Hello ESBuild!</div>
      <button onClick={handleClick}>Error!</button>
    </>
   );
}

export default App;