import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Root, { loader as rootLoader } from '@/pages';
import MovieDetails, {
  loader as movieDetailsLoader,
} from '@/pages/movie-details';
import ShowDetails, { loader as showLoader } from '@/pages/show-details';
import Movies, { loader as moviesLoader } from '@/pages/movies';
import Shows, { loader as showsLoader } from '@/pages/shows';
import { Layout, Error, RootError } from '@/components';

import './index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<RootError />}>
      <Route index element={<Root />} loader={rootLoader} />
      <Route path="movies">
        <Route index element={<Movies />} loader={moviesLoader} />
        <Route
          path=":id"
          element={<MovieDetails />}
          loader={movieDetailsLoader}
        />
      </Route>
      <Route path="shows" errorElement={<Error />}>
        <Route index element={<Shows />} loader={showsLoader} />
        <Route path=":id" element={<ShowDetails />} loader={showLoader} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
