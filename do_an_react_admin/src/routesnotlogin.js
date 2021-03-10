import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginView from 'src/views/auth/LoginView';

const routesnotlogin = [
  {
    path: '',
    element: <LoginView />,
    children: [
      { path: '*', element: <Navigate to="/" /> }
    ]
  }
];

export default routesnotlogin;
