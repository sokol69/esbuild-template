import React from 'react';

import { IProps } from './types';
import s from './styles.module.css';

const Button = ({ onClick, children }: IProps): JSX.Element => {
  return (
      <button
        className={s.button}
        onClick={onClick}
      >
        {children}
      </button>
   );
}

export default Button;