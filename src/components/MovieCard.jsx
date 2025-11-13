import { Link, useNavigate } from "react-router-dom";
import "../css/global.css";

/* *
 * movie: {
 * poster_path,
 * title,
 * vote_average (0 a 10)
 * }
 */

export default function MovieCard({ movie, onClick }) {
  const navigate = useNavigate();
  const { title, id, poster_path, vote_average } = movie;
  console.log(movie);
  const nota = (vote_average / 2).toFixed(1);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/no-image.png";

  function moviePageHandle(id) {
    navigate(`/movie/${id}`);
  }
  return (
      <div className="card" onClick={moviePageHandle}>
        <img src={imageUrl} alt="pôster" className="img-test" />
        <div className="card-footer">
          <p>{title}</p>
          <p>{nota}</p>
        </div>
      </div>
  );
}
