import { FC } from 'react';
import Avatar from '@/assets/avatar.svg';
import styles from './styles.module.css';
import { Typography } from '../typography';
import { Link } from 'react-router-dom';

interface ReviewCardProps {
  avatar?: string;
  name: string;
  location: string;
  text: string;
}

export const ReviewCard: FC<ReviewCardProps> = ({ avatar, name, location, text }) => (
  <Link className={styles.link} to={''}>
    <article className={styles.card}>
      <div className={styles.wrapper}>
        <img className={styles.avatar} src={avatar ?? Avatar} alt={`Аватар пользователя ${name}`} />
        <Typography variant="h6">{name}</Typography>
        <Typography className={styles.location} variant="body12">
          {location}
        </Typography>
      </div>
      <Typography variant="body14">{text}</Typography>
    </article>
  </Link>
);
