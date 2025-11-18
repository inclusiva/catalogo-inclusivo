import "../css/global.css";
import { useState, useEffect } from "react";
import { getLatestMovies, getSimilar } from "../api/fetchMovies";
import LANGUAGES from "../constants/language";
import MovieCard from "./MovieCard";

export default function RecommendationList({ id }) {
  const [movieList, setMovieList] = useState([]);

  async function fetchMovieList() {
    try {
      const data = await getSimilar({
        movie_id: id,
        language: LANGUAGES.PT_BR,
        page: 1,
      });
      const filteredMovieList =
        data.results.length > 6 ? data.results.slice(0, 6) : data.results;
      console.log(data.results.slice(0, 6));

      setMovieList(filteredMovieList);
    } catch (error) {
      console.log("erro: ", error);
    }
  }

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <>
      <div className="cards-container">
        {movieList.map((item) => {
          return <MovieCard movie={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
