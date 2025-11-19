const THEME_KEY = '@inclusiva/theme';
const THEMES = {
LIGHT: 'light',
DARK: 'dark',
};

/* SALVAR */
function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
}

 export function recoverTheme () {
        const  storedTheme = localStorage.getItem(THEME_KEY);
    return storedTheme || THEMES.LIGHT;
}

export function toggleTheme() {
    const currentTheme = recoverTheme();
    const newTheme = currentTheme === THEMES.LIGHT 
      ? THEMES.DARK 
      : THEMES.LIGHT;
    saveTheme(newTheme);
    return newTheme;
}


export default {saveTheme, recoverTheme, toggleTheme };