import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <input ref={ref} className={styles.input} id={id} type="checkbox" {...props} />
        <label className={styles.label} htmlFor={id}>
          <div className={styles.checkbox}></div>
          {label}
        </label>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);
