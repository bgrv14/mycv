import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua',
    resources: {
      ua: {
        translation: require('./locales/ua/translation.json')
      },
      en: {
        translation: require('./locales/en/translation.json')
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 