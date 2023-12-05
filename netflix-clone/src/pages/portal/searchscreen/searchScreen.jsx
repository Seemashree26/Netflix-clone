import { useState, useEffect } from "react";
import axios from "../../libs/axios";
import Input from "../../components/input/Input";
import Nav from "../../components/nav/Nav";
import "./searchScreen.css";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async (query) => {
    try {
      const response = await axios.get(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
      );
      const results = response.data.results;
      console.log(response);
      return results;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    if (search) {
      getMovies(search).then((results) => {
        setMovies(results);
        console.log(search);
      });
    }
  }, [search]);

  return (
    <>
      <div className="searchScreen">
        <Nav />

        <div className="search_input">
          <Input
            type="search"
            size="largeInputEmail"
            placeholder="Search Movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button text={"search"} size="medium" />
        </div>
        <div className="search_content">
          {movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
