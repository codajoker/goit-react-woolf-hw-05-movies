import React from 'react';
import styles from './MovieDetailsPageMarkup.module.css'; // Убедитесь, что путь к файлу CSS модуля указан верно

function MovieDetailsPageMarkup({ movie }) {
  return (
    <div className={styles.movieDetails}>
      <img
        className={styles.movieImage}
        width={300}
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
            : 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg'
        }
        alt={`${movie.title} poster`}
      />
      <div className={styles.movieContent}>
        <h1 className={styles.movieTitle}>
          {movie.title} ({movie.release_date.split('-')[0]})
        </h1>
        <span className={styles.userScore}>
          User Score: {movie.vote_average * 10}%
        </span>
        <h2>Overview</h2>
        <p className={styles.overview}>{movie.overview}</p>
        <h2>Genres</h2>
        <ul className={styles.genresList}>
          {movie.genres.map(genre => (
            <li key={genre.id} className={styles.genreItem}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetailsPageMarkup;
