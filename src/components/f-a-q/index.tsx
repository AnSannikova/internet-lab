import { FC } from 'react';
import { Container } from '../container';
import { Typography } from '../typography';
import styles from './styles.module.css';

export const FaQ: FC = () => (
  <Container component="section">
    <Typography variant="h2" className={styles.title}>
      Вопросы и ответы
    </Typography>
    <details>
      <summary className={styles.summary}>
        <Typography variant="body18" bold>
          Легенда
        </Typography>
        <button></button>
      </summary>
      <Typography className={styles.text} variant="body18">
        Раскрывающийся текст
      </Typography>
    </details>
  </Container>
);
