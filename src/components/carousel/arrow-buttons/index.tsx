import { ComponentPropsWithRef, FC } from 'react';
import styles from './styles.module.css';

type PropType = ComponentPropsWithRef<'button'>;

export const PrevButton: FC<PropType> = ({ children, ...restProps }) => (
  <button className={styles.button} type="button" {...restProps}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M23.839 2.276A1.333 1.333 0 0 0 21.953.391L11.057 11.287a6.667 6.667 0 0 0 0 9.426L21.953 31.61a1.333 1.333 0 0 0 1.886-1.885L12.943 18.828a4 4 0 0 1 0-5.656L23.839 2.276Z"
      />
    </svg>
    {children}
  </button>
);

export const NextButton: FC<PropType> = ({ children, ...restProps }) => (
  <button className={styles.button} type="button" {...restProps}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)">
        <path
          d="M8.391 29.724a1.333 1.333 0 1 0 1.886 1.885l10.896-10.896a6.673 6.673 0 0 0 0-9.426L10.277.39A1.333 1.333 0 0 0 8.39 2.276l10.896 10.896a4 4 0 0 1 0 5.656L8.391 29.724Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
    {children}
  </button>
);
