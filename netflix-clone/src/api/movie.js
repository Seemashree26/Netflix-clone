import axios from "../libs/axios";
import requests from "../libs/requests";
export const getFetchTrending = async () => {
  try {
    const { data } = await axios.get(requests.fetchTrending);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getFetchNetflixOriginals = async () => {
  try {
    const { data } = await axios.get(requests.fetchNetflixOriginals);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getFetchTopRated = async () => {
  try {
    const { data } = await axios.get(requests.fetchTopRated);
    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getFetchActionMovies = async () => {
  try {
    const { data } = await axios.get(requests.fetchActionMovies);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getFetchComedyMovies = async () => {
  try {
    const { data } = await axios.get(requests.fetchComedyMovies);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getFetchHorrorMovies = async () => {
  try {
    const { data } = await axios.get(requests.fetchHorrorMovies);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getFetchRomanceMovies = async () => {
  try {
    const { data } = await axios.get(requests.fetchRomanceMovies);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getFetchAdventureMovies = async () => {
  try {
    const { data } = await axios.get(requests.fetchAdventureMovies);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getFetchWarMovies = async () => {
  try {
    const { data } = await axios.get(requests.fetchWarMovies);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getFetchScienceFictionMovies = async () => {
  try {
    const { data } = await axios.get(requests.fetchScienceFictionMovies);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getFetchDocumentaries = async () => {
  try {
    const { data } = await axios.get(requests.fetchDocumentaries);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const getSearchUrl = async () => {
  try {
    const { data } = await axios.get(requests.fetchNetflixOriginals);

    return data;
  } catch (error) {
    // alert(JSON.stringify(error));
    return null;
  }
};
export const addToWishlist = async (media_id) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDU4NDhhMjY3NTU1OWQzMGEwOWVjMzQwNzk3YjY3OSIsInN1YiI6IjY1NjVlNzVmMTU2Y2M3MDEwY2IzNjAwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IgcgWjKix7uFN79pDfzPR7MsXzIcc1FnrvqoeJOg7LQ`,
    },
  };

  const { data } = await axios.post(
    `account/20761730/favorite`,
    {
      media_type: "movie",
      media_id,
      favorite: true,
    },
    options
  );
  return data;
};

export const getWishlist = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDU4NDhhMjY3NTU1OWQzMGEwOWVjMzQwNzk3YjY3OSIsInN1YiI6IjY1NjVlNzVmMTU2Y2M3MDEwY2IzNjAwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IgcgWjKix7uFN79pDfzPR7MsXzIcc1FnrvqoeJOg7LQ`,
    },
  };
  const response = await axios.get(
    `account/20761730/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
    options
  );
  return response.data;
};
const getOptions = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
};
export const login = async (body) => {
  try {
    const { data } = await axios.get("authentication/token/new", getOptions);
    const { request_token } = data;
    const { data: response } = await axios.post(
      "authentication/token/validate_with_login",
      { ...body, request_token },
      getOptions
    );

    if (response?.success) {
      localStorage.setItem("user", true);
    }
    return response?.success ?? false;
  } catch (error) {
    console.log({ error: error.message });
  }
};
export const getPageData = async () => {
  const netflixOriginals = await getFetchNetflixOriginals();
  const trendingNow = await getFetchTrending();
  const topRated = await getFetchTopRated();
  const actionMovies = await getFetchActionMovies();
  const comedyMovies = await getFetchComedyMovies();
  const horrorMovies = await getFetchHorrorMovies();
  const romanceMovies = await getFetchRomanceMovies();
  const warMovies = await getFetchWarMovies();
  const scienceFictionMovies = await getFetchScienceFictionMovies();
  const documentaries = await getFetchDocumentaries();
  return {
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    warMovies,
    scienceFictionMovies,
    documentaries,
  };
};
