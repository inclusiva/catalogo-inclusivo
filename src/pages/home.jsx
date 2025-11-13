import Layout from "../layout";
import Pagination from "../components/Pagination"
import { fetchMovies } from "../api/fetchMovies"

function Home() {

  const [Page, setPage] = useState(1);
  const totalPages = 6;

  const { getLatestMovies } = fetchMovies();

  const handlePagination = () => {

  };

  return (
    <>
        <h1> Catálogo Inclusiva </h1>
        <Pagination
        currentPage={setPage} 
        totalPages={totalPages}
        onPageChange={handlePagination} />
    </>
  );
}

export default Home;