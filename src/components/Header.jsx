import ThemeToggle from "./ThemeToggle"
import LanguageToggle from "./LanguageToggle"

export default function Header() {
    return (
        <header className="header-bg">
            <div className="main-container header-container">
                <h1 className="titleHeader">Catálogo Inclusiva</h1>
                <div className="buttonContainer">
                    <ThemeToggle />
                    <LanguageToggle />
                    <img className="logo" src="/logo-branco.svg" alt="logo" />
                </div>
            </div>
        </header>
    )
}