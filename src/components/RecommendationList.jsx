import "../css/global.css";
import { useState, useEffect } from "react";
import { getSimilar } from "../api/fetchMovies";
import LANGUAGES from "../constants/language";
import MovieCard from "./MovieCard";

export default function RecommendationList({ id, language = LANGUAGES.PT_BR }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function fetchMovieList() {
      try {
        const data = await getSimilar({
          movie_id: id,
          language: language,
          page: 1,
        });

        if (data && data.results && Array.isArray(data.results)) {
          const filteredMovieList =
            data.results.length > 6 ? data.results.slice(0, 6) : data.results;
          setMovieList(filteredMovieList);
        }
      } catch (error) {
        console.log("erro: ", error);
        setMovieList([]);
      }
    }

    if (id) {
      fetchMovieList();
    }
  }, [id, language]);

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
