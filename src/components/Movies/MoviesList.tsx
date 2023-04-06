import { motion } from 'framer-motion';
import { container } from '@/common/animations';
import { Card as MovieCard } from '@/components';

type Props = {
  movies: Movie[];
};

export const MoviesList = ({ movies }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="movie-show__list-container grid"
    >
      {movies?.map(({ id, backdrop_path, title }) => (
        <MovieCard key={id} items={{ backdrop_path, id, title }} />
      ))}
    </motion.div>
  );
};
