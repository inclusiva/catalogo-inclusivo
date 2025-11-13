import { useState } from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {

    const pages = [];

    for (let i = 1; i <= totalPages; i = i + 1) {pages.push(i)};

    return (
      <div>
        {pages.map(page => (
          <button
              key={page}
              onClick={() => onPageChange(page)}
              style={{
                background: currentPage === page ? "#e91e63" : "white",
                color: currentPage === page ? "white" : "#e91e63"
              }}>
              {page}
        </button>
        ))};
      </div>
    );
  };
