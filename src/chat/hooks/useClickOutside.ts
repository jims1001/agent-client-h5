import { useEffect, useRef } from 'react';

export default function useClickOutside<T extends HTMLElement = never>(
  handler: (event: never) => void,
  eventName: string = 'click',
) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const ref = useRef<T>();

  useEffect(() => {
    const listener = (e: never) => {
      const targetElement = ref.current;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (!targetElement || targetElement.contains(e.target)) {
        return;
      }
      if (handler) {
        handler(e);
      }
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    document.addEventListener(eventName, listener);

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      document.removeEventListener(eventName, listener);
    };
  }, [eventName, handler]);

  return ref;
}
