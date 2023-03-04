import { useLoaderData } from 'react-router-dom';
import '@/styles/root.scss';

export const loader = () => {
  return 'Yoooh';
};

export const Root = () => {
  const data = useLoaderData();

  return (
    <section className="home">
      <h1 className="home__title text-center">Movies or Series!</h1>
      {JSON.stringify(data)}
    </section>
  );
};

export default Root;
