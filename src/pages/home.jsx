import Layout from "../layout";
import Pagination from "../components/Pagination"
import getLatestMovies from "../api/fetchMovies"
import { useState } from "react";

function Home() {

  const [page, setPage] = useState(1);
  const totalPages = 6;

  const handlePagination = (currentPage) => {
    setPage(currentPage)
  }

  return (
    <>
        <Pagination
        currentPage={page}
        onPageChange={handlePagination}
        totalPages={totalPages} />
    </>
  );
}

export default Home;