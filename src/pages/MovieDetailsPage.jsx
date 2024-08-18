import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));

const MovieDetailsPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default MovieDetailsPage;
