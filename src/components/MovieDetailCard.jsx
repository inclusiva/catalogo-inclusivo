import React from "react";
import "../css/movieDetail.css";

export default function MovieDetailCard({ movie, translation }) {
  if (!movie) return null;

  const { poster_path, title, overview, vote_average, genres = [] } = movie;

  const imageUrl = poster_path
  
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/no-image.jpg";

    const nota = vote_average ? (vote_average / 2).toFixed(1) : "0.0";
  const displayTitle = title || translation?.defaultTitle || "Título do filme";
  const displayOverview = overview || translation?.noOverview || "Descrição não disponível";
  const starAlt = translation?.starAlt || "Estrela";

  return (
    <section className="movie-card">
      <img src={imageUrl} alt={displayTitle} className="movie-poster" />

      <div className="movie-info">
        <h2 className="movie-title">{displayTitle}</h2>

        <div className="movie-rating-genres">
          <div className="movie-rating">
            <img src="/star.svg" alt={starAlt} className="star-icon" />
            <span>{nota}/5</span>
          </div>

          <div className="movie-genres">
            {genres.length ? (
              genres.map((g) => (
                <span key={g.id || g.name} className="movie-genre">
                  {g.name}
                </span>
              ))
            ) : (
              <span className="movie-genre-empty">
                {translation?.noGenres || "Gêneros não informados"}
              </span>
            )}
          </div>
        </div>

        <p className="movie-overview">{displayOverview}</p>
      </div>
    </section>
  );
}
