import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en/translation.json';
import sv from '../locales/sv/translation.json';
import de from '../locales/de/translation.json';
const resources = {
  en: { translation: en },
  sv: { translation: sv },
  de: { translation: de },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      supportedLngs: ['en', 'sv', 'de'],
      load: 'languageOnly',
      cleanCode: true,
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
        lookupLocalStorage: 'i18nextLng',
        lookupCookie: 'i18next',
      },
    });
}

export default i18n;
