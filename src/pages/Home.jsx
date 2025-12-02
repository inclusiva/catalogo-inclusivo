import SearchBanner from "../components/SearchBanner";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";
import { getLatestMovies, getSearch } from "../api/fetchMovies";
import MovieCard from "../components/MovieCard";
import { useLanguage } from "../hooks/useLanguage";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  
  const totalPages = 6;
  const language = useLanguage();

  const handlePagination = (currentPage) => {
    setPage(currentPage);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(query.trim());
    setPage(1);
  }

  const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
};
    async function fetchMovieList() {
      setLoading(true);

      try {
        let data = [];
        if(searchQuery) {
          data = await getSearch({
            language,
            page,
            query: searchQuery,
          });
        } else {
          data = await getLatestMovies({
            language,
            page,
          });
        }

        if (data && data.results && Array.isArray(data.results)) {
          setMovieList(data.results);
        } else {
          setMovieList([]);
        }
      } catch (error) {
        console.log("erro: ", error);
        setMovieList([]);
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    fetchMovieList();
  }, [page, language, searchQuery]);

  return (
    <section className="home-container">
      <SearchBanner
        value={query}
        onChange={handleInputChange}
        onClick={handleSearch}
        onKeyDown={handleKeyDown}
      />

      <div className="movie-list-container">
        {movieList && movieList.map((item) => {
          return <MovieCard movie={item} key={item.id} />;
        })}

        { movieList.length === 0 && !loading && (
            <div className="no-movies">No movies found.</div>
          )}

      </div>

      <Pagination 
        page={page}
        onPageChange={handlePagination}
        totalPages={totalPages}
      />
    </section>
  );
}
