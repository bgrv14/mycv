import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          i18n.language === 'ua'
            ? 'bg-[#979DAC] text-[#001845]'
            : 'bg-[#001845]/55 text-[#979DAC] hover:bg-[#979DAC] hover:text-[#001845]'
        }`}
        onClick={() => changeLanguage('ua')}
      >
        UA
      </button>
      <button
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          i18n.language === 'en'
            ? 'bg-[#979DAC] text-[#001845]'
            : 'bg-[#001845]/55 text-[#979DAC] hover:bg-[#979DAC] hover:text-[#001845]'
        }`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher; 