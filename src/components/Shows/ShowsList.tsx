import { motion } from 'framer-motion';
import { container } from '@/common/animations';
import { Card as ShowCard } from '@/components';

type Props = {
  shows: Show[];
};

export const ShowsList = ({ shows }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="movie-show__list-container grid"
    >
      {shows?.map(({ id, backdrop_path, name }) => (
        <ShowCard key={id} items={{ id, backdrop_path, name }} />
      ))}
    </motion.div>
  );
};
