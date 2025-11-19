import SearchBanner from "../components/SearchBanner";
import Pagination from "../components/Pagination"
import { useState } from "react";

export default function Home() {
  
  const [page, setPage] = useState(1);
  const totalPages = 6;

  const handlePagination = (currentPage) => {
    setPage(currentPage)
  }
  return (
    <>
    <SearchBanner 
    value={"input"} 
    onChange={()=>{console.log("onchange")}}
    onClick={()=>{console.log("onclick")}}
    />
    <Pagination
        currentPage={page}
        onPageChange={handlePagination}
        totalPages={totalPages} />

    </> 
  )
}