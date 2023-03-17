import { useRouteError } from 'react-router-dom';

export const RootError = () => {
  const error = useRouteError();
  return <pre>Error: {JSON.stringify(error, null, 2)}</pre>;
};
