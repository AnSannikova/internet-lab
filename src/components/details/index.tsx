import { FC, useState } from 'react';
import styles from './styles.module.css';
import { Typography } from '../typography';
import clsx from 'clsx';

interface DetailsProps {
  summary: string;
  detail: string;
}

export const Details: FC<DetailsProps> = ({ summary, detail }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={onClick} className={styles.summary}>
        {summary}
        <svg
          className={clsx(styles.svg, isOpen && styles.svgTurned)}
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 11h-4V7a1 1 0 0 0-2 0v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z"
            fill="currentColor"
          />
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      <Typography
        className={clsx(styles.text, isOpen && styles.visible, !isOpen && styles.hidden)}
        variant="body18"
      >
        {detail}
      </Typography>
    </div>
  );
};
