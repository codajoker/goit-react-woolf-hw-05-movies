import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';
const MovieList = ({ arrayFilm, state }) => {
  return (
    <ul className={styles.movieList}>
      {arrayFilm &&
        arrayFilm.map(
          film =>
            film.title && (
              <li key={film.id} className={styles.movieItem}>
                <Link to={`/movies/${film.id}`} className={styles.movieLink}>
                  {film.title}
                </Link>
              </li>
            )
        )}
    </ul>
  );
};

export default MovieList;
