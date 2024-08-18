import MovieList from "../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../Api";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  // const list = getMovies();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchTrendingMovies();
        console.log(fetchTrendingMovies());
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log({ movies });
  return (
    <>
      <h1 style={{ color: "black" }}>Trending movies</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {error && toast.error("This is an error!")}
      <Toaster />
    </>
  );
};
export default HomePage;
