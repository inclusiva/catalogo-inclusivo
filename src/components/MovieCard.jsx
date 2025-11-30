import { useNavigate } from "react-router-dom";
import "../css/global.css";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  if (!movie) return null;

  const { title, id, poster_path, vote_average } = movie;
  const nota = vote_average ? (vote_average / 2).toFixed(1) : "0.0";

  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "/no-image.jpg";

  function moviePageHandle(id) {
    navigate(`/movie/${id}`);
  }
  return (
    <div className="card" onClick={() => moviePageHandle(id)}>
      <img src={imageUrl} alt="pôster" className="img-test" />
      <div className="card-footer">
        <p className="movie-card-title">{title}</p>
        <p className="movie-av">{nota}/5</p>
      </div>
    </div>
  );
}
