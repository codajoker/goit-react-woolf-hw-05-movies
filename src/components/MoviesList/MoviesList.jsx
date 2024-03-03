import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';
const MovieList = ({ arrayFilm }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {arrayFilm.map(film => (
        <li key={film.id} className={styles.movieItem}>
          <Link
            to={`/movies/${film.id}`}
            className={styles.movieLink}
            state={location}
          >
            {film.title ? film.title : film.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
