import { FC } from 'react';
import { Container, ResearchCard } from '../ui';

import styles from './styles.module.css';
import { researchData } from './constants';

export const Research: FC = () => (
  <section className={styles.section}>
    <Container className={styles.container}>
      {researchData.map((item, index) => (
        <ResearchCard key={index} {...item} />
      ))}
    </Container>
  </section>
);
