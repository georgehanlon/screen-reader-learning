import React from 'react';
import { Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/404';
import LevelOne from './pages/levels/one';
import LevelTwo from './pages/levels/two';
import LevelThree from './pages/levels/three';
import LevelFour from './pages/levels/four';
import LevelFive from './pages/levels/five';

const routes = () => {
  return [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'about',
      element: <AboutPage />
    },
    {
      path: '404',
      element: <NotFoundPage />
    },
    {
      path: 'levels/one',
      element: <LevelOne />
    },
    {
      path: 'levels/monkey',
      element: <LevelTwo />
    },
    {
      path: 'levels/bear',
      element: <LevelThree />
    },
    {
      path: 'levels/mouse',
      element: <LevelFour />
    },
    {
      path: 'levels/dog',
      element: <LevelFive />
    },
    {
      path: '*',
      element: <Navigate to="/404" />
    }
  ];
};

export default routes;