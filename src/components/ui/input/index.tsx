import { forwardRef, InputHTMLAttributes, useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClick } from '@/hooks/use-outside-click';
import success from '@/assets/success.svg';
import danger from '@/assets/error.svg';
import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, value, ...props }, ref) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const input = rootRef.current?.children[1] as HTMLInputElement;
    const [focus, setFocus] = useState(false);
    useOutsideClick({ rootRef, action: () => setFocus(false) });

    const onWrapperClick = () => {
      if (input) input.focus();
    };

    return (
      <>
        <div
          ref={rootRef}
          onClick={onWrapperClick}
          className={clsx(
            styles.wrapper,
            !focus &&
              (!input || !input.value || input.value.length === 0) &&
              styles.wrapperNotFocus,
            error && styles.wrapperError
          )}
        >
          {label && (
            <label
              htmlFor={id}
              className={clsx(
                styles.label,
                !focus &&
                  (!input || !input.value || input.value.length === 0) &&
                  styles.labelNotFocus
              )}
            >
              {label}
            </label>
          )}
          <input
            onFocus={() => setFocus(true)}
            id={id}
            ref={ref}
            value={value}
            className={styles.input}
            {...props}
          />
          <div>
            {error && <img src={danger} alt="" />}
            {!error && !focus && input && input.value && <img src={success} alt="" />}
          </div>
          {error && <span className={styles.error}>{error}</span>}
        </div>
      </>
    );
  }
);
