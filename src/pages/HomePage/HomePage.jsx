import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchPopularMovies } from "../../services/api";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetchPopularMovies();
      setPopularMovies(data);
    };
    getPopularMovies();
  }, []);

  return (
    <div>
      <MovieList movies={popularMovies} />
    </div>
  );
};

export default HomePage;
