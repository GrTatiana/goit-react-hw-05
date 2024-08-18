// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  return <div> Movie reviews:{movieId}.</div>;
};

export default MovieReviews;
