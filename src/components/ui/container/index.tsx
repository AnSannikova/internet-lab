import { createElement, FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.css';

interface ContainerProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  component?: 'div' | 'section';
}

export const Container: FC<ContainerProps> = ({ id, children, className, component = 'div' }) =>
  createElement(component, { className: clsx(styles.container, className), id }, children);
