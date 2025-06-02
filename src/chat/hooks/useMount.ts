import React, { useState, useEffect, useRef } from 'react';
import { reflow } from '../utils';

interface UseMountOptions {
  active?: boolean;
  ref: React.RefObject<never>;
  delay?: number;
}

function useMount({ active = false, ref, delay = 300 }: UseMountOptions) {
  const [isShow, setIsShow] = useState(false);
  const [didMount, setDidMount] = useState(false);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const clear = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  useEffect(() => {
    if (active) {
      clear();
      setDidMount(active);
    } else {
      setIsShow(active);
      timeout.current = setTimeout(() => {
        setDidMount(active);
      }, delay);
    }

    return clear;
  }, [active, delay]);

  useEffect(() => {
    if (ref.current) {
      reflow(ref.current);
    }
    setIsShow(didMount);
  }, [didMount, ref]);

  return {
    didMount,
    isShow,
  };
}

export default useMount;
