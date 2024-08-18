import { useParams } from "react-router-dom";
const MovieCast = () => {
  const { movieId } = useParams();
  return <div> Movie cast:{movieId}.</div>;
};

export default MovieCast;
