import { useState } from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {

    const pages = [];

    for (let i = 1; i <= totalPages; i = i + 1) {
      pages.push(i);
    }

    return (
      <div>
        {pages.map(page => (
          <button className="pagButton"
              key={page}
              onClick={() => onPageChange(page)}>
              {page}
        </button>
        ))}
      </div>
    );
  };
