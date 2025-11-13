import { useState } from "react"
import { toggleTheme,recoverTheme} from '../utils/theme'

export default function ThemeToggle(){
    const [currentTheme, setCurrentTheme] = useState(recoverTheme());

    const handleToggleTheme = () => {
        const newTheme = toggleTheme();
        setCurrentTheme(newTheme);
    };

    useEffect(() => {
        const initialiTheme = recoverTheme();
        setCurrentTheme(initialiTheme);
    }, []);

    const isDark = currentTheme === 'dark';
    const icon = isDark ? '/lua-branca.svg' : '/sol-branco.svg';
    const altText = isDark ? 'Dark Mode' : 'Light Mode';

    return (
        <button onClick={handleToggleTheme}  aria-label={altText}>
            {icon}
        </button>
    );
}