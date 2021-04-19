import React from 'react';
import { Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/404';

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
      path: '*',
      element: <Navigate to="/404" />
    }
  ];
};

export default routes;