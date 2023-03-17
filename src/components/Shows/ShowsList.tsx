import { motion } from 'framer-motion';
import { Card as ShowCard } from '../Card/Card';
import type { Shows } from '@/api/api';

type Props = {
  shows: Shows[];
};

const container = {
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

const ShowsList = ({ shows }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="movies__list-container grid"
    >
      {shows?.map(({ id, backdrop_path, name }) => (
        <ShowCard items={{ id, backdrop_path, name }} />
      ))}
    </motion.div>
  );
};

export default ShowsList;
