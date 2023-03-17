import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Root, { loader as rootLoader } from './pages';
import Movies, { loader as moviesLoader } from './pages/movies';
import MovieDetails, {
  loader as movieDetailsLoader,
} from './pages/movie-details';
import Shows, { loader as showsLoader } from './pages/shows';
import ShowDetails, { loader as showLoader } from './pages/show-details';

import Layout from '@/components/Layout/Layout';
import { Error } from './components/Error/Error';
import { RootError } from './components/Error/RootError';
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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
