import { toggleLanguage, restoreLanguage } from '../utils/language'
import { LANGUAGES } from '../constants/language'

export default function LanguageToggle() {

    const savedLanguage = restoreLanguage();

    return (

        <button className="langButton" onClick={toggleLanguage()}>
            {savedLanguage === LANGUAGES.PT_BR ? <h3>BR</h3> : <h3>US</h3>}
        </button>
    )
}