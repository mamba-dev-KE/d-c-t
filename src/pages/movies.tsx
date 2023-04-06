import { Await, defer, useLoaderData } from 'react-router-dom';
import { getTrendingMovies } from '@/api/api';
import { Suspense } from 'react';
import { MoviesList } from '@/components';
import '@/styles/movies.scss';

export const loader = () => {
  return defer({ movies: getTrendingMovies() });
};

const Movies = () => {
  const moviesPromise = useLoaderData() as Awaited<
    Promise<{ movies: Movie[] }>
  >;

  type Movies = typeof moviesPromise.movies;

  return (
    <section className="movies">
      <h1 className="movies__title text-center">Trending Movies</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={moviesPromise.movies}>
          {(movies: Movies) => <MoviesList movies={movies} />}
        </Await>
      </Suspense>
    </section>
  );
};

export default Movies;
