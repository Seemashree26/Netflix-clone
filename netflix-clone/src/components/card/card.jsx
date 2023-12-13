import React, { useState } from "react";
import { addToWishlist } from "../../api/movie";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import { ImSpinner6 } from "react-icons/im";
import "./card.css";

const baseUrl = "https://image.tmdb.org/t/p/w500";
const Card = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [isWishlistSelected, setIsWishlistSelected] = useState(false);
  const [isPlayBtnSelected, setIsPlayBtnSelected] = useState(false);

  const handleWishBtnClick = () => {
    setIsWishlistSelected(!isWishlistSelected);
    // alert("u clicked btn");
  };
  const handlePlayBtnClick = () => {
    setIsPlayBtnSelected(!isPlayBtnSelected);
    //alert("u clicked btn");
  };

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="movie-image"
        style={{ backgroundImage: `url(${baseUrl}${movie.backdrop_path})` }}
      >
        {isHovered && (
          <div className="overlay">
            <div className="fav-button">
              <button
                className={`card-button ${
                  isWishlistSelected ? "wishlist-selected" : ""
                }`}
                onClick={handleWishBtnClick}
              >
                {!isWishlistSelected && (
                  <IoMdHeartEmpty onClick={() => addToWishlist(movie?.id)} />
                )}
                {isWishlistSelected && <IoMdHeart />}
              </button>
            </div>
            <div className="movie_name">
              <h3>{movie.name || movie.title}</h3>
            </div>
            <div className="play-button">
              <button className={`card-button `} onClick={handlePlayBtnClick}>
                {!isPlayBtnSelected && <FaPlay />}
                {isPlayBtnSelected && <ImSpinner6 />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
