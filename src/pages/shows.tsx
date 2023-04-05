import { Await, defer, useLoaderData } from 'react-router-dom';
import { getTrendingShows } from '@/api/api';
import { Suspense } from 'react';
import { ShowsList } from '@/components';
import '@/styles/shows.scss';

export const loader = () => {
  return defer({ shows: getTrendingShows() });
};

const Shows = () => {
  const showsPromise = useLoaderData() as any;

  return (
    <section className="shows">
      <h1>Trending Shows</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={showsPromise.shows}>
          {(shows) => {
            console.log(shows);
            return <ShowsList shows={shows} />;
          }}
        </Await>
      </Suspense>
    </section>
  );
};

export default Shows;
