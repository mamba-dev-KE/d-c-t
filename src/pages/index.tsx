import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
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
      <Suspense fallback={<h2>Loading... please wait..</h2>}>
        <motion.div
          variants={categories}
          initial="hidden"
          animate="visible"
          className="home__cards flex justify-center"
        >
          <Await
            resolve={moviePromise.movie}
            errorElement={<h2>AN error occured</h2>}
          >
            {(movies) => {
              const randomNo = generateRandomNumber(movies.length);
              const movie = movies[randomNo];

              return (
                <motion.article
                  variants={category}
                  className="home__card flex-1"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    alt={movie?.title}
                    draggable={false}
                  />
                </motion.article>
              );
            }}
          </Await>
          <Await
            resolve={moviePromise.shows}
            errorElement={<h2>AN error occured</h2>}
          >
            {(movies) => {
              const randomNo = generateRandomNumber(movies.length);
              const movie = movies[randomNo];

              return (
                <motion.article
                  variants={category}
                  className="home__card home__card--show flex-1"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    alt={movie?.title}
                    draggable={false}
                  />
                </motion.article>
              );
            }}
          </Await>
        </motion.div>
      </Suspense>
    </section>
  );
};

export default Root;
