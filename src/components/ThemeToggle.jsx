import { useState } from "react"
import { toggleTheme, recoverTheme} from '../utils/theme'

export default function ThemeToggle(){
    const [currentTheme, setCurrentTheme] = useState(recoverTheme());

    const isDark = currentTheme === 'dark';
    const icon = isDark ? '/lua-branca.svg' : '/sol-branco.svg';
    const altText = isDark ? 'Dark Mode' : 'Light Mode';

    return (
        <button className="themeButton" onClick={() => setCurrentTheme(toggleTheme())}  aria-label={altText}>
        <img src={icon} alt={altText}/>
        </button>
    );
}