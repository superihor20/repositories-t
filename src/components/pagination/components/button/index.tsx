import { PropsWithChildren } from 'react';

import classes from './button.module.scss';

type ButtonProps = {
  onClick: () => void;
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
};
