import { FC } from 'react';
import { Container, StepCard, Typography } from '../ui';

import styles from './styles.module.css';
import { stepsData } from './constants';

export const Steps: FC = () => (
  <Container id="steps" component="section">
    <Typography variant="h2" align="center" className={styles.title}>
      Как это работает
    </Typography>
    <div className={styles.wrapper}>
      {stepsData.map((item, index) => (
        <StepCard key={index} {...item} />
      ))}
    </div>
  </Container>
);
