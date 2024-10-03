import { FC } from 'react';
import { faqData } from './constants';
import { Container, Typography, Details } from '../ui';
import styles from './styles.module.css';

export const FaQ: FC = () => (
  <Container id="faq" component="section">
    <Typography variant="h2" align="center" className={styles.title}>
      Вопросы и ответы
    </Typography>
    {faqData.map((item, index) => (
      <Details key={index} summary={item.title} detail={item.text} />
    ))}
  </Container>
);
