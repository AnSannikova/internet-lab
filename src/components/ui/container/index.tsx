import { createElement, FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.css';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  component?: 'div' | 'section';
}

export const Container: FC<ContainerProps> = ({ children, className, component = 'div' }) =>
  createElement(component, { className: clsx(styles.container, className) }, children);
