import { Container } from '@mui/material';

import MovieSearch from 'components/Movies/MovieSearch/MovieSearch';

const MoviesFinderPage = () => {
  return (
    <Container maxWidth="xl">
      <MovieSearch />
    </Container>
  );
};

export default MoviesFinderPage;
