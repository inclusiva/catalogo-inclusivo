import ThemeToggle from "./ThemeToggle"
import LanguageToggle from "./LanguageToggle"
import { useTranslation } from "../hooks/useTranslation";

export default function Header() {
    const translation = useTranslation('header')
    return (
        <header className="header-bg">
            <div className="main-container header-container">
                <h1 className="titleHeader">{translation.title}</h1>
                <div className="buttonContainer">
                    <ThemeToggle />
                    <LanguageToggle />
                    <img className="logo" src="/logo-branco.svg" alt={translation.logoAlt} />
                </div>
            </div>
        </header>
    )
}