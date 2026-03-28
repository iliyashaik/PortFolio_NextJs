'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const languageOptions = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

const LanguageSwitcher = ({ compact }: { compact?: boolean }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLanguagePick = async (locale: string) => {
    if (locale === i18n.language) {
      setOpen(false);
      return;
    }
    await i18n.changeLanguage(locale);
    setOpen(false);
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const current = languageOptions.find((option) => option.code === i18n.language) || languageOptions[0];

  return (
    <div className={`language-dropdown-wrapper ${compact ? 'language-dropdown--compact' : ''}`} ref={containerRef}>
      <button
        className="language-dropdown-button"
        onClick={() => setOpen((state) => !state)}
        aria-label="Open language selector"
        type="button"
      >
        {compact ? (
          <span className="language-code">{current.code.toUpperCase()}</span>
        ) : (
          <>
            {current.flag} {current.label}
            <span className="language-dropdown-icon">▾</span>
          </>
        )}
      </button>
      {open && (
        <ul className="language-dropdown-menu">
          {languageOptions.map((option) => (
            <li
              key={option.code}
              className={`language-dropdown-item ${option.code === current.code ? 'active' : ''}`}
              onClick={() => handleLanguagePick(option.code)}
            >
              {compact ? option.code.toUpperCase() : `${option.flag} ${option.label}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;