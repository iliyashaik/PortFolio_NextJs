"use client";

import { useEffect, useRef } from "react";
 
const CounterAnimation = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const handleIntersection = (el: HTMLSpanElement, entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        el.textContent = String(current);
      }, 30);
      observer.unobserve(el);
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          handleIntersection(el, entry, observer);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="stat-card__number">0</span>;
}

export default CounterAnimation;
