import { FC } from 'react';
import { Container } from '../container';
import { Typography } from '../typography';
import styles from './styles.module.css';
import { faqData } from './constants';
import { Details } from '../details';

export const FaQ: FC = () => (
  <Container component="section">
    <Typography variant="h2" className={styles.title}>
      Вопросы и ответы
    </Typography>
    {faqData.map((item) => (
      <Details summary={item.title} detail={item.text} />
    ))}
  </Container>
);
