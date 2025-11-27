

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
                



