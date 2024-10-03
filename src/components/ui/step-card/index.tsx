import { FC } from 'react';
import styles from './styles.module.css';
import { Typography } from '../typography';

interface StepCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
}

export const StepCard: FC<StepCardProps> = ({ imgSrc, imgAlt, title, text }) => (
  <article className={styles.card}>
    <img className={styles.image} src={imgSrc} alt={imgAlt} />
    <Typography variant="h6">{title}</Typography>
    <Typography variant="body14" className={styles.text}>
      {text}
    </Typography>
  </article>
);
