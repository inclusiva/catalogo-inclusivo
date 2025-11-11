import React from "react";

const SearchBanner = ({ value, onChange, onclick }) => {
    return (
        <section className= "banner">
            <h1 className="banner-titulo">Bem-vindo (a)</h1>
            <p className="banner-subtitulo">Milhões de filmes para descobrir.Explore já.</p>
            <div className="area-busca">
                <input type=""
                placeholder="digite o nome do filme"
                value={value}
                onChange={onChange}
                className="busca-input"
                />
                <button onclick={onclick} className="busca-botao">Buscar</button>
                
                </div>

        </section>
    );
};
