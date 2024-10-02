import { FC } from 'react';
import { Typography } from '../typography';
import styles from './styles.module.css';

interface ResearchCardProps {
  title: string;
  text: string;
}

export const ResearchCard: FC<ResearchCardProps> = ({ title, text }) => (
  <article>
    <Typography variant="body18" bold className={styles.title}>
      {title}
    </Typography>
    <Typography>{text}</Typography>
  </article>
);
