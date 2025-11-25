import { LANGUAGES } from "../constants/language.js";

function saveLanguage(lang) {
    localStorage.setItem("languages", lang);
    window.dispatchEvent(new Event("languageChange"));
}

function restoreLanguage() {
    const storedLang = localStorage.getItem(LANGUAGES);
    return storedLang || LANGUAGES.PT_BR;
}

function toggleLanguage() {
    const currentLang = restoreLanguage();
    const newLang = currentLang === LANGUAGES.PT_BR ? LANGUAGES.EN_US : LANGUAGES.PT_BR;
    saveLanguage(newLang);
}

export default {
    saveLanguage,
    restoreLanguage,
    toggleLanguage
}
