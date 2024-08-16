// import { useState } from 'react'
// import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import { Route, Routes } from "react-router-dom";
// import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
// import ReactDOM from "react-dom";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <HomePage />
        {/* <Navigation /> */}
      </header>
      {/* <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </main> */}
    </>
  );
}

export default App;
