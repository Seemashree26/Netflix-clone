import "./homeScreen.css";
import { useState, useEffect } from "react";
import Nav from "../../../components/nav/Nav";
import Button from "../../../components/button/Button";
import { getPageData } from "../../../api/movie";
import MoviesRow from "../../../components/moviesRow/MoviesRow";
import "./homeScreen.css";
const baseUrl = "https://image.tmdb.org/t/p/original";

const HomeScreen = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getMovie = () => {
      getPageData().then((response) =>
        setMovie(
          response?.netflixOriginals?.results[
            Math.floor(
              Math.random() * (response?.netflixOriginals?.results.length - 1)
            )
          ]
        )
      );
    };
    getMovie();
    const key = setInterval(() => getMovie(), 5000);

    return () => {
      clearInterval(key);
    };
  }, []);

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };

  const [data, setData] = useState(null);
  useEffect(() => {
    getPageData().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div className="homeScreen">
      <Nav background={"nav_transparent"} />
      <div className="banner">
        <img
          src={`${baseUrl + movie?.backdrop_path}`}
          alt="Poster"
          loading="lazy"
        />
      </div>

      <div className="banner_content">
        <h1>{movie?.name}</h1>

        <div className="banner_buttons">
          <Button text={"Play"} />
          <Button text={"Watch Later"} />
        </div>
        <div className="banner_description">
          <p>{handleDescription(movie?.overview, 200)}</p>
        </div>
      </div>
      <div className="bannerfade_bottom" />

      <div className="row_posters">
        <h2>NETFLIX ORIGINALS</h2>
        <MoviesRow data={data?.netflixOriginals?.results} />

        <h2>TRENDING NOW</h2>
        <MoviesRow data={data?.trendingNow?.results} />

        <h2>TOP RATED</h2>
        <MoviesRow data={data?.topRated?.results} />

        <h2>ACTION MOVIES</h2>
        <MoviesRow data={data?.actionMovies?.results} />

        <h2>HORROR MOVIES</h2>
        <MoviesRow data={data?.horrorMovies?.results} />

        <h2>ROMANCE MOVIES</h2>
        <MoviesRow data={data?.romanceMovies?.results} />

        <h2>WAR MOVIES</h2>
        <MoviesRow data={data?.warMovies?.results} />

        <h2>SCIENCE MOVIES</h2>
        <MoviesRow data={data?.scienceFictionMovies?.results} />

        <h2>DOCUMENTARIES</h2>

        <MoviesRow data={data?.documentaries?.results} />
      </div>
    </div>
  );
};

export default HomeScreen;
