import { Suspense } from 'react';
import {
  Await,
  Link,
  LoaderFunctionArgs,
  defer,
  useLoaderData,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { container, pixelDusts } from '@/common/animations';
import { getMovie } from '@/api/api';
import '@/styles/details.scss';

export const loader = ({ params }: LoaderFunctionArgs) => {
  return defer({ movie: getMovie(params.id) });
};

const MovieDetails = () => {
  const moviePromise = useLoaderData() as Awaited<
    Promise<{ movie: MovieDetails }>
  >;

  type Movie = typeof moviePromise.movie;

  return (
    <motion.section initial="hidden" animate="visible" className="details">
      <Suspense
        fallback={
          <h2
            className="suspense-title"
            style={{ marginBlockStart: '3.5srem' }}
          >
            Loading....
          </h2>
        }
      >
        <Await resolve={moviePromise.movie}>
          {(movie: Movie) => (
            <div className="details__container flex flex-col">
              <div>
                <motion.div
                  variants={container}
                  transition={{
                    delayChildren: 1,
                  }}
                  className="details__container-header flex justify-between items-center "
                >
                  <h1 className="details__title text-center">{movie?.title}</h1>
                  <Link
                    to=".."
                    className="details__back-btn"
                    style={{ textDecoration: 'none' }}
                  >
                    Back
                  </Link>
                </motion.div>

                <motion.img
                  variants={pixelDusts}
                  className="details__backdrop"
                  style={{ aspectRatio: '16/9', width: '100%' }}
                  src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
                  alt=""
                />
              </div>

              <div className="details__info">
                <ul className="flex">
                  <li>
                    <strong>Genre:</strong>{' '}
                    {movie?.genres[1]?.name ?? 'unspecified'}
                  </li>
                  <li>
                    <strong>Release:</strong>{' '}
                    {movie?.release_date ?? 'unspecified'}
                  </li>
                  <li>
                    <strong>Duration:</strong>{' '}
                    {movie.runtime
                      ? Math.round(movie?.runtime / 60)
                      : 'unspecified'}
                    hrs
                  </li>
                </ul>
                <p className="details__overview">{movie?.overview}</p>
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </motion.section>
  );
};

export default MovieDetails;
