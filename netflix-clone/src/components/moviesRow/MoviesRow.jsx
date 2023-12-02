import "./moviesRow.css";
import Card from "../card/Card";
const MoviesRow = ({ data }) => {
  return (
    <ul className="rows">
      {data?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
export default MoviesRow;
