import { useEffect, useState } from "react";
import css from "./MovieDetailsPage/MovieDetailsPage.module.css";
import SearchForm from "../components/SearchForm/SearchForm";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import Loader from "../components/Loader/Loader";
import MovieInfo from "../components/MoviInfo/MoviInfo";
import toast, { Toaster } from "react-hot-toast";
import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import clsx from "clsx";
import { fetchMovieSearch } from "../Api";

const MoviesPage = () => {
  const [movie, setMovie] = useState(null); // Використання одного об'єкта для зберігання фільму
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get("query");
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (!query || query.trim() === "") {
        toast.error("Enter search term");
        return;
      }
      setError(null);
      try {
        setLoader(true);
        const data = await fetchMovieSearch(query);
        const getMovieData =
          data.results && data.results.length > 0 ? data.results[0] : null;
        if (getMovieData) {
          setMovie(getMovieData);
        } else {
          setTimeout(setError("No found movie"), 3000);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParam({ query: value });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />

      {movie && (
        <GoBackBtn path={location.state?.from ?? "/"}>
          Go back to list
        </GoBackBtn>
      )}
      {movie && <MovieInfo {...movie} />}
      {loader && <Loader />}
      {error && toast.error(error)}
      <Toaster />
      {movie && (
        <ul className={css.castrew}>
          <li>
            <NavLink
              to="cast"
              className={({ isActive }) =>
                clsx(css.link, isActive && css.active)
              }
            >
              Movie cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                clsx(css.link, isActive && css.active)
              }
            >
              Movie reviews
            </NavLink>
          </li>
        </ul>
      )}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MoviesPage;
