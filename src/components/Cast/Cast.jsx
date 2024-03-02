import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css'; // Убедитесь, что путь к файлу CSS модуля указан верно
import { apiCredits } from 'api/api';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const movieId = useParams().movieId;

  useEffect(() => {
    apiCredits(movieId).then(({ data }) => {
      setActors(data.cast);
    });
  }, [movieId]);

  return (
    <>
      {actors.length > 0 ? (
        <ul className={styles.castList}>
          {actors.map(actor => (
            <li key={actor.id} className={styles.castItem}>
              <img
                className={styles.actorImage}
                width={100}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GpwdwX0OwQ7OgfcCy_GotBCeNMfkznY75w&usqp=CAU'
                }
                alt={actor.name}
              />
              <div className={styles.actorDetails}>
                <span className={styles.characterName}>
                  Character: {actor.character}
                </span>
                <span className={styles.actorName}>Name: {actor.name}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </>
  );
};

export default Cast;
