import { FC } from 'react';
import styles from './styles.module.css';
import { Button } from '../button';

export const Banner: FC = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Говорят, никогда не поздно сменить профессию</h1>
    <p className={styles.text}>Сделай круто тестовое задание и у тебя получится</p>
    <Button color="secondary">Проще простого!</Button>
  </div>
);
