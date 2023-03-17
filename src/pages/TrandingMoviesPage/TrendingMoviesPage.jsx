import { Container } from '@mui/material';

import TrendingMovies from 'components/Movies/TrendingMovies/TrendingMovies';

const TrendingMoviesPage = () => {
  return (
    <Container maxWidth="xl">
      <TrendingMovies />
    </Container>
  );
};

export default TrendingMoviesPage;
