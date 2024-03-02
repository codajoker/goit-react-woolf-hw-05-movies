import React, { useEffect, useMemo, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import MovieDetailsPageMurkup from './MovieDetailsPageMurkup';
import styles from './MovieDetails.module.css'; // Убедитесь, что путь к файлу CSS модуля указан верно
import { apiDetails } from 'api/api';

export const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(false);

  useEffect(() => {
    apiDetails(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);
  const movieDetailsPageMarkupMemo = useMemo(() => {
    return movie && <MovieDetailsPageMurkup movie={movie} />;
  }, [movie]);
  return (
    <>
      <Link to={location?.state ?? '/'} className={styles.goBackLink}>
        Go back
      </Link>

      {movie && (
        <>
          {movieDetailsPageMarkupMemo}
          <div className={styles.additionalInfo}>
            <h2>Additional information</h2>
            <ul className={styles.infoList}>
              <li className={styles.navItem}>
                <NavLink
                  to="cast"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Cast
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="reviews"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
