import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getLatestMovies } from "../api/fetchMovies";
import LANGUAGES from "../constants/language";
import "../css/global.css";
export default function Home() {
  const [movieList, setMovieList] = useState([]);

  async function fetchMovieList() {
    try {
      const data = await getLatestMovies({
        language: LANGUAGES.PT_BR,
        page: 1,
      });

      setMovieList(data.results);
    } catch (error) {
      console.log("erro: ", error);
    }
  }

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <div className="cards-container">
      {
      movieList.map((item) => {
        return <MovieCard movie={item} />;
      })
      }
    </div>
  );
}
