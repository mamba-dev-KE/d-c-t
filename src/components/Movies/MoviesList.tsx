import { motion } from 'framer-motion';
import { Card as MovieCard } from '../Card/Card';

type Props = {
  movies: Movie[];
};

const container = {
  visible: {
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
      {movies?.map(({ id, backdrop_path, title }) => (
        <MovieCard key={id} items={{ backdrop_path, id, title }} />
      ))}
    </motion.div>
  );
};
