import { createBrowserRouter } from 'react-router-dom';


import App from './App.jsx';
import Home from './components/Home/home.jsx';
import SinglePageMovies from './components/singlePageMovies.jsx';
import LoginRegestringPage from './components/LoginRegestringComponent.jsx';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/movies_detail/:movieID',
          element: <SinglePageMovies/>
        },
        {
          path:'/regestring',
          element: <LoginRegestringPage/>
        }
      ],
    },
  ],
)