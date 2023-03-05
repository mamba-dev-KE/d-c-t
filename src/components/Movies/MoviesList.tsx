import type { Movies } from '@/api/api';
import { Link } from 'react-router-dom';

type Props = {
  movies: Movies[];
};

const MoviesList = ({ movies }: Props) => {
  return (
    <div className="movies__list-container grid">
      {movies?.map(({ backdrop_path, id, title }) => (
        <article key={id} className="movies__list-card">
          <Link to={String(id)}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
              alt=""
            />
            <h3 className="text-center">{title.slice(0, 28)}</h3>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default MoviesList;
