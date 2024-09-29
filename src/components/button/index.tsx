import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.css';

interface ButtonProps {
  children?: ReactNode;
  color?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({ children, color = 'primary' }) => (
  <button
    className={clsx(styles.button, color === 'secondary' ? styles.secondary : styles.primary)}
  >
    {children}
  </button>
);
