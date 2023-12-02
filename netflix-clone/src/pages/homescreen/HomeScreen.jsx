import "./homeScreen.css";
import { useState, useEffect } from "react";
import Nav from "../../components/nav/Nav";
import Button from "../../components/button/Button";
import { getPageData } from "../../api/movie";
import MoviesRow from "../../components/moviesRow/MoviesRow";
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

  // console.log(movie);

  const [data, setData] = useState(null);
  useEffect(() => {
    getPageData().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div className="homeScreen">
      <Nav />
      <img
        src={`${baseUrl + movie?.backdrop_path}`}
        alt="Poster"
        className="banner"
        loading="lazy"
      />

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
        <div className="portrait_posters">
          <h2>NETFLIX ORIGINALS</h2>
          <MoviesRow
            data={data?.netflixOriginals?.results}
            orientation={"portrait"}
          />
        </div>
        <div className="landscape_posters">
          <h2>TRENDING NOW</h2>
          <MoviesRow
            data={data?.trendingNow?.results}
            orientation={"landscape"}
          />
        </div>
        <div className="landscape_posters">
          <h2>TOP RATED</h2>
          <MoviesRow data={data?.topRated?.results} orientation={"landscape"} />
        </div>
        <div className="landscape_posters">
          <h2>ACTION MOVIES</h2>
          <MoviesRow
            data={data?.actionMovies?.results}
            orientation={"landscape"}
          />
        </div>
        <div className="landscape_posters">
          <h2>COMEDY MOVIES</h2>
          <MoviesRow
            data={data?.comedyMovies?.results}
            orientation={"landscape"}
          />
        </div>
        <div className="landscape_posters">
          <h2>HORROR MOVIES</h2>
          <MoviesRow
            data={data?.horrorMovies?.results}
            orientation={"landscape"}
          />
        </div>
        <div className="landscape_posters">
          <h2>ROMANCE MOVIES</h2>
          <MoviesRow
            data={data?.romanceMovies?.results}
            orientation={"landscape"}
          />
        </div>
        <div className="landscape_posters">
          <h2>WAR MOVIES</h2>
          <MoviesRow
            data={data?.warMovies?.results}
            orientation={"landscape"}
          />
        </div>
        <div className="landscape_posters">
          <h2>SCIENCE MOVIES</h2>
          <MoviesRow
            data={data?.scienceFictionMovies?.results}
            orientation={"landscape"}
          />
        </div>
        <div className="landscape_posters">
          <h2>DOCUMENTARIES</h2>

          <MoviesRow
            data={data?.documentaries?.results}
            orientation={"landscape"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
