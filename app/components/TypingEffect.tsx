"use client";

import { useEffect, useState } from "react";

export default function TypingEffect() {
  const phrases = [
    "scalable web apps.",
    "AI-driven solutions.",
    "cloud-native systems.",
    "beautiful interfaces.",
    "REST APIs.",
    "full-stack magic.",
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      setTimeout(() => setIsDeleting(true), delay);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      delay = 400;
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return <span className="hero__title-typed">{text}</span>;
}
