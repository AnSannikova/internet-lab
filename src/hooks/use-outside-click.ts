import { RefObject, useEffect } from 'react';

interface UseOutsideClickProps {
  rootRef: RefObject<HTMLDivElement>;
  action: () => void;
}

export const useOutsideClick = ({ rootRef, action }: UseOutsideClickProps) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        action();
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [rootRef, action]);

  useEffect(() => {
    const onEscClick = (event: KeyboardEvent) => {
      if (event.code == 'Escape') action();
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [action]);
};
