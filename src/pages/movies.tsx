import { Await, defer, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import { getTrendingMovies } from '@/api/api';
import { MoviesList } from '@/components';
import '@/styles/list.scss';

export const loader = () => {
  return defer({ movies: getTrendingMovies() });
};

const Movies = () => {
  const moviesPromise = useLoaderData() as Awaited<
    Promise<{ movies: Movie[] }>
  >;

  type Movies = typeof moviesPromise.movies;

  return (
    <section className="movie-show">
      <h1 className="movie-show__title text-center">Trending Movies</h1>
      <Suspense fallback={<h2 className="suspense-title">Loading...</h2>}>
        <Await resolve={moviesPromise.movies}>
          {(movies: Movies) => <MoviesList movies={movies} />}
        </Await>
      </Suspense>
    </section>
  );
};

export default Movies;
