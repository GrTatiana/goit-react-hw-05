import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    api_read_access_token:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWQ5YmYzZGVlODQwMmVkZmU5Y2M4Yjg4YmNkZmI3MiIsIm5iZiI6MTcyMzgzNjczNi41MzkwNjEsInN1YiI6IjY2YmZhNjIyYTEyOTE1ODJhYjQ4OWJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9CI6iSQmnb4jmTZUitsyJUs4FLzd7k8QgapyaXWgcuM",
    Authorization: "Bearer api_read_access_token",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
