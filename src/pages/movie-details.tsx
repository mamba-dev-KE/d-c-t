import { getMovie } from '@/api/api';
import { Suspense } from 'react';
import {
  Await,
  Link,
  LoaderFunctionArgs,
  defer,
  useLoaderData,
} from 'react-router-dom';
import '@/styles/movies.scss';

export const loader = ({ params }: LoaderFunctionArgs) => {
  return defer({ movie: getMovie(params.id) });
};

const MovieDetails = () => {
  const moviePromise = useLoaderData() as any;

  return (
    <section className="movie__details">
      <Suspense fallback={<h2>Loading....</h2>}>
        <Await
          resolve={moviePromise.movie}
          errorElement={<h2>AN error occured</h2>}
        >
          {(movie) => (
            <div className="movie__details-container">
              <div className="flex items-center">
                <Link to="..">Back</Link>
                <h1 className="movie__details-title text-center">
                  {movie?.title} : {movie?.tagline ?? ''}
                </h1>
              </div>
              <img
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
                    <strong>Duration:</strong> {Math.round(movie?.runtime / 60)}
                    hrs
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
