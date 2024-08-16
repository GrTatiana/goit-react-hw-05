import { useState } from "react";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");

  const onSubmit = (query) => {
    if (!query) {
      return alert("OOps..");
    }
    setQuery(value);
    setImages([]);
    setIsVisible(false);
    setIsEmpty(false);
    setError(null);
  };

  return (
    <div>
      <form className={css.form} onSubmit={onSubmit}>
        <input className={css.input} type="text" name="movie" />
        <button type="submit" className={css.button}>
          SEARCH
        </button>
      </form>
    </div>
  );
};
export default MoviesPage;
