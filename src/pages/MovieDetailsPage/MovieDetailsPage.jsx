import Loader from "../components/Loader/Loader";
import MovieInfo from "../components/MoviInfo/MoviInfo";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovie } from "../Api";
import css from "./MovieDetailsPage.module.css";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
// import MovieReviews from "../components/MovieReviews/MovieReviews";
// import MovieCast from "../components/MovieCast/MovieCast";
// import MoviesPage from "./MoviesPage";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location?.state ?? "/");

  useEffect(() => {
    setLoader(true);
    setError(null);
    const fetchData = async () => {
      try {
        const data = await fetchMovie(movieId);
        setMovie(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);
  console.log(movieId);
  console.log(movie);

  return (
    <>
      <GoBackBtn path={goBack.current}>Go back to list</GoBackBtn>
      {loader && <Loader />}
      {movie && <MovieInfo {...movie} />}
      {error && toast.error("This is an error!")}
      <Toaster />
      <div className={css.castrew}>
        <NavLink to="cast">Movie cast</NavLink>
        <NavLink to="reviews">Movie reviews</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetailsPage;
