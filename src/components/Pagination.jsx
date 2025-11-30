export default function Pagination({ page, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i = i + 1) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">
      {pages.map((pageNumber) => (
        <button
          className={`pagButton ${pageNumber === page ? "active" : ""}`}
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
