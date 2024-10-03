import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Banner } from '../banner';
import { Container, Logo, MenuList } from '../ui';
import { MobileMenu } from '../mobile-menu';
import clsx from 'clsx';
import { menuItems } from './constants';
import styles from './styles.module.css';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const onButtonClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={clsx(styles.header, isOpen && styles.menuIsOpen)}>
          <Logo />
          <MenuList items={menuItems} />
          <MobileMenu isOpen={isOpen} onButtonClick={onButtonClick} />
        </header>
        <Banner />
      </Container>
    </section>
  );
};
