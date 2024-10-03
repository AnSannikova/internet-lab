import { FC } from 'react';
import { Container, Typography } from '../ui';
import image from '@/assets/smartphone.webp';
import styles from './styles.module.css';

export const ThirdBlock: FC = () => (
  <Container id="third-block" component="section" className={styles.section}>
    <div>
      <Typography variant="h3" className={styles.title}>
        Круто, ты дошел до третьего блока
      </Typography>
      <div className={styles.wrapper}>
        <Typography variant="body16">
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные
          расходы свыше 15 000 ₽.
        </Typography>
        <Typography variant="body16">
          Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на
          процентах и штрафах.
        </Typography>
      </div>
    </div>
    <div>
      <img
        className={styles.image}
        src={image}
        alt="Мультяшный человек опирается на смартфон белого цвета, в котором открыто приложение учета финансов. На заднем фоне размытый грузовик"
      />
    </div>
  </Container>
);
