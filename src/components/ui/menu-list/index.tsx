import { FC } from 'react';
import { menuItems } from './constants';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const MenuList: FC = () => (
  <nav>
    <ul className={styles.list}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link className={styles.link} to={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
