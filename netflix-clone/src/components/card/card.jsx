import React, { useState } from "react";
import "./card.css";
import { addToWishlist } from "../../api/movie";

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
            <div>
              <h3>{movie.name || movie.title}</h3>
            </div>
            <div className="fav-buff">
              <button
                className={`wishlist-button ${
                  isWishlistSelected ? "wishlist-selected" : ""
                }`}
                onClick={handleWishBtnClick}
              >
                {!isWishlistSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                    onClick={() => addToWishlist(movie?.id)}
                  </svg>
                )}
                {isWishlistSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                )}
              </button>
              <button
                className={`wishlist-button `}
                onClick={handlePlayBtnClick}
              >
                {!isPlayBtnSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                )}
                {isPlayBtnSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
