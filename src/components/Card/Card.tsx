import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = {
  items: {
    id: number;
    backdrop_path: string | null;
    name?: string;
    title?: string;
  };
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0)',
  },
};

export const Card = ({ items }: Props) => {
  const { id, backdrop_path, title, name } = items;

  return (
    <motion.article variants={cardVariants} className="movies__list-card">
      <Link to={String(id)} style={{ textDecoration: 'none', color: 'black' }}>
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/original${backdrop_path}`
              : 'https://via.placeholder.com/600x400'
          }
          alt=""
          loading="lazy"
        />
        <h3 className="text-center">
          {title?.slice(0, 28) ?? name?.slice(0, 28)}
        </h3>
      </Link>
    </motion.article>
  );
};
