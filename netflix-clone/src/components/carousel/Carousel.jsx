import { useEffect, useState } from "react";
import style from "./carousel.module.css";

const Carousel = ({ data, size = 5, render }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(data.length / size);
  const [{ start, end, total }, setRange] = useState({
    start: 0,
    end: size,
    total: data.length,
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
      <h3>
        showing {currentPage} of {totalPages}
      </h3>
      <section>
        <ul className={style.container}>
          {data.slice(start, end).map((item) => (
            <li key={item.id}>{render(item)}</li>
          ))}
        </ul>
        <div className={style.actionContainer}>
          <button disabled={currentPage === 1} onClick={handlePrevious}>
            previous
          </button>
          <button disabled={currentPage === totalPages} onClick={handleNext}>
            next
          </button>
        </div>
      </section>
    </main>
  );
};

export default Carousel;
