import { FiSearch } from "react-icons/fi";
import styles from "./SearchForm.module.css";
import { useState } from "react";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <FiSearch size="16px" />
        </button>
        <input
          type="input"
          onChange={handleChange}
          className={css.input}
          name="movie"
          placeholder="Enter a movie title to search for"
        />
        {/* {regions.map(({ id, name, value }) => (
          <div key={id} value={value}>
            {name}
          </div> */}
        ))}
      </form>
    </>
  );
};

export default SearchForm;
