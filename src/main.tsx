import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Root, { loader as rootLoader } from './pages';
import Movies, { loader as moviesLoader } from './pages/movies';
import MovieDetails, {
  loader as movieDetailsLoader,
} from './pages/movie-details';

import './index.scss';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import Shows, { loader as showsLoader } from './pages/shows';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Root />} loader={rootLoader} />
      <Route path="movies">
        <Route index element={<Movies />} loader={moviesLoader} />
        <Route
          path=":id"
          element={<MovieDetails />}
          loader={movieDetailsLoader}
        />
      </Route>
      <Route path="shows" element={<Shows />} loader={showsLoader} />
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
