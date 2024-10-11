import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchAllMovies, fetchSearchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import FilterMovies from "../../components/FilterMovies/FilterMovies";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || ""; // Упрощение

  useEffect(() => {
    const getMovies = async () => {
      try {
        let data;
        if (query) {
          data = await fetchSearchMovies(query);
        } else {
          data = await fetchAllMovies();
        }
        // Проверка на наличие данных и их формат
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getMovies();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  if (!movies.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <FilterMovies handleChangeQuery={handleChangeQuery} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
