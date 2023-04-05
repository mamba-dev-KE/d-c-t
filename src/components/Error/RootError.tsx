import { useRouteError } from 'react-router-dom';

export const RootError = () => {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <>
        {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
        <h3>{error instanceof Error && error.message}</h3>
      </>
    );
  }

  return null;
};
