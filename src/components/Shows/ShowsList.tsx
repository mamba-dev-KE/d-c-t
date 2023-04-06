import { motion } from 'framer-motion';
import { Card as ShowCard } from '../Card/Card';

type Props = {
  shows: Show[];
};

const container = {
  hidden: {
    opacity: 0,
    filter: 'blur(3px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const ShowsList = ({ shows }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="movies__list-container grid"
    >
      {shows?.map(({ id, backdrop_path, name }) => (
        <ShowCard key={id} items={{ id, backdrop_path, name }} />
      ))}
    </motion.div>
  );
};
