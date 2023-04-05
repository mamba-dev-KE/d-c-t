import { getShow } from '@/api/api';
import { Suspense, useState } from 'react';
import {
  Await,
  Link,
  LoaderFunctionArgs,
  defer,
  useLoaderData,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';

import { imagePixelDust } from '@/common/animations';
import '@/styles/shows.scss';

export const loader = ({ params }: LoaderFunctionArgs) => {
  return defer({ show: getShow(params.id) });
};

const ShowDetails = () => {
  const [isLiked, setIsLiked] = useState(false);

  const showPromise = useLoaderData() as any;

  return (
    <section className="movie__details">
      <Suspense fallback={<h2>Loading....</h2>}>
        <Await resolve={showPromise.show}>
          {(show) => (
            <div className="show__details-container">
              <div className="flex items-center">
                <div className="show__details-info">
                  <div className="flex items-center">
                    <Link to="..">Back</Link>
                    <h1 className="show__details-title text-center">
                      {show?.name} : {show?.tagline ?? ''}
                    </h1>
                  </div>
                  <motion.img
                    variants={imagePixelDust}
                    initial="hidden"
                    animate="visible"
                    style={{ aspectRatio: '16/9', width: '100%' }}
                    src={`https://image.tmdb.org/t/p/w1280${show?.backdrop_path}`}
                    alt=""
                  />
                  <ul
                    className="flex"
                    style={{ listStyle: 'none', gap: '2rem' }}
                  >
                    <li>
                      <strong>Genre:</strong>{' '}
                      {show?.genres[1]?.name ?? 'unspecified'}
                    </li>
                    <li>
                      <strong>Release:</strong>{' '}
                      {show?.first_air_date ?? 'unspecified'}
                    </li>
                    <li>
                      <strong>Duration:</strong>{' '}
                      {Math.round(show?.episode_run_time[0] / 60) ??
                        'unspecified'}
                      hrs
                    </li>
                  </ul>
                </div>
                <div className="show__details-overview">
                  <p>{show?.overview}</p>
                  <div className="flex items-center">
                    <p className="flex items-center">
                      <span>Like</span>
                      {isLiked ? (
                        <HeartIcon
                          width={40}
                          onClick={() => setIsLiked(!isLiked)}
                        />
                      ) : (
                        <HeartIconOutline
                          width={40}
                          onClick={() => setIsLiked(!isLiked)}
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </section>
  );
};

export default ShowDetails;
