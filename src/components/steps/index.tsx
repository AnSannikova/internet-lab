import { FC } from 'react';
import { Container, Typography } from '../ui';
import waiting from '@/assets/waiting.svg';
import deliveryTrack from '@/assets/delivery-track.svg';
import secure from '@/assets/secure.svg';
import moneyBags from '@/assets/money-bags.svg';
import styles from './styles.module.css';

export const Steps: FC = () => (
  <Container component="section">
    <Typography variant="h2" className={styles.title}>
      Как это работает
    </Typography>
    <div className={styles.wrapper}>
      <article className={styles.card}>
        <img className={styles.image} src={waiting} alt="Стрелочка и синие часы" />
        <Typography variant="h6">Прочитай задание внимательно</Typography>
        <Typography variant="body14" className={styles.text}>
          Думаю у тебя не займет это больше двух-трех минут
        </Typography>
      </article>
      <article className={styles.card}>
        <img
          className={styles.image}
          src={deliveryTrack}
          alt="Фургон с кабиной синего цвета и синяя галочка над ним"
        />
        <Typography variant="h6">Изучи весь макет заранее</Typography>
        <Typography variant="body14" className={styles.text}>
          Подумай как это будет работать на разных разрешениях и при скролле
        </Typography>
      </article>
      <article className={styles.card}>
        <img
          className={styles.image}
          src={secure}
          alt="Телефон со стрелочным графиком, а над ним маленький синий щит"
        />
        <Typography variant="h6">Сделай хорошо</Typography>
        <Typography variant="body14" className={styles.text}>
          Чтобы мы могли тебе доверить подобные задачи в будущем
        </Typography>
      </article>
      <article className={styles.card}>
        <img
          className={styles.image}
          src={moneyBags}
          alt="Три мешочка, два серых на заднем фоне, один синий на переднем"
        />
        <Typography variant="h6">Получи предложение</Typography>
        <Typography variant="body14" className={styles.text}>
          Ну тут все просто, не я придумал правила, но думаю так и будет)))
        </Typography>
      </article>
    </div>
  </Container>
);
