import { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
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
            <GrPrevious />
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
            <GrNext />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Carousel;
