export default function notFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">Ops!</h1>

      <h1 className="not-found-text">404 Página não encontrada!</h1>

      <img src="404.svg" className="not-found-img" />

      <div className="not-found-button">
        <a href="/">Voltar ao início</a>
      </div>
    </div>
  );
}
