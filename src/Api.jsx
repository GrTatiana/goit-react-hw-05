import axios from "axios";

// const url =  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// const axios = require("axios");
export const fetchTrendingMovies = async () => {
  const apiKey = "7ad9bf3dee8402edfe9cc8b88bcdfb72"; // замініть на ваш API ключ
  const timeWindow = "day"; // або 'week'
  const url = `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apiKey}`;

  const response = await axios.get(url);
  return response.data.results;
};
export const fetchMovie = async (movieId) => {
  const apiKey = "7ad9bf3dee8402edfe9cc8b88bcdfb72";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  const response = await axios.get(url);

  return country[0];
};
// https://api.themoviedb.org/3/movie/${movieId}/credits

// const options = {
//   headers: {
//     api_read_access_token:
//       "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWQ5YmYzZGVlODQwMmVkZmU5Y2M4Yjg4YmNkZmI3MiIsIm5iZiI6MTcyMzgzNjczNi41MzkwNjEsInN1YiI6IjY2YmZhNjIyYTEyOTE1ODJhYjQ4OWJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9CI6iSQmnb4jmTZUitsyJUs4FLzd7k8QgapyaXWgcuM",
//     Authorization: "Bearer api_read_access_token",
//   },
// };

// const url1 = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
// const options1 = {
//   headers: {
//     accept: "application/json",
//     Authorization: "Bearer 7ad9bf3dee8402edfe9cc8b88bcdfb72",
//   },
// };

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// export const getMovies = () => {
//   return movies;
// };

// export const getMoviesById = (moviesId) => {
//   return movies.find((movies) => movies.id === moviesId);
// };
