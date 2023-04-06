import { getMovie } from '@/api/api';
import { Suspense } from 'react';
import {
  Await,
  Link,
  LoaderFunctionArgs,
  defer,
  useLoaderData,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { imageFadeIn } from '@/common/animations';
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
    <section className="movie__details">
      <Suspense fallback={<h2>Loading....</h2>}>
        <Await
          resolve={moviePromise.movie}
          errorElement={<h2>AN error occured</h2>}
        >
          {(movie: Movie) => (
            <div className="movie__details-container">
              <div className="flex items-center">
                <Link to="..">Back</Link>
                <h1 className="movie__details-title text-center">
                  {movie?.title} : {movie?.tagline ?? ''}
                </h1>
              </div>
              <motion.img
                variants={imageFadeIn}
                initial="hidden"
                animate="visible"
                src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
                alt=""
              />
              <div className="">
                <ul className="flex">
                  <li>
                    <strong>Genre:</strong> {movie?.genres[1]?.name}
                  </li>
                  <li>
                    <strong>Release:</strong> {movie?.release_date}
                  </li>
                  <li>
                    <strong>Duration:</strong>{' '}
                    {movie.runtime
                      ? `${Math.round(movie?.runtime / 60)} hrs`
                      : 'unspecified hrs'}
                  </li>
                </ul>
              </div>
              <p>{movie?.overview}</p>
            </div>
          )}
        </Await>
      </Suspense>
    </section>
  );
};

export default MovieDetails;
