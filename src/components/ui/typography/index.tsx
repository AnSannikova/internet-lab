import { createElement, FC, ReactNode } from 'react';
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
  align?: 'center' | 'left' | 'right';
  children?: ReactNode;
  className?: string;
}

export const Typography: FC<TypographyProps> = ({
  variant = 'body16',
  children,
  bold,
  align,
  className,
}) => {
  return createElement(
    tagType[variant],
    { className: clsx(styles[variant], bold && styles.bold, align && styles[align], className) },
    children
  );
};
