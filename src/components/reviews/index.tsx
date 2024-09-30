import { FC } from 'react';
import { Container } from '../container';
import { Typography } from '../typography';
import styles from './styles.module.css';
import { Carousel } from '../carousel';

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Reviews: FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Typography variant="h2" className={styles.title}>
          Отзывы
        </Typography>
        <Carousel slides={SLIDES} />
      </Container>
    </section>
  );
};
