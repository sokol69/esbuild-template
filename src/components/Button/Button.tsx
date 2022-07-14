import React from 'react';

import { IProps } from './types';

const Button = ({ onClick, children }: IProps): JSX.Element => {
  return (
      <button onClick={onClick}>{children}</button>
   );
}

export default Button;