import { apiSearch } from 'api/api';
import FormMovie from 'components/FormMovie/FormMovie';
import MovieList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Movie = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [arrayFilm, setArrayFilm] = useState([]);
  const [inputValue, setInputValue] = useState();
  const location = useLocation();
  useEffect(() => {
    if (searchParams.get('query')) {
      apiSearch(searchParams.get('query')).then(({ data }) => {
        return setArrayFilm(data.results);
      });
    }
  }, [searchParams]);
  const onSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ query: inputValue.trim() });
    if (searchParams.get('query') === '') {
      return alert('Введите в поле поиска еще что-то ');
    }
    apiSearch(searchParams.get('query')).then(({ data }) => {
      return setArrayFilm(data.results);
    });
  };
  return (
    <>
      <FormMovie onSubmitForm={onSubmitForm} setInputValue={setInputValue} />
      <MovieList
        arrayFilm={arrayFilm}
        state={`${location.pathname}${location.search}`}
      />
    </>
  );
};
export default Movie;
