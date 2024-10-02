import { FC } from 'react';
import { Banner } from '../banner';
import { Container, Logo, MenuList } from '../ui';
import styles from './styles.module.css';

export const Header: FC = () => (
  <section className={styles.section}>
    <Container className={styles.container}>
      <header className={styles.header}>
        <Logo />
        <MenuList />
      </header>
      <Banner />
    </Container>
  </section>
);
