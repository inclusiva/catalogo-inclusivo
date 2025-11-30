import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "../hooks/useTranslation";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const translation = useTranslation("header");
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <header className="header-bg">
      <div className="main-container header-container">
        <div onClick={handleTitleClick} className="header-title-container">
          <img className="logo" src="/logo-branco.svg" alt={translation.logoAlt} />
          <h1 className="titleHeader">{translation.title}</h1>
        </div>
        <div className="buttonContainer">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
