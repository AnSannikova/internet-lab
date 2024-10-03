import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({ children, color = 'primary', ...props }) => (
  <button
    className={clsx(styles.button, color === 'secondary' ? styles.secondary : styles.primary)}
    {...props}
  >
    {children}
  </button>
);
