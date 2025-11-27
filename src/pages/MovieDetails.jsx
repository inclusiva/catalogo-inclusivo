import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieDetailCard from "../components/MovieDetailCard";
import RecommendationList from "../components/RecommendationList";

export default function MovieDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "63ee529c0f57058c56d659e436a2661f";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    async function fetchMovieDetail() {
      try {
        setLoading(true);
        setError(null);


        const response = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`
        );

        if (!response.ok) {
          throw new Error("Não foi possível encontrar o filme.");
        }

        const data = await response.json();
        setMovie(data);

      } catch (err) {
        console.error("Erro:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }


    if (id) {
        fetchMovieDetail();
    }
  }, [id]);


  if (loading) {
    return <div className="loading">Carregando detalhes...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button className="back-button" onClick={() => navigate("/")}>
          Voltar para Home
        </button>
      </div>
    );
  }

  return (
    <div className="movie-details-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Voltar
        </button>
        <MovieDetailCard movie={movie} />
      </div>

      <div className="container recommendations-container">
        <h3 className="recommendation-title">
            Filmes Recomendados
        </h3>
  
        <RecommendationList id={id} />
      </div>
    </div>
  );
}