import { PropsWithChildren } from 'react';

import classes from './button.module.scss';

type ButtonProps = {
  onClick: () => void;
  isActive?: boolean;
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  isActive,
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`${classes.button} ${isActive ? classes.active : ''}`}>
      {children}
    </button>
  );
};
