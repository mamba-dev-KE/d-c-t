import {
  ActionFunctionArgs,
  Form,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // return new Response(JSON.stringify('hello'), {
  //   status: 200,
  //   headers: {
  //     'Content-Type': 'application/json; utf-8',
  //   },
  // });
  // return fetch('https://jsonplaceholder.typicode.com/posts')
  const url = new URL(request.url);
  const search = url.searchParams.get('search');

  if (url.search !== '') {
    return fetch(`http://localhost:8080/authors?name=${search}`);
  }

  return fetch('http://localhost:8080/authors');
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const objData = Object.fromEntries(formData);

  const data = {
    id: crypto.randomUUID(),
    ...objData,
  };

  // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // });

  // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //   body: JSON.stringify({
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }),
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // });

  // await axios.post('http://localhost:8080/authors', data);
  const res = await fetch('http://localhost:8080/authors', {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!res.ok) {
    // throw new Error('An unknown error occured');
    throw res;
  }

  return { ok: true };
};

const Test = () => {
  const data = useLoaderData() as { id: string; name: string; genre: string }[];
  const navigation = useNavigation();

  return (
    <>
      <div className="search">
        <Form method="get">
          <input type="search" name="search" id="search" />
          <button>Search</button>
        </Form>
      </div>
      <Form
        method="post"
        style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}
      >
        <div className="">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="">
          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" id="genre" />
        </div>
        <button
          style={{
            backgroundColor: navigation.state === 'submitting' ? 'gray' : 'red',
            color: 'white',
            paddingBlock: '1rem',
            width: '15rem',
            border: 0,
          }}
          type="submit"
          // disabled={navigation.state === 'submitting' && true}
        >
          Submit
        </button>
      </Form>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '10px',
        }}
      >
        {data &&
          data?.map((item) => (
            <article
              key={item.id}
              style={{ border: '2px solid black', padding: '4rem' }}
            >
              <Link to={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.genre}</h3>
              </Link>
            </article>
          ))}
      </div>
    </>
  );
};

export default Test;
