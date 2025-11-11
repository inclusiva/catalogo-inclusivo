import Layout from "../layout";
import Pagination from "../components/Pagination";



const handlePagination = () => {

const [page, setPage] = useState(1);
const totalPages = 6;

};

function Home() {
  return (
    <>
        <h1> Catálogo Inclusiva </h1>
        <Pagination />
    </>
  );
}

export default Home;