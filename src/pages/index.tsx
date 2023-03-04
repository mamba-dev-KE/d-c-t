import { Await, defer, useLoaderData } from 'react-router-dom';
import { getTrendingMovies } from '@/api/api';
import { Suspense } from 'react';
import { generateRandomNumber } from '@/utils';
import '@/styles/root.scss';

export const loader = () => {
  return defer({ movie: getTrendingMovies() });
};

export const Root = () => {
  const moviePromise = useLoaderData() as any;

  return (
    <section className="home">
      <h1 className="home__title text-center">Movies or Series!</h1>
      <Suspense fallback={<h2>Loading... please wait..</h2>}>
        <Await
          resolve={moviePromise.movie}
          errorElement={<h2>AN error occured</h2>}
        >
          {(movies) => {
            const randomNo = generateRandomNumber(movies.length);
            const movie = movies[randomNo];
            return (
              <div className="home__movie-cards flex justify-center">
                <article className="home__movie-card flex-1">
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    alt={movie?.title}
                  />
                  {JSON.stringify(movie, null, 2)}
                </article>
                <article className="home__movie-card flex-1">
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    alt={movie?.title}
                  />
                  {JSON.stringify(movie, null, 2)}
                </article>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
};

export default Root;
