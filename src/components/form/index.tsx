import { FC } from 'react';
import { Container, Typography } from '../ui';
import styles from './styles.module.css';

export const Form: FC = () => {
  return (
    <Container component="section">
      <Typography variant="h2" align="center" className={styles.title}>
        Отправь форму
      </Typography>
    </Container>
  );
};
