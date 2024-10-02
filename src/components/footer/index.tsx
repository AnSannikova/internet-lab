import { FC } from 'react';
import styles from './styles.module.css';
import { Typography } from '../ui';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <Typography variant="body18" align="center">
      © 2024 Лаборатория интернет
    </Typography>
  </footer>
);
