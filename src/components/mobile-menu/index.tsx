import { FC, MouseEventHandler } from 'react';
import { MobileMenuList } from '../ui';
import clsx from 'clsx';
import { menuItems } from '../header/constants';
import styles from './styles.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onButtonClick }) => (
  <div className={styles.wrapper}>
    <button onClick={onButtonClick} className={styles.button}>
      {isOpen ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#191C1F" d="M.516 16.07 16.072.515l1.414 1.415L1.93 17.485z" />
          <path fill="#191C1F" d="m1.93.515 15.556 15.557-1.414 1.414L.516 1.929z" />
        </svg>
      ) : (
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#fff" d="M0 0h22v2H0zM0 10h22v2H0z" />
        </svg>
      )}
    </button>
    <div className={clsx(styles.menuWrapper, isOpen && styles.visible, !isOpen && styles.hidden)}>
      <MobileMenuList items={menuItems} />
    </div>
  </div>
);
