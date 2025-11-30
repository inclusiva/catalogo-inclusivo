import { useTranslation } from "../hooks/useTranslation";

function SearchBanner({ value, onClick, onChange }) {
  const translation = useTranslation("searchBanner");
  return (
    <section className="banner">
      <h1 className="banner-titulo">{translation.title}</h1>
      <p className="banner-subtitulo">{translation.subtitle}</p>
      <div className="area-busca">
        <input
          type="text"
          placeholder={translation.placeholder} //digite o nome do filme
          value={value}
          onChange={onChange}
          className="busca-input"
        />
        <button onClick={onClick} className="busca-botao">
          {translation.button}
        </button>
      </div>
    </section>
  );
}

export default SearchBanner;
