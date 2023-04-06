import { type Variants, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = {
  items: {
    id: number;
    backdrop_path: string | null;
    name?: string;
    title?: string;
  };
};

const card: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(3px)',
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    filter: 'blur(0)',
  },
};

export const Card = ({ items }: Props) => {
  const { id, backdrop_path, title, name } = items;

  return (
    <motion.article variants={card} className="movies__list-card">
      <Link to={String(id)} style={{ textDecoration: 'none', color: 'black' }}>
        <img
          src={` https://image.tmdb.org/t/p/original${backdrop_path}`}
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
