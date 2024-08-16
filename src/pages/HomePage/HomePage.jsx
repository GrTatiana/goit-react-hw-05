import css from "./HomePage.module.css";
import MovieList from "src/components/MovieList/MovieList.jsx";
import { getMovies } from "../../Api";
const HomePage = () => {
  const list = getMovies();
  return (
    <div>
      <h1 className={css.title}>Trending movies</h1>
      <MovieList movies={list} />
    </div>
  );
};
export default HomePage;
