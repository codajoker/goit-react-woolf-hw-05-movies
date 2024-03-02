import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css'; // Убедитесь, что путь к файлу CSS модуля указан верно
import { apiReviews } from 'api/api';

const Review = () => {
  const [reviews, setReview] = useState([]);
  const movieId = useParams().movieId;

  useEffect(() => {
    apiReviews(movieId).then(({ data }) => {
      setReview(data.results);
    });
  }, [movieId]);

  return (
    <>
      <ul className={styles.reviewsList}>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id} className={styles.reviewItem}>
              <h2 className={styles.reviewAuthor}>Author: {review.author}</h2>
              <p className={styles.reviewContent}>Content: {review.content}</p>
            </li>
          ))
        ) : (
          <span className={styles.noReviews}>Oops, no reviews yet.</span>
        )}
      </ul>
    </>
  );
};

export default Review;
