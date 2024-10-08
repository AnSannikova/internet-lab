import { FC } from 'react';
import styles from './styles.module.css';

type TMenuLink = {
  name: string;
  href: string;
};

interface MenuListProps {
  items: TMenuLink[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => (
  <nav>
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index}>
          <a className={styles.link} href={item.href}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export const MobileMenuList: FC<MenuListProps> = ({ items }) => (
  <nav className={styles.mobileMenu}>
    <ul className={styles.mobileList}>
      {items.map((item, index) => (
        <li className={styles.mobileItem} key={index}>
          <a className={styles.mobileLink} href={item.href}>
            {item.name}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.4 17.293a1 1 0 0 0 1.415 1.414l4.585-4.586a3 3 0 0 0 0-4.242l-4.589-4.586a1 1 0 0 0-1.41 1.414l4.585 4.586a1 1 0 0 1 0 1.414L9.4 17.293Z"
                fill="#83898F"
              />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
