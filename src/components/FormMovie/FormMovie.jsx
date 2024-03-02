import React from 'react';
import styles from './FormMovie.module.css'; // Убедитесь, что путь к файлу CSS модуля указан верно

const FormMovie = ({ onSubmitForm, setInputValue }) => {
  return (
    <form onSubmit={e => onSubmitForm(e)} className={styles.form}>
      <input
        onChange={e => setInputValue(e.target.value)}
        type="text"
        className={styles.input}
        placeholder="Search for a movie..."
      />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default FormMovie;
