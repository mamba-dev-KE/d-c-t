import {
  ActionFunctionArgs,
  Form,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useFetcher,
  useLoaderData,
} from 'react-router-dom';

export const action = async ({ params }: ActionFunctionArgs) => {
  const { id } = params;
  const res = await fetch(`http://localhost:8080/authors/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!res.ok) {
    throw res;
  }

  return redirect('..');
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  return fetch(`http://localhost:8080/authors/${id}`);
};

const TestDetails = () => {
  const data = useLoaderData() as { id: string; name: string; genre: string };
  return (
    <section>
      <h1>{data?.name}</h1>
      <h1>{data?.genre}</h1>

      <Form method="post">
        <button type="submit">Delete</button>
      </Form>
    </section>
  );
};

export default TestDetails;
