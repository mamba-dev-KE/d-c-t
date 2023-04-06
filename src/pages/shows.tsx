import { Await, defer, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import { getTrendingShows } from '@/api/api';
import { ShowsList } from '@/components';
import '@/styles/list.scss';

export const loader = () => {
  return defer({ shows: getTrendingShows() });
};

const Shows = () => {
  const showsPromise = useLoaderData() as Awaited<Promise<{ shows: Show[] }>>;

  type Shows = typeof showsPromise.shows;

  return (
    <section className="movie-show">
      <h1 className="movie-show__title text-center">Trending Shows</h1>
      <Suspense fallback={<h2 className="suspense-title">Loading...</h2>}>
        <Await resolve={showsPromise.shows}>
          {(shows: Shows) => <ShowsList shows={shows} />}
        </Await>
      </Suspense>
    </section>
  );
};

export default Shows;
