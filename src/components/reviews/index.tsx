import { FC } from 'react';
import { Container, Typography, Carousel, ReviewCard } from '../ui';
import { reviewsData } from './constants';
import styles from './styles.module.css';

export const Reviews: FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Typography variant="h2" align="center" className={styles.title}>
          Отзывы
        </Typography>
        <Carousel
          slides={reviewsData.map((item) => (
            <ReviewCard {...item} />
          ))}
        />
      </Container>
    </section>
  );
};
