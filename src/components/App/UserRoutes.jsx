import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'shared/components/Loader/Loader';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const ImageFinderPage = lazy(() =>
  import('../../pages/ImageFinderPage/ImageFinderPage')
);
const MoviesFinderPage = lazy(() =>
  import('../../pages/MoviesFinderPage/MoviesFinderPage')
);
const TrendingMoviesPage = lazy(() =>
  import('../../pages/TrandingMoviesPage/TrendingMoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('../Movies/Cast/Cast'));
const Reviews = lazy(() => import('../Movies/Reviews/Reviews'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/image-finder" element={<ImageFinderPage />} />
          <Route path="/tranding-movies" element={<TrendingMoviesPage />} />
          <Route path="/movies-finder" element={<MoviesFinderPage />} />
          <Route path="/movies-finder/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
