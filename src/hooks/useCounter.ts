'use client';

import { useEffect, useRef, useState } from 'react';

export function useCounter(target: number, speed = 150) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        let current = 0;
        const increment = target / speed;

        const tick = () => {
          current += increment;
          if (current < target) {
            setCount(Math.ceil(current));
            setTimeout(tick, 10);
          } else {
            setCount(target);
          }
        };
        tick();
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, speed]);

  return { count, ref };
}
