import { Dispatch, SetStateAction } from 'react';

type PageControlProps = {
  totalNumberOfItems: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export default function PageControl({
  totalNumberOfItems,
  page,
  setPage,
}: PageControlProps) {
  const numberOfPages = Math.ceil(totalNumberOfItems / 10);
  return (
    <div className="flex gap-2 mb-10 flex-wrap">
      {page > 1 && (
        <button className="btn" onClick={() => setPage(p => p - 1)}>
          Previous
        </button>
      )}
      {Array.from(Array(numberOfPages).keys()).map(pageNumber => {
        return (
          <button
            className={`btn ${
              page == pageNumber + 1 ? 'bg-accent-focus text-white' : ''
            }`}
            key={pageNumber}
            onClick={() => setPage(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        );
      })}
      {page < numberOfPages && (
        <button className="btn" onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      )}
    </div>
  );
}
