// import { useState } from "react";

import SearchForm from "../components/SearchForm/SearchForm";

const MoviesPage = () => {
  // const [query, setQuery] = useState("");

  // const onSubmit = (query) => {
  //   if (!query) {
  //     return alert("OOps..");
  //   }
  //   setQuery(value);
  //   setImages([]);
  //   setIsVisible(false);
  //   setIsEmpty(false);
  //   setError(null);
  // };

  return (
    <div>
      <SearchForm />
    </div>
  );
};
export default MoviesPage;
