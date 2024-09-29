import { createElement, ReactNode } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

const tagType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body18: 'p',
  body16: 'p',
  body14: 'p',
  body12: 'p',
  caption: 'span',
};

interface TypographyProps {
  variant?: keyof typeof tagType;
  bold?: boolean;
  children?: ReactNode;
  className?: string;
}

export function Typography({ variant = 'body16', children, bold, className }: TypographyProps) {
  return createElement(
    tagType[variant],
    { className: clsx(styles[variant], bold && styles.bold, className) },
    children
  );
}
