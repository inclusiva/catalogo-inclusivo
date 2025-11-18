import Layout from "../layout";
import Pagination from "../components/Pagination"
import getLatestMovies from "../api/fetchMovies"
import { useState } from "react";

function Home() {

  const [page, setPage] = useState(1);
  const totalPages = 6;

  const handlePagination = () => {
    setPage(currentPage)
  }

  return (
    <>
        <Pagination
        totalPages={totalPages} />
    </>
  );
}

export default Home;