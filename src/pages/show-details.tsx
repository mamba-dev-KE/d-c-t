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
import { getShow } from '@/api/api';
import '@/styles/details.scss';

export const loader = ({ params }: LoaderFunctionArgs) => {
  return defer({ show: getShow(params.id) });
};

const ShowDetails = () => {
  const showPromise = useLoaderData() as Awaited<
    Promise<{ show: ShowDetails }>
  >;

  type Show = typeof showPromise.show;

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
        <Await resolve={showPromise.show}>
          {(show: Show) => (
            <div className="details__container flex flex-col">
              <div>
                <motion.div
                  variants={container}
                  transition={{
                    delayChildren: 1,
                  }}
                  className="details__container-header flex justify-between items-center "
                >
                  <h1 className="details__title text-center">{show?.name}</h1>
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
                  style={{ aspectRatio: '16/9', width: '100%' }}
                  src={`https://image.tmdb.org/t/p/w1280${show?.backdrop_path}`}
                  alt=""
                />
              </div>

              <div className="details__info">
                <ul className="flex">
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
                <p className="details__overview">{show?.overview}</p>
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </motion.section>
  );
};

export default ShowDetails;
