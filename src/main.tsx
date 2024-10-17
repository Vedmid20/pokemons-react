import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PersonList from './components/PersonList';
import PokemonDetail from './components/PokemonDetail';
import NotFound from './components/NotFound'


const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonList />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetail />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
