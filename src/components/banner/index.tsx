import { FC } from 'react';
import { Typography, Button } from '../ui';
import styles from './styles.module.css';

export const Banner: FC = () => (
  <div className={styles.wrapper}>
    <Typography variant="h1" className={styles.title}>
      Говорят, никогда не поздно сменить профессию
    </Typography>
    <Typography variant="body18" className={styles.text}>
      Сделай круто тестовое задание и у тебя получится
    </Typography>
    <Button color="secondary">Проще простого!</Button>
  </div>
);
