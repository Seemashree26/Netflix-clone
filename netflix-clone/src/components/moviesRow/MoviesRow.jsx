import "./moviesRow.css";
import Card from "../card/Card";
import Carousel from "../carousel/Carousel";
const MoviesRow = ({ title, data }) => {
  return (
    <section>
      {title && <h2 className="row_heading">{title}</h2>}
      <Carousel data={data} render={(item) => <Card movie={item} />} />
    </section>
  );
};
export default MoviesRow;
