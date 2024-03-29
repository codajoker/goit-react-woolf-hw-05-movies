import { apiTrends } from 'api/api';
import MovieList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
export const Home = () => {
  const [arrayFilm, setArrayFilm] = useState([]);
  useEffect(() => {
    apiTrends().then(({ data }) => {
      return setArrayFilm(data.results);
    });
  }, []);

  return (
    <div>
      <h2> Trending Today</h2>
      {arrayFilm.length > 0 && <MovieList arrayFilm={arrayFilm} />}
    </div>
  );
};
export default Home;
