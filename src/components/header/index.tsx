import { FC } from 'react';
import styles from './styles.module.css';
import { Logo } from '../logo';
import { MenuList } from '../menu-list';
import { Banner } from '../banner';
import { Container } from '../container';

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
