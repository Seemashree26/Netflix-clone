import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./card.css";
import { addToWishlist } from "../../api/movie";

const baseUrl = "https://image.tmdb.org/t/p/w500";

const Card = ({ movie, orientation }) => {
  return (
    <div className="rows">
      <div className="single_card">
        <div className="card_img">
          <img
            src={`${baseUrl}${movie?.poster_path}`}
            alt="single movie card"
            className="card_poster"
            orientation={orientation}
          />
          <div className="card_content">
            <div className="icons">
              <FaRegPlayCircle className="play_icon" />
              <FaRegHeart
                className="heart_icon"
                onClick={() => addToWishlist(movie.id)}
              />
            </div>
            <h3 className="movie_title">{movie?.title || movie?.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
