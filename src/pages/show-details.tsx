import { getShow } from '@/api/api';
import { Suspense } from 'react';
import {
  Await,
  Link,
  LoaderFunctionArgs,
  defer,
  useLoaderData,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import '@/styles/movies.scss';

export const loader = ({ params }: LoaderFunctionArgs) => {
  return defer({ show: getShow(params.id) });
};

const ShowDetails = () => {
  const showPromise = useLoaderData() as any;

  return (
    <section className="movie__details">
      <Suspense fallback={<h2>Loading....</h2>}>
        <Await resolve={showPromise.show}>
          {(show) => (
            <div className="movie__details-container">
              <div className="flex items-center">
                <Link to="..">Back</Link>
                <h1 className="movie__details-title text-center">
                  {show?.name} : {show?.tagline ?? ''}
                </h1>
              </div>
              <motion.img
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                style={{ aspectRatio: '16/9', width: '100%' }}
                src={`https://image.tmdb.org/t/p/w1280${show?.backdrop_path}`}
                alt=""
              />
              <div className="">
                <ul className="flex">
                  <li>
                    <strong>Genre:</strong> {show?.genres[1]?.name}
                  </li>
                  <li>
                    <strong>Release:</strong> {show?.first_air_date}
                  </li>
                  <li>
                    <strong>Duration:</strong>{' '}
                    {Math.round(show?.episode_run_time[0] / 60)}
                    hrs
                  </li>
                </ul>
              </div>
              <p>{show?.overview}</p>
            </div>
          )}
        </Await>
      </Suspense>
    </section>
  );
};

export default ShowDetails;
