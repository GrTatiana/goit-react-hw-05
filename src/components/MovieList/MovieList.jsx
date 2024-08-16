import { Link } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((item) => (
        <div key={movies.id}>
          <Link to={`${movies.name}`}></Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
