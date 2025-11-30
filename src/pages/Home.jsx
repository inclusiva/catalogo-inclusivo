import SearchBanner from "../components/SearchBanner";
import Pagination from "../components/Pagination"
import { useState, useEffect } from "react";
import { getLatestMovies, getSimilar } from "../api/fetchMovies";
import MovieCard from "../components/MovieCard";
import { useTranslation } from "../hooks/useTranslation";
import MovieDetailCard from "../components/MovieDetailCard";
import { useLanguage } from "../hooks/useLanguage";

export default function Home() {
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1);
  const totalPages = 6;
  const language = useLanguage()
  const translation = useTranslation()

  const handlePagination = (currentPage) => {
    setPage(currentPage)
  }

  async function fetchMovieList() {
    try {
      const data = await getLatestMovies({
        language,
        page,
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
    <>
    <SearchBanner 
    value={''} 
    onChange={()=>{console.log("onchange")}}
    onClick={()=>{console.log("onclick")}}
    />
    
      {movieList.map((item) => {
                return <MovieCard movie={item} key={item.id} />;
              })}
  
    <Pagination
        currentPage={page}
        onPageChange={handlePagination}
        totalPages={totalPages} />
    </> 
  )
}