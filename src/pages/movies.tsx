import { Await, defer, useLoaderData } from 'react-router-dom';
import { getTrendingMovies } from '@/api/api';
import { Suspense } from 'react';
import MoviesList from '@/components/Movies/MoviesList';
import '@/styles/movies.scss';

export const loader = () => {
  return defer({ movies: getTrendingMovies() });
};

const Movies = () => {
  const moviesPromise = useLoaderData() as any;

  return (
    <section className="movie">
      <h1>Trending Movies</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={moviesPromise.movies}>
          {(movies) => <MoviesList movies={movies} />}
        </Await>
      </Suspense>
    </section>
  );
};

export default Movies;
