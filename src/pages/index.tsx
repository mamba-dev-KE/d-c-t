import { Suspense } from 'react';
import { Await, Link, defer, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getTrendingMovies, getTrendingShows } from '@/api/api';
import { generateRandomNumber } from '@/utils';
import '@/styles/root.scss';

export const loader = () => {
  return defer({ movie: getTrendingMovies(), shows: getTrendingShows() });
};

export const Root = () => {
  const moviePromise = useLoaderData() as any;

  const categories = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const category = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
  };

  return (
    <section className="home">
      <h1 className="home__title text-center">Movies or Series!</h1>
      <Suspense
        fallback={
          <h2
            style={{ textAlign: 'center', color: 'pink', fontSize: '1.5rem' }}
          >
            Loading..please wait
          </h2>
        }
      >
        <motion.div
          variants={categories}
          initial="hidden"
          animate="visible"
          className="home__cards"
        >
          <Await
            resolve={moviePromise.movie}
            errorElement={<h2>An error occured</h2>}
          >
            {(movies) => {
              const randomNo = generateRandomNumber(movies.length);
              const movie = movies[randomNo];

              return (
                <Link to="movies" style={{ textDecoration: 'none' }}>
                  <div className="home__card-container flex flex-col">
                    <motion.article
                      variants={category}
                      className="home__card"
                      style={{ overflow: 'hidden' }}
                    >
                      <img
                        src={
                          `https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}` ??
                          'https://via.placeholder.com/600x400'
                        }
                        alt={movie?.title}
                        draggable={false}
                        style={{ objectFit: 'cover' }}
                      />
                    </motion.article>
                    <h4 className="home__card-title text-center">
                      {movie?.title}
                    </h4>
                  </div>
                </Link>
              );
            }}
          </Await>
          <Await
            resolve={moviePromise.shows}
            errorElement={<h2>An error occured</h2>}
          >
            {(shows) => {
              const randomNo = generateRandomNumber(shows.length);
              const show = shows[randomNo];

              return (
                <Link to="shows" style={{ textDecoration: 'none' }}>
                  <div className="home__card-container flex flex-col">
                    <motion.article
                      variants={category}
                      className="home__card home__card--show"
                    >
                      <img
                        src={
                          `https://image.tmdb.org/t/p/w1280${show?.backdrop_path}` ??
                          'https://via.placeholder.com/600x400'
                        }
                        alt={show?.title}
                        draggable={false}
                      />
                    </motion.article>
                    <h4 className="home__card-title text-center">
                      {show?.name}
                    </h4>
                  </div>
                </Link>
              );
            }}
          </Await>
        </motion.div>
      </Suspense>
    </section>
  );
};

export default Root;
