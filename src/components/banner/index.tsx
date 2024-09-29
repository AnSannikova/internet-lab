import { FC } from 'react';
import styles from './styles.module.css';
import { Button } from '../button';
import { Typography } from '../typography';

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
