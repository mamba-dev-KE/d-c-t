import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
        <h2>
          {error.status} {error?.statusText}
        </h2>
      </div>
    );
  }

  throw error;
};
