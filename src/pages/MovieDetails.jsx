import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieDetailCard from "../components/MovieDetailCard";
import RecommendationList from "../components/RecommendationList";
import { getDetails } from "../api/fetchMovies";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../hooks/useLanguage";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const translation = useTranslation("movieDetails");
  const language = useLanguage();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        const movieData = await getDetails({ movie_id: id, language });

        if (!movieData) {
          throw new Error(translation?.errorLoading || "Filme não encontrado ou erro de conexão.");
        }

        setMovie(movieData);
      } catch (err) {
        console.error("Erro:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadData();
    }
  }, [id, language, translation]);

  if (loading) {
    return (
      <div className="container container-loading">{translation?.loading || "Carregando..."}.</div>
    );
  }

  if (error || !movie) {
    return (
      <div className="container error-container">
        <h2>{error || translation?.movieNotFound || "Erro ao carregar o filme"}</h2>
        <button className="back-button" onClick={() => navigate("/")}>
          {translation?.backToHome || "Voltar para Home"}
        </button>
      </div>
    );
  }

  return (
    <div className="movie-details-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          {translation?.backButton || "Voltar"}
        </button>
        <MovieDetailCard movie={movie} translation={translation} />
        <div className="recommendations-container">
          <h3 className="recommendation-title">
            {translation?.recommendationsTitle || "Filmes Recomendados"}
          </h3>
          <RecommendationList id={id} language={language} />
        </div>
      </div>
    </div>
  );
}
