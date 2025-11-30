import { useLanguage } from "./useLanguage";
import translations from "../data/data.json";
import LANGUAGES from "../constants/language";

export function useTranslation(section) {
  const language = useLanguage();

  return translations[language]?.[section] || translations[LANGUAGES.PT_BR]?.[section];
}
