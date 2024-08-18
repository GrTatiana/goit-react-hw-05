import { Link } from "react-router-dom";
// import css from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map(({ title, id }) => (
        <div key={id}>
          <Link to={`/movies/${title}`}></Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
