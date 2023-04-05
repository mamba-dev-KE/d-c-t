import type { Movies } from '@/api/api';
import { motion } from 'framer-motion';
import { Card as MovieCard } from '../Card/Card';

type Props = {
  movies: Movies[];
};

export const container = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.2,
    x: -200,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0)',
    scale: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const MoviesList = ({ movies }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="movies__list-container grid"
    >
      {movies?.map(({ backdrop_path, id, title }) => (
        <MovieCard key={id} items={{ backdrop_path, id, title }} />
      ))}
    </motion.div>
  );
};
