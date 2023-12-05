import { useEffect, useState } from "react";

import "./carousel.css";

const Carousel = ({ data, size = 5, render }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(data?.length / size);
  const [{ start, end, total }, setRange] = useState({
    start: 0,
    end: size,
    total: data?.length,
  });

  useEffect(() => {
    const start = (currentPage - 1) * size;
    const end = currentPage * size;

    setRange({
      start,
      end,
      total,
    });
  }, [currentPage, size, total]);

  const handleNext = () => {
    currentPage < totalPages && setCurrentPage((pre) => pre + 1);
  };
  const handlePrevious = () => {
    currentPage > 1 && setCurrentPage((pre) => pre - 1);
  };
  return (
    <main>
      <section>
        <div className="main-rows">
          <button
            className="left-arrow"
            disabled={currentPage === 1}
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width={"23px"}
              height={"23px"}
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <ul className="row-container">
            {data?.slice(start, end)?.map((item) => (
              <li key={item?.id}>{render(item)}</li>
            ))}
          </ul>
          <button
            className="right-arrow"
            disabled={currentPage === totalPages}
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.647-3.646a.5.5 0 0 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L13.293 9.5H1.5a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Carousel;
