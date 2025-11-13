function SearchBanner ({ value, onClick, onChange })  {
    return (
        <section className= "banner">
            <h1 className="banner-titulo">Bem-vindo (a)</h1>
            <p className="banner-subtitulo">Milhões de filmes para descobrir.Explore já.</p>
            <div className="area-busca">
                <input type="text"
                placeholder="digite o nome do filme"
                value={value}
                onChange={onChange}
                className="busca-input"
                />
                <button onClick={onClick} className="busca-botao">Buscar</button>
                
                </div>
        </section>
    );
};

export default SearchBanner;