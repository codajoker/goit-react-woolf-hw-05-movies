import Navigation from 'components/Navigation/Navigation';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const loader = (path, component) => {
  return lazy(() => import(`./${path}/${component}/${component}`));
};
const HomePage = loader('Pages', 'Home');
const MovieDetails = loader('Pages', 'MovieDetails');
const MoviesPage = loader('Pages', 'Movies');
const Cast = loader('components', 'Cast');
const Review = loader('components', 'Review');
export const App = () => {
  return (
    <>
      <Suspense fallback={''}>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path={`cast`} element={<Cast />} />
            <Route path={`reviews`} element={<Review />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
