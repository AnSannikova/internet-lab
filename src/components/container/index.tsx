import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.css';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={clsx(styles.container, className)}>{children}</div>
);
