import { ComponentPropsWithRef, FC } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface PropType extends ComponentPropsWithRef<'button'> {
  selected: boolean;
}

export const DotButton: FC<PropType> = ({ children, selected, ...restProps }) => (
  <button type="button" className={clsx(styles.dot, selected && styles.dotSelected)} {...restProps}>
    {children}
  </button>
);
