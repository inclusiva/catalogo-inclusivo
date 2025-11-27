import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieDetailCard from "../components/MovieDetailCard";
import RecommendationList from "../components/RecommendationList";
import { getDetails } from "../api/fetchMovies"; 

export default function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                setError(null);

                const movieData = await getDetails({ movie_id: id });
                
                if (!movieData) {
                    throw new Error("Filme não encontrado ou erro de conexão.");
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
    }, [id]);

    if (loading) {
        return <div className="container-loading">Carregando detalhes...</div>;
    }

    if (error || !movie) {
        return (
            <div className="container error-container">
                <h2>{error || "Erro ao carregar o filme"}</h2>
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