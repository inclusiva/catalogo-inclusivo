import { toggleLanguage, restoreLanguage } from '../utils/language'
import  LANGUAGES  from '../constants/language'
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageToggle() {

    const savedLanguage = useLanguage();

    

    return (

        <button className="langButton" onClick={toggleLanguage}>
            {savedLanguage === LANGUAGES.PT_BR ? "BR" : "US"}
        </button>
    )
}