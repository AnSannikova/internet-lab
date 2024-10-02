import { FC } from 'react';
import logo from '@/assets/logo.svg';
import styles from './styles.module.css';

export const Logo: FC = () => (
  <div>
    <img className={styles.logo} src={logo} alt="Логотип компании InternetLab" />
  </div>
);
