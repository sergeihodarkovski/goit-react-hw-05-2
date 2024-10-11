import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.moviesWrapper}>
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <li className={s.item} key={movie.id}>
            <Link to={`/movies/${movie.id.toString()}`} state={location}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width={200}
              />
              <p className={s.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        ))
      ) : (
        <p>No movies available</p>
      )}
    </ul>
  );
};

export default MovieList;
