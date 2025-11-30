import SearchBanner from "../components/SearchBanner";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";
import { getLatestMovies } from "../api/fetchMovies";
import MovieCard from "../components/MovieCard";
import { useLanguage } from "../hooks/useLanguage";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 6;
  const language = useLanguage();

  const handlePagination = (currentPage) => {
    setPage(currentPage);
  };

  useEffect(() => {
    async function fetchMovieList() {
      try {
        const data = await getLatestMovies({
          language,
          page,
        });
        if (data && data.results && Array.isArray(data.results)) {
          setMovieList(data.results);
        } else {
          setMovieList([]);
        }
      } catch (error) {
        console.log("erro: ", error);
        setMovieList([]);
      }
    }

    fetchMovieList();
  }, [page, language]);
  return (
    <section className="home-container">
      <SearchBanner
        value={""}
        onChange={() => {
          console.log("onchange");
        }}
        onClick={() => {
          console.log("onclick");
        }}
      />

      <div className="movie-list-container">
        {movieList.map((item) => {
          return <MovieCard movie={item} key={item.id} />;
        })}
      </div>

      <Pagination page={page} onPageChange={handlePagination} totalPages={totalPages} />
    </section>
  );
}
