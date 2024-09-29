import { FC } from 'react';
import { menuItems } from './constants';
import styles from './styles.module.css';

export const MenuList: FC = () => (
  <nav>
    <ul className={styles.list}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <a className={styles.link} href={item.href}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
