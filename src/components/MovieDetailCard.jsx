import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = "63ee529c0f57058c56d659e436a2661f";
    const BASE_URL = "https://api.themoviedb.org/3";
}

//BUSCAR
useEffect(() => {
    async function loadData() {
    try {
        setLoading(true);
        setError(null);

// DETALHES
const resMovie = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR` );

    if (!resMovie.ok) throw new Error("Filme não encontrado.");
const movieData = await resMovie.json();
    setMovie(movieData);        

const resSimilar = await fetch(
    `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=pt-BR&page=1`);

    if (!resSimilar.ok) throw new Error("Erro ao buscar filmes similares");

    const similarData = await resSimilar.json();
    setSimilarMovies(similarData.results || []);
      } catch (err) {
    setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id]);

// CARREGANDO...
if (loading) {
    return <div className="loading">Carregando...</div>;
  }

// TESTE DE ERRO
if (erro || !filme) {
  return (
      <div>
        <h2>Erro ao carregar o filme</h2>
        <button onClick={() => navigate("/")}>Voltar para o Início</button>
      </div>
    );
  }

// DETALHAR 
<MovieDetailCard movie={movie} />

// BOTAO VOLTAR
<button onClick={() => navigate(-1)}> Voltar </button>



export default function MovieDetailCard({ movie }) {
    if (!movie) return null;
    const {
        poster_path,
        title = "Título do filme",
        overview = "Descrição não disponível",
        vote_average = 8,
        genres = [], 
    } = movie;
    
        const imageUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : "/no-poster_path.jpg";

    return (
        <section className="movie-card">
            <img src={imageUrl} alt={title} className="movie-poster" />
            
            <div className="movie-info">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-overview">{overview}</p>
            
            <div className="movie-rating">
                <img src="/star.svg" alt="Star Icon" className="star-icon" />
                <span>{vote_average ? `${vote_average.toFixed(1)}/5` : 'N/A'}</span>
            </div>
        
            <div className="movie-genres">
            {genres.length ? (
                    genres.map((g) => (
                        <span key={g.id || g.name} className="movie-genre">{g.name}</span>
                    ))
                ) : (
                    <span className="movie-genre-empty">Gêneros não informados</span>
                )}             
            </div>
            
            </div>
        </section>
    );
}