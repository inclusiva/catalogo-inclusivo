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
    const icon = isDark ? '🌙' : '☀️';
    const altText = isDark ? 'Dark Mode' : 'Light Mode';

    return (
        <button onClick={handleToggleTheme}
            style={{
                padding: '10px 15px', 
                cursor: 'pointer', 
                fontSize: '1rem',
                border: '1px solid currentColor',
                background: 'transparent',
                borderRadius: '5px'
            }}
        aria-label={altText}>
            {icon}
        </button>
    );
}