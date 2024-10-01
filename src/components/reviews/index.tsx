import { FC } from 'react';
import { Container } from '../container';
import { Typography } from '../typography';
import { Carousel } from '../carousel';
import { reviewsData } from './constants';
import styles from './styles.module.css';
import { ReviewCard } from '../review-card';

export const Reviews: FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Typography variant="h2" className={styles.title}>
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
