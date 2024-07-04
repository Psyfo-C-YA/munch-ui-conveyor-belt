import { useEffect, useRef } from 'react';

// Custom hook to handle intervals
export const useInterval = (callback: () => void, delay: number, onComplete?: () => void) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      const tick = () => {
        savedCallback.current();
        if (onComplete) onComplete();
      };
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, onComplete]);
};
