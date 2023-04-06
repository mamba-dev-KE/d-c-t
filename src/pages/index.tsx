import { Suspense } from 'react';
import { Await, Link, defer, useLoaderData } from 'react-router-dom';
import { Variants, motion } from 'framer-motion';
import { getTrendingMovies, getTrendingShows } from '@/api/api';
import { generateRandomNumber } from '@/utils';
import '@/styles/root.scss';

export const loader = () => {
  return defer({ movie: getTrendingMovies(), shows: getTrendingShows() });
};

export const Root = () => {
  const loaderData = useLoaderData() as Awaited<
    Promise<{ movie: Movie[]; shows: Shows[] }>
  >;

  type MoviesType = typeof loaderData.movie;

  const title: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const categories: Variants = {
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

  const category: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      filter: 'blur(3px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
  };

  return (
    <motion.section initial="hidden" animate="visible" className="home">
      <h1 className="home__title text-center">Movies or Series!</h1>
      <Suspense
        fallback={
          <motion.h2 variants={title} className="suspense-title">
            Loading..please wait...
          </motion.h2>
        }
      >
        <motion.div variants={categories} className="home__cards">
          <Await
            resolve={loaderData.movie}
            errorElement={<h2>An error occured</h2>}
          >
            {(movies: MoviesType) => {
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
                      {typeof movie?.backdrop_path === 'undefined' ? (
                        <img
                          src="https://via.placeholder.com/600x400"
                          alt={movie?.title}
                          draggable={false}
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <img
                          src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
                          alt={movie?.title}
                          draggable={false}
                          style={{ objectFit: 'cover' }}
                        />
                      )}
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
            resolve={loaderData.shows}
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
                      {typeof show?.backdrop_path === 'undefined' ? (
                        <img
                          src="https://via.placeholder.com/600x400"
                          alt={show?.title}
                          draggable={false}
                        />
                      ) : (
                        <img
                          src={`https://image.tmdb.org/t/p/w1280${show?.backdrop_path}`}
                          alt={show?.title}
                          draggable={false}
                        />
                      )}
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
    </motion.section>
  );
};

export default Root;
