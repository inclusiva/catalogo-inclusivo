import { useState, useEffect } from "react";
import { restoreLanguage } from "../utils/language";

export function useLanguage(){
  const [selectedLanguage, setSelecetedLanguage] = useState(restoreLanguage());

  useEffect(() => {
    const handleLanguageChange = () => setSelecetedLanguage(restoreLanguage());

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  return selectedLanguage;
}
