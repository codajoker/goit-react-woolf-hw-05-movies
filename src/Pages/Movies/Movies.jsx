import { apiSearch } from 'api/api';
import FormMovie from 'components/FormMovie/FormMovie';
import MovieList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movie = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [arrayFilm, setArrayFilm] = useState([]);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    apiSearch(query).then(({ data }) => {
      return setArrayFilm(data.results);
    });
  }, [searchParams]);
  const onSubmitForm = e => {
    setSearchParams({ query: inputValue.trim() });
  };
  return (
    <>
      <FormMovie onSubmitForm={onSubmitForm} setInputValue={setInputValue} />
      {arrayFilm.length > 0 && <MovieList arrayFilm={arrayFilm} />}
    </>
  );
};
export default Movie;
