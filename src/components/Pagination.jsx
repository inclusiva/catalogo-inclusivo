import { useState } from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {

  return (
    <div>
      {[...Array(totalPages)].map((_, i) => {
        const num = i + 1;
        return (
          <button
            key={num}
            onClick={() => setPage(num)}
            style={{
              background: page === num ? "#e91e63" : "white",
              color: page === num ? "white" : "#e91e63"
            }}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}